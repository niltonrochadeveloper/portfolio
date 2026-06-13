export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

// Registro central de posts. Cada post é um componente em
// src/app/blog/<slug>/page.tsx; adicione a entrada aqui ao criar um novo.
export const posts: PostMeta[] = [
  {
    slug: "claude-fable-5",
    title:
      "Claude Fable 5: o primeiro modelo Mythos que a Anthropic liberou para o público",
    description:
      "A Anthropic lançou o Claude Fable 5, primeiro modelo da classe Mythos disponível para uso geral. O que muda, quanto custa e o que achei como dev que usa Claude no dia a dia.",
    date: "2026-06-12",
  },
];

export function getPosts(): PostMeta[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
