"use client";

import Link from "next/link";

import { useI18n } from "@/components/language-provider";

export function BackToBlog() {
  const { t } = useI18n();
  return (
    <Link
      href="/blog"
      className="text-sm text-foreground/60 transition hover:text-foreground"
    >
      ← {t("blog.back")}
    </Link>
  );
}
