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
    slug: "mods-gta-6",
    title:
      "O futuro dos mods de GTA 6: o que esperar (e o que a Rockstar pode permitir)",
    description:
      "GTA 6 chega com uma comunidade de modding que já transformou o GTA V. O que vem por aí em mods, o que muda na nova engine e como a postura da Rockstar pode definir esse cenário.",
    date: "2026-06-20",
  },
  {
    slug: "desenvolvimento-de-jogos-no-brasil",
    title:
      "Desenvolvimento de jogos no Brasil: onde estamos e para onde caminhamos",
    description:
      "O Brasil tem talento, comunidade e jogos premiados, mas ainda esbarra em financiamento e mercado interno. Um panorama honesto da indústria de games nacional e dos caminhos para quem quer entrar.",
    date: "2026-06-20",
  },
  {
    slug: "qualidade-de-codigo-com-ia",
    title:
      "Qualidade de código na era da IA: júnior x sênior usando as mesmas ferramentas",
    description:
      "A IA acelera todo mundo, mas não nivela a senioridade. O que muda quando um júnior e um sênior usam o mesmo assistente, o que acontece com o aprendizado e o legado, e como manter qualidade no processo.",
    date: "2026-06-20",
  },
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
