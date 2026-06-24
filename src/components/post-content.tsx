"use client";

import { useI18n, type Locale } from "@/components/language-provider";

export type LocalizedText = Record<Locale, string>;

export type LocalizedPost = {
  title: LocalizedText;
  description: LocalizedText;
  /** Corpo do post em HTML, por idioma. */
  body: LocalizedText;
};

function pick(text: LocalizedText, locale: Locale): string {
  return text[locale] || text["pt-BR"];
}

/** Título traduzido do post (usado no <h1> do cabeçalho). */
export function PostTitle({ title }: Readonly<{ title: LocalizedText }>) {
  const { locale } = useI18n();
  return <>{pick(title, locale)}</>;
}

/** Resumo traduzido do post. */
export function PostDescription({
  description,
}: Readonly<{ description: LocalizedText }>) {
  const { locale } = useI18n();
  return <>{pick(description, locale)}</>;
}

/** Corpo traduzido do post, renderizado como HTML. */
export function PostBody({ body }: Readonly<{ body: LocalizedText }>) {
  const { locale } = useI18n();
  // O HTML vem do nosso próprio conteúdo (não é entrada de usuário).
  return <div dangerouslySetInnerHTML={{ __html: pick(body, locale) }} />;
}
