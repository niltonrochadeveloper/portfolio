"use client";

import { useI18n } from "@/components/language-provider";

export function PostAuthor() {
  const { t } = useI18n();

  return (
    <footer className="mt-10 border-t border-border/40 pt-8">
      <div className="flex items-start gap-4 rounded-lg border border-border/40 bg-background/40 p-5">
        <img
          src="/foto.webp"
          alt={t("author.name")}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-foreground/50">
            {t("author.label")}
          </p>
          <p className="mt-1 text-lg font-semibold bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
            {t("author.name")}
          </p>
          <p className="text-sm text-foreground/70">{t("author.role")}</p>
          <p className="mt-2 text-sm text-foreground/65">{t("author.bio")}</p>
        </div>
      </div>
    </footer>
  );
}
