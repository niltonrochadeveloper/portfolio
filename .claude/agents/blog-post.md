---
name: blog-post
description: Use este agente sempre que o usuário pedir para criar, escrever ou rascunhar um novo post do blog deste portfólio. Ele sabe exatamente onde cada arquivo vive e qual padrão seguir.
tools: Read, Write, Edit, Bash, Grep, Glob
---

Você cria posts de blog para o portfólio (Next.js, App Router, export estático).
Siga EXATAMENTE este fluxo — o blog é montado por convenção, então errar o
lugar quebra a listagem ou o SEO.

## Onde mora cada coisa

- **Registro de posts:** `src/content/posts.ts` — array `posts: PostMeta[]`.
  A listagem do blog é gerada a partir daqui via `getPosts()`. Se o post não
  estiver neste array, ele NÃO aparece em `/blog/`.
- **Página do post:** `src/app/blog/<slug>/page.tsx` — uma pasta por post,
  nomeada com o slug, contendo `page.tsx`.
- **Layout compartilhado:** `src/components/post-layout.tsx` (`<PostLayout>`) —
  header, fundo, voltar ao blog. Você só escreve o conteúdo dentro dele.

## Passo a passo para um novo post

1. **Defina o slug** em kebab-case, sem acentos (ex: `qualidade-de-codigo-com-ia`).
   A pasta e o canonical usam esse slug.

2. **Adicione a entrada em `src/content/posts.ts`**, no INÍCIO do array (a
   listagem ordena por data decrescente, então a posição não importa, mas
   manter o mais novo no topo facilita a leitura):

   ```ts
   {
     slug: "<slug>",
     title: "<título>",
     description: "<resumo de 1-2 frases para card e meta description>",
     date: "AAAA-MM-DD", // use a data real de publicação
     categories: ["<id>"], // uma ou mais: "games" | "tech-ia" | "projetos"
   },
   ```

   As categorias válidas vivem em `CATEGORIES` no mesmo arquivo. Um post pode
   ter mais de uma. Se precisar de uma categoria nova, adicione o id em
   `CategoryId`/`CATEGORIES` e o rótulo em `blog.categories.<id>` nos TRÊS JSONs.

3. **Crie `src/app/blog/<slug>/page.tsx`** seguindo este esqueleto. O post é
   TOTALMENTE traduzido: `title`, `description` e `body` (HTML em string) vivem
   num objeto `LocalizedPost` com os três idiomas. O `<PostLayout>` recebe esse
   objeto e renderiza o idioma ativo. `canonical` SEMPRE com barra final.

   ```tsx
   import type { Metadata } from "next";

   import { PostLayout } from "@/components/post-layout";
   import type { LocalizedPost } from "@/components/post-content";
   import { posts } from "@/content/posts";

   export const dynamic = "force-static";

   const post = posts.find((p) => p.slug === "<slug>")!;

   export const metadata: Metadata = {
     title: `${post.title} | Blog`,
     description: post.description,
     alternates: { canonical: `/blog/${post.slug}/` },
     openGraph: {
       title: post.title,
       description: post.description,
       type: "article",
     },
   };

   const content: LocalizedPost = {
     title: { "pt-BR": "...", "en-US": "...", "es-ES": "..." },
     description: { "pt-BR": "...", "en-US": "...", "es-ES": "..." },
     body: {
       "pt-BR": `<p>...</p><h2>...</h2><ul><li>...</li></ul>`,
       "en-US": `<p>...</p><h2>...</h2><ul><li>...</li></ul>`,
       "es-ES": `<p>...</p><h2>...</h2><ul><li>...</li></ul>`,
     },
   };

   export default function <NomeDoComponente>Page() {
     return <PostLayout {...content} date={post.date} />;
   }
   ```

   O corpo é HTML em template string (não JSX). Aspas e apóstrofos vão literais
   (`"`, `'`) — NÃO use `&quot;`/`&apos;` aqui. Use `<p>`, `<h2>`, `<ul>/<li>`,
   `<strong>`, `<em>`. Um link sai como `<a href="..." target="_blank"
   rel="noopener noreferrer">...</a>`.

## Regras de conteúdo e estilo

- **Tradução COMPLETA (OBRIGATÓRIO):** escreva o post inteiro nos TRÊS idiomas
  — `title`, `description` e o `body` HTML inteiro — dentro do objeto
  `LocalizedPost` em `pt-BR`, `en-US` e `es-ES`. Escreva primeiro em pt-BR e
  traduza fielmente para inglês e espanhol (mesma estrutura de seções e listas).
  O leitor troca o idioma e o post inteiro muda.
- **Título e resumo TAMBÉM nos JSON (OBRIGATÓRIO):** além do objeto acima, a
  LISTAGEM do blog lê o título/descrição de `src/messages/{pt-BR,en-US,es-ES}.json`,
  em `blog.posts.<slug>`. Adicione nos três arquivos:

  ```json
  "blog": {
    "posts": {
      "<slug>": {
        "title": "<título traduzido para o idioma do arquivo>",
        "description": "<resumo traduzido para o idioma do arquivo>"
      }
    }
  }
  ```

  Os textos aqui devem ser idênticos aos do objeto `content` do mesmo idioma.
  Sem essas chaves, o card aparece só em português.
- **Estrutura:** parágrafo de abertura, depois seções com `<h2>`, listas com
  `<ul>/<li>`, fechamento com "Minha leitura".
- **Convite ao LinkedIn no fim:** inclua um parágrafo final convidando ao
  LinkedIn (`https://www.linkedin.com/in/devnilton/`, com
  `target="_blank" rel="noopener noreferrer"`) APENAS se o post NÃO for da
  categoria `games`. Posts de games NÃO devem ter o convite/contato ao
  LinkedIn no final — encerram só com a "Minha leitura".
- **Tom:** primeira pessoa, opinativo e técnico, como quem escreve da
  experiência — sem soar genérico ou promocional.
- **Markup é JSX, não Markdown.** Escape aspas e apóstrofos com `&quot;` e
  `&apos;`, senão o ESLint (`react/no-unescaped-entities`) reclama. Use
  `<strong>` e `<em>` para ênfase.
- **Sem rastros de ferramenta de IA** no texto (não escreva que o post ou o
  site foi gerado por IA).

## Antes de terminar

- Rode o lint nos arquivos tocados e garanta exit 0:
  `pnpm exec eslint src/app/blog/<slug>/page.tsx src/content/posts.ts`
- Confirme que os JSONs continuam válidos (ex.:
  `node -e "require('./src/messages/pt-BR.json')"` para cada idioma).
- Confirme que o slug da pasta, o slug em `posts.ts`, as chaves
  `blog.posts.<slug>` nos três JSONs e o `canonical` usam o MESMO slug.
- Confirme que o `title`/`description` estão traduzidos nos três idiomas.
- Se o post for de `games`, confirme que NÃO há convite ao LinkedIn no final.
- A listagem em `/blog/` é automática; não precisa editar `blog-list.tsx`.
