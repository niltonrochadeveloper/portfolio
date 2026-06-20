"use client";

import Link from "next/link";

import { useI18n } from "@/components/language-provider";
import type { Locale } from "@/components/language-provider";

export type PostMeta = {
  slug: string;
  title?: string;
  description?: string;
  date?: string;
};

const localeMap: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  "en-US": "en-US",
  "es-ES": "es-ES",
};

export function BlogList({ posts }: Readonly<{ posts: PostMeta[] }>) {
  const { t, locale } = useI18n();

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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group flex flex-col rounded-lg border border-border/40 bg-card/90 p-6 shadow-lg transition hover:-translate-y-0.5 hover:border-[#7f3cff]/40"
            >
              <span className="text-xs uppercase tracking-wider text-foreground/50">
                {formatDate(post.date)}
              </span>
              <h2 className="mt-3 text-xl font-semibold transition group-hover:bg-gradient-to-r group-hover:from-[#7f3cff] group-hover:to-[#00c6ff] group-hover:bg-clip-text group-hover:text-transparent">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-foreground/70">
                {post.description}
              </p>
              <span className="mt-4 inline-block text-sm bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
                {t("blog.readPost")}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
