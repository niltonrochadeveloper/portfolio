import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import { posts } from "@/content/posts";

export const dynamic = "force-static";

const post = posts.find((p) => p.slug === "claude-fable-5")!;

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

export default function ClaudeFable5Page() {
  return (
    <PostLayout
      title={post.title}
      description={post.description}
      date={post.date}
    >
      <p>
        No dia 9 de junho de 2026 a Anthropic anunciou o{" "}
        <strong>Claude Fable 5</strong>, e a novidade aqui não é &quot;mais um
        modelo melhor que o anterior&quot;. É uma mudança na própria estrutura
        da família Claude: o Fable 5 é o primeiro modelo da classe{" "}
        <strong>Mythos</strong> que a empresa considerou seguro o suficiente
        para liberar ao público geral.
      </p>

      <h2>Uma nova classe na família</h2>
      <p>
        Quem acompanha os lançamentos da Anthropic conhece a escadinha:{" "}
        <strong>Haiku</strong> (rápido e barato), <strong>Sonnet</strong>{" "}
        (equilíbrio) e <strong>Opus</strong> (o mais capaz). Com o Fable 5, a
        família passa a ter quatro classes —{" "}
        <strong>Haiku, Sonnet, Opus e Mythos</strong> —, e a Mythos entra no
        topo.
      </p>
      <p>
        O detalhe interessante é que o Fable 5 não está sozinho. Ele compartilha
        as mesmas capacidades do <strong>Mythos 5</strong>, um modelo que existe
        mas só pode ser usado em acesso limitado, dentro do chamado{" "}
        <strong>Project Glasswing</strong>. Na prática, o Fable 5 é a versão do
        Mythos 5 que passou pelo trabalho de segurança necessário para sair do
        laboratório.
      </p>

      <h2>Como tornaram um Mythos &quot;seguro&quot;</h2>
      <p>
        A parte mais curiosa do anúncio, na minha opinião, é o mecanismo de
        freios. Em vez de simplesmente recusar tudo que parece arriscado, o
        Fable 5 <strong>bloqueia respostas em áreas de alto risco</strong> —
        como cibersegurança ofensiva, biologia e química — e, nesses casos,{" "}
        <strong>recorre ao Claude Opus 4.8</strong> para responder.
      </p>
      <p>
        Ou seja: quando o assunto é sensível, quem assume é um modelo mais
        testado e mais conservador. É uma abordagem pragmática — você não perde
        a resposta, mas também não tem o modelo mais poderoso operando em
        território perigoso.
      </p>

      <h2>Quanto custa</h2>
      <p>
        O preço posiciona o Fable 5 acima do Sonnet e abaixo do que se esperaria
        de um topo de linha:
      </p>
      <ul>
        <li>
          <strong>US$ 10</strong> por milhão de tokens de entrada
        </li>
        <li>
          <strong>US$ 50</strong> por milhão de tokens de saída
        </li>
      </ul>
      <p>
        Para comparação, é uma faixa que faz sentido para tarefas onde a
        qualidade da resposta importa mais que o volume: arquitetura de código,
        análises longas, agentes que tomam decisões. Para um chatbot de alto
        volume, o Haiku continua sendo a escolha óbvia.
      </p>

      <h2>Minha leitura</h2>
      <p>
        Como desenvolvedor que usa Claude no dia a dia, dois pontos me chamam
        atenção:
      </p>
      <p>
        <strong>
          1. A Anthropic está separando &quot;capacidade&quot; de
          &quot;disponibilidade&quot;.
        </strong>{" "}
        O Mythos 5 existe, mas fica restrito ao Project Glasswing. O que chega
        ao público é a versão com freios. Isso sugere que a barreira dos
        próximos lançamentos não vai ser treinar modelos melhores, e sim
        torná-los seguros o bastante para liberar.
      </p>
      <p>
        <strong>
          2. O fallback para o Opus 4.8 é um padrão de engenharia interessante.
        </strong>{" "}
        Em vez de um modelo único tentando ser bom e seguro em tudo, temos um
        sistema: o modelo novo responde o que pode, e um modelo mais maduro
        cobre as áreas críticas. É o tipo de arquitetura que a gente já usa em
        software há décadas, aplicada a LLMs.
      </p>
      <p>
        Vou testar o Fable 5 nos meus projetos nas próximas semanas —
        principalmente em tarefas de código mais complexas — e pretendo trazer
        as impressões aqui no blog. Se você já testou, me chama no{" "}
        <a
          href="https://www.linkedin.com/in/devnilton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
      </p>
    </PostLayout>
  );
}
