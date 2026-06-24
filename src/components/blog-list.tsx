"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { useI18n } from "@/components/language-provider";
import type { Locale } from "@/components/language-provider";
import { trackEvent } from "@/lib/analytics";
import { AdUnit } from "@/components/ad-unit";
import { CATEGORIES, type CategoryId, type PostMeta } from "@/content/posts";

const localeMap: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  "en-US": "en-US",
  "es-ES": "es-ES",
};

// Cor de cada categoria (chip ativo e contador). Classes Tailwind estáticas
// para que o JIT as gere no build.
const categoryColors: Record<CategoryId, { active: string; dot: string }> = {
  games: {
    active: "border-transparent bg-emerald-500 text-white shadow-lg",
    dot: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  "tech-ia": {
    active: "border-transparent bg-sky-500 text-white shadow-lg",
    dot: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  },
  projetos: {
    active: "border-transparent bg-amber-500 text-white shadow-lg",
    dot: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
};

export function BlogList({ posts }: Readonly<{ posts: PostMeta[] }>) {
  const { t, locale } = useI18n();
  const [query, setQuery] = useState("");
  // null = "Todas" as categorias.
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  // Título/descrição traduzíveis: usa a chave do JSON se existir, senão cai
  // no valor padrão (PT) vindo do posts.ts. `t` retorna a própria chave
  // quando não há tradução, por isso comparamos antes de aplicar o fallback.
  const localized = (slug: string, field: "title" | "description", fallback: string) => {
    const key = `blog.posts.${slug}.${field}`;
    const value = t(key);
    return value === key ? fallback : value;
  };

  const formatDate = (date?: string) => {
    if (!date) return "";
    // timeZone fixo: evita divergência servidor/navegador na hidratação.
    return new Date(date).toLocaleDateString(localeMap[locale], {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        !activeCategory || post.categories.includes(activeCategory);
      const title = localized(post.slug, "title", post.title).toLowerCase();
      const description = localized(
        post.slug,
        "description",
        post.description
      ).toLowerCase();
      const matchesQuery = !q || title.includes(q) || description.includes(q);
      return matchesCategory && matchesQuery;
    });
    // localized depende de `t`, que muda com o locale.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, query, activeCategory, t]);

  // Quantidade de posts por categoria (para o badge em cada chip).
  const counts = useMemo(() => {
    const map = { all: posts.length } as Record<CategoryId | "all", number>;
    for (const cat of CATEGORIES) {
      map[cat] = posts.filter((p) => p.categories.includes(cat)).length;
    }
    return map;
  }, [posts]);

  const chipBase =
    "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition";
  const chipActive =
    "border-transparent bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] text-white shadow-lg";
  const chipIdle =
    "border-border/60 text-foreground/70 hover:bg-card hover:text-foreground";

  return (
    <section className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 py-12">
      <p className="text-sm uppercase tracking-[0.3em] text-foreground/50">
        {t("blog.eyebrow")}
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.05] bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
        {t("blog.title")}
      </h1>
      <p className="mt-4 max-w-2xl text-foreground/70">{t("blog.subtitle")}</p>

      {posts.length === 0 ? (
        <p className="mt-10 text-foreground/60">{t("blog.empty")}</p>
      ) : (
        <>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className={`${chipBase} ${
                  activeCategory === null ? chipActive : chipIdle
                }`}
              >
                {t("blog.allCategories")}
                <span
                  className={`rounded-full px-1.5 text-xs font-semibold ${
                    activeCategory === null
                      ? "bg-white/25 text-white"
                      : "bg-foreground/10 text-foreground/60"
                  }`}
                >
                  {counts.all}
                </span>
              </button>
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`${chipBase} ${
                      isActive ? categoryColors[cat].active : chipIdle
                    }`}
                  >
                    {t(`blog.categories.${cat}`)}
                    <span
                      className={`rounded-full px-1.5 text-xs font-semibold ${
                        isActive
                          ? "bg-white/25 text-white"
                          : categoryColors[cat].dot
                      }`}
                    >
                      {counts[cat]}
                    </span>
                  </button>
                );
              })}
            </div>

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("blog.searchPlaceholder")}
              aria-label={t("blog.searchPlaceholder")}
              className="w-full rounded-md border border-border/60 bg-card/60 px-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:border-[#7f3cff]/60 focus:outline-none sm:w-64"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-foreground/60">{t("blog.noResults")}</p>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  onClick={() =>
                    trackEvent("blog_post_click", {
                      slug: post.slug,
                      title: post.title,
                    })
                  }
                  className="group flex flex-col rounded-lg border border-border/40 bg-card/90 p-6 shadow-lg transition hover:-translate-y-0.5 hover:border-[#7f3cff]/40"
                >
                  <span className="text-xs uppercase tracking-wider text-foreground/50">
                    {formatDate(post.date)}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold transition group-hover:bg-gradient-to-r group-hover:from-[#7f3cff] group-hover:to-[#00c6ff] group-hover:bg-clip-text group-hover:text-transparent">
                    {localized(post.slug, "title", post.title)}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-border/50 bg-background/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/60"
                      >
                        {t(`blog.categories.${cat}`)}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm text-foreground/70">
                    {localized(post.slug, "description", post.description)}
                  </p>
                  <span className="mt-4 inline-block text-sm bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
                    {t("blog.readPost")}
                  </span>
                </Link>
              ))}
            </div>
          )}

          <AdUnit slot="0000000000" className="mt-10" />
        </>
      )}
    </section>
  );
}
