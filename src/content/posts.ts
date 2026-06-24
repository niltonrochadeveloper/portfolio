export type CategoryId = "games" | "tech-ia" | "projetos";

export const CATEGORIES: CategoryId[] = ["games", "tech-ia", "projetos"];

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  categories: CategoryId[];
};

export const posts: PostMeta[] = [
  {
    slug: "rumor-handheld-sega-cartucho",
    title:
      "Rumor: a Sega estaria preparando um portátil retrô de cartucho focado em 2D",
    description:
      "Um vazamento no Reddit aponta para um handheld de baixo custo ligado à Sega, com tela OLED de 5\", cartuchos físicos e foco em jogos 2D. Separo o que é fato do que é especulação e por que isso faz sentido agora.",
    date: "2026-06-24",
    categories: ["games"],
  },
  {
    slug: "sonic-35-anos-mega-drive",
    title:
      "Sonic faz 35 anos: Sega e iam8bit relançam Sonic 1 e 2 em cartucho de Mega Drive",
    description:
      "Para celebrar os 35 anos do Sonic, a Sega se uniu à iam8bit na Legacy Cartridge Collection: Sonic 1 e 2 voltam em cartuchos físicos de Mega Drive, com uma edição rara escondida em 1 a cada 8 unidades.",
    date: "2026-06-24",
    categories: ["games"],
  },
  {
    slug: "mods-gta-6",
    title:
      "O futuro dos mods de GTA 6: o que esperar (e o que a Rockstar pode permitir)",
    description:
      "GTA 6 chega com uma comunidade de modding que já transformou o GTA V. O que vem por aí em mods, o que muda na nova engine e como a postura da Rockstar pode definir esse cenário.",
    date: "2026-06-20",
    categories: ["games"],
  },
  {
    slug: "desenvolvimento-de-jogos-no-brasil",
    title:
      "Desenvolvimento de jogos no Brasil: onde estamos e para onde caminhamos",
    description:
      "O Brasil tem talento, comunidade e jogos premiados, mas ainda esbarra em financiamento e mercado interno. Um panorama honesto da indústria de games nacional e dos caminhos para quem quer entrar.",
    date: "2026-06-20",
    categories: ["games", "tech-ia"],
  },
  {
    slug: "qualidade-de-codigo-com-ia",
    title:
      "Qualidade de código na era da IA: júnior x sênior usando as mesmas ferramentas",
    description:
      "A IA acelera todo mundo, mas não nivela a senioridade. O que muda quando um júnior e um sênior usam o mesmo assistente, o que acontece com o aprendizado e o legado, e como manter qualidade no processo.",
    date: "2026-06-20",
    categories: ["tech-ia"],
  },
  {
    slug: "claude-fable-5",
    title:
      "Claude Fable 5: o primeiro modelo Mythos que a Anthropic liberou para o público",
    description:
      "A Anthropic lançou o Claude Fable 5, primeiro modelo da classe Mythos disponível para uso geral. O que muda, quanto custa e o que achei como dev que usa Claude no dia a dia.",
    date: "2026-06-12",
    categories: ["tech-ia"],
  },
];

export function getPosts(): PostMeta[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
