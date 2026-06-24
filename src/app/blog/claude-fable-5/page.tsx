import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import type { LocalizedPost } from "@/components/post-content";
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

const linkedin =
  '<a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noopener noreferrer">LinkedIn</a>';

const content: LocalizedPost = {
  title: {
    "pt-BR":
      "Claude Fable 5: o primeiro modelo Mythos que a Anthropic liberou para o público",
    "en-US":
      "Claude Fable 5: the first Mythos model Anthropic released to the public",
    "es-ES":
      "Claude Fable 5: el primer modelo Mythos que Anthropic liberó al público",
  },
  description: {
    "pt-BR":
      "A Anthropic lançou o Claude Fable 5, primeiro modelo da classe Mythos disponível para uso geral. O que muda, quanto custa e o que achei como dev que usa Claude no dia a dia.",
    "en-US":
      "Anthropic launched Claude Fable 5, the first Mythos-class model available for general use. What changes, how much it costs, and my take as a dev who uses Claude daily.",
    "es-ES":
      "Anthropic lanzó Claude Fable 5, el primer modelo de clase Mythos disponible para uso general. Qué cambia, cuánto cuesta y mi opinión como dev que usa Claude a diario.",
  },
  body: {
    "pt-BR": `
      <p>No dia 9 de junho de 2026 a Anthropic anunciou o <strong>Claude Fable 5</strong>, e a novidade aqui não é "mais um modelo melhor que o anterior". É uma mudança na própria estrutura da família Claude: o Fable 5 é o primeiro modelo da classe <strong>Mythos</strong> que a empresa considerou seguro o suficiente para liberar ao público geral.</p>
      <h2>Uma nova classe na família</h2>
      <p>Quem acompanha os lançamentos da Anthropic conhece a escadinha: <strong>Haiku</strong> (rápido e barato), <strong>Sonnet</strong> (equilíbrio) e <strong>Opus</strong> (o mais capaz). Com o Fable 5, a família passa a ter quatro classes — <strong>Haiku, Sonnet, Opus e Mythos</strong> —, e a Mythos entra no topo.</p>
      <p>O detalhe interessante é que o Fable 5 não está sozinho. Ele compartilha as mesmas capacidades do <strong>Mythos 5</strong>, um modelo que existe mas só pode ser usado em acesso limitado, dentro do chamado <strong>Project Glasswing</strong>. Na prática, o Fable 5 é a versão do Mythos 5 que passou pelo trabalho de segurança necessário para sair do laboratório.</p>
      <h2>Como tornaram um Mythos "seguro"</h2>
      <p>A parte mais curiosa do anúncio, na minha opinião, é o mecanismo de freios. Em vez de simplesmente recusar tudo que parece arriscado, o Fable 5 <strong>bloqueia respostas em áreas de alto risco</strong> — como cibersegurança ofensiva, biologia e química — e, nesses casos, <strong>recorre ao Claude Opus 4.8</strong> para responder.</p>
      <p>Ou seja: quando o assunto é sensível, quem assume é um modelo mais testado e mais conservador. É uma abordagem pragmática — você não perde a resposta, mas também não tem o modelo mais poderoso operando em território perigoso.</p>
      <h2>Quanto custa</h2>
      <p>O preço posiciona o Fable 5 acima do Sonnet e abaixo do que se esperaria de um topo de linha:</p>
      <ul>
        <li><strong>US$ 10</strong> por milhão de tokens de entrada</li>
        <li><strong>US$ 50</strong> por milhão de tokens de saída</li>
      </ul>
      <p>Para comparação, é uma faixa que faz sentido para tarefas onde a qualidade da resposta importa mais que o volume: arquitetura de código, análises longas, agentes que tomam decisões. Para um chatbot de alto volume, o Haiku continua sendo a escolha óbvia.</p>
      <h2>Minha leitura</h2>
      <p>Como desenvolvedor que usa Claude no dia a dia, dois pontos me chamam atenção:</p>
      <p><strong>1. A Anthropic está separando "capacidade" de "disponibilidade".</strong> O Mythos 5 existe, mas fica restrito ao Project Glasswing. O que chega ao público é a versão com freios. Isso sugere que a barreira dos próximos lançamentos não vai ser treinar modelos melhores, e sim torná-los seguros o bastante para liberar.</p>
      <p><strong>2. O fallback para o Opus 4.8 é um padrão de engenharia interessante.</strong> Em vez de um modelo único tentando ser bom e seguro em tudo, temos um sistema: o modelo novo responde o que pode, e um modelo mais maduro cobre as áreas críticas. É o tipo de arquitetura que a gente já usa em software há décadas, aplicada a LLMs.</p>
      <p>Vou testar o Fable 5 nos meus projetos nas próximas semanas — principalmente em tarefas de código mais complexas — e pretendo trazer as impressões aqui no blog. Se você já testou, me chama no ${linkedin}</p>
    `,
    "en-US": `
      <p>On June 9, 2026, Anthropic announced <strong>Claude Fable 5</strong>, and the news here isn't "another model better than the last". It's a change in the very structure of the Claude family: Fable 5 is the first <strong>Mythos</strong>-class model the company considered safe enough to release to the general public.</p>
      <h2>A new class in the family</h2>
      <p>Anyone following Anthropic's releases knows the ladder: <strong>Haiku</strong> (fast and cheap), <strong>Sonnet</strong> (balanced) and <strong>Opus</strong> (the most capable). With Fable 5, the family now has four classes — <strong>Haiku, Sonnet, Opus and Mythos</strong> —, and Mythos enters at the top.</p>
      <p>The interesting detail is that Fable 5 isn't alone. It shares the same capabilities as <strong>Mythos 5</strong>, a model that exists but can only be used in limited access, within the so-called <strong>Project Glasswing</strong>. In practice, Fable 5 is the version of Mythos 5 that went through the safety work needed to leave the lab.</p>
      <h2>How they made a Mythos "safe"</h2>
      <p>The most curious part of the announcement, in my opinion, is the braking mechanism. Instead of simply refusing everything that seems risky, Fable 5 <strong>blocks responses in high-risk areas</strong> — like offensive cybersecurity, biology and chemistry — and, in those cases, <strong>falls back to Claude Opus 4.8</strong> to answer.</p>
      <p>In other words: when the subject is sensitive, a more tested and conservative model takes over. It's a pragmatic approach — you don't lose the answer, but you also don't have the most powerful model operating in dangerous territory.</p>
      <h2>How much it costs</h2>
      <p>The price positions Fable 5 above Sonnet and below what you'd expect from a top of the line:</p>
      <ul>
        <li><strong>US$ 10</strong> per million input tokens</li>
        <li><strong>US$ 50</strong> per million output tokens</li>
      </ul>
      <p>For comparison, it's a range that makes sense for tasks where answer quality matters more than volume: code architecture, long analyses, agents that make decisions. For a high-volume chatbot, Haiku remains the obvious choice.</p>
      <h2>My take</h2>
      <p>As a developer who uses Claude daily, two points stand out to me:</p>
      <p><strong>1. Anthropic is separating "capability" from "availability".</strong> Mythos 5 exists, but stays restricted to Project Glasswing. What reaches the public is the version with brakes. This suggests the barrier for upcoming releases won't be training better models, but making them safe enough to release.</p>
      <p><strong>2. The fallback to Opus 4.8 is an interesting engineering pattern.</strong> Instead of a single model trying to be good and safe at everything, we have a system: the new model answers what it can, and a more mature model covers the critical areas. It's the kind of architecture we've used in software for decades, applied to LLMs.</p>
      <p>I'll test Fable 5 in my projects over the coming weeks — mainly on more complex coding tasks — and I plan to bring the impressions here on the blog. If you've already tried it, reach me on ${linkedin}</p>
    `,
    "es-ES": `
      <p>El 9 de junio de 2026 Anthropic anunció <strong>Claude Fable 5</strong>, y la novedad aquí no es "otro modelo mejor que el anterior". Es un cambio en la propia estructura de la familia Claude: Fable 5 es el primer modelo de clase <strong>Mythos</strong> que la empresa consideró lo bastante seguro para liberar al público general.</p>
      <h2>Una nueva clase en la familia</h2>
      <p>Quien sigue los lanzamientos de Anthropic conoce la escalera: <strong>Haiku</strong> (rápido y barato), <strong>Sonnet</strong> (equilibrio) y <strong>Opus</strong> (el más capaz). Con Fable 5, la familia pasa a tener cuatro clases — <strong>Haiku, Sonnet, Opus y Mythos</strong> —, y Mythos entra en la cima.</p>
      <p>El detalle interesante es que Fable 5 no está solo. Comparte las mismas capacidades de <strong>Mythos 5</strong>, un modelo que existe pero solo puede usarse en acceso limitado, dentro del llamado <strong>Project Glasswing</strong>. En la práctica, Fable 5 es la versión de Mythos 5 que pasó por el trabajo de seguridad necesario para salir del laboratorio.</p>
      <h2>Cómo hicieron "seguro" a un Mythos</h2>
      <p>La parte más curiosa del anuncio, en mi opinión, es el mecanismo de frenos. En vez de simplemente rechazar todo lo que parece arriesgado, Fable 5 <strong>bloquea respuestas en áreas de alto riesgo</strong> — como ciberseguridad ofensiva, biología y química — y, en esos casos, <strong>recurre a Claude Opus 4.8</strong> para responder.</p>
      <p>Es decir: cuando el asunto es sensible, asume un modelo más probado y más conservador. Es un enfoque pragmático — no pierdes la respuesta, pero tampoco tienes el modelo más poderoso operando en territorio peligroso.</p>
      <h2>Cuánto cuesta</h2>
      <p>El precio posiciona a Fable 5 por encima de Sonnet y por debajo de lo que se esperaría de un tope de línea:</p>
      <ul>
        <li><strong>US$ 10</strong> por millón de tokens de entrada</li>
        <li><strong>US$ 50</strong> por millón de tokens de salida</li>
      </ul>
      <p>Para comparar, es un rango que tiene sentido para tareas donde la calidad de la respuesta importa más que el volumen: arquitectura de código, análisis largos, agentes que toman decisiones. Para un chatbot de alto volumen, Haiku sigue siendo la elección obvia.</p>
      <h2>Mi lectura</h2>
      <p>Como desarrollador que usa Claude a diario, dos puntos me llaman la atención:</p>
      <p><strong>1. Anthropic está separando "capacidad" de "disponibilidad".</strong> Mythos 5 existe, pero queda restringido al Project Glasswing. Lo que llega al público es la versión con frenos. Esto sugiere que la barrera de los próximos lanzamientos no será entrenar mejores modelos, sino hacerlos lo bastante seguros para liberar.</p>
      <p><strong>2. El fallback a Opus 4.8 es un patrón de ingeniería interesante.</strong> En vez de un único modelo tratando de ser bueno y seguro en todo, tenemos un sistema: el modelo nuevo responde lo que puede, y un modelo más maduro cubre las áreas críticas. Es el tipo de arquitectura que ya usamos en software desde hace décadas, aplicada a los LLMs.</p>
      <p>Voy a probar Fable 5 en mis proyectos en las próximas semanas — principalmente en tareas de código más complejas — y pretendo traer las impresiones aquí en el blog. Si ya lo probaste, escríbeme en ${linkedin}</p>
    `,
  },
};

export default function ClaudeFable5Page() {
  return <PostLayout {...content} date={post.date} />;
}
