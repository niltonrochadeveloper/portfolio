import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import { posts } from "@/content/posts";

export const dynamic = "force-static";

const post = posts.find((p) => p.slug === "sonic-35-anos-mega-drive")!;

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

export default function Sonic35AnosMegaDrivePage() {
  return (
    <PostLayout
      title={post.title}
      description={post.description}
      date={post.date}
    >
      <p>
        O ouriço azul mais famoso dos games está fazendo{" "}
        <strong>35 anos</strong>, e a Sega resolveu comemorar do jeito que mais
        agrada quem cresceu nos anos 90: voltando à origem. Em parceria com a{" "}
        <strong>iam8bit</strong>, a empresa anunciou o relançamento de{" "}
        <strong>Sonic The Hedgehog 1 e 2</strong> em cartuchos físicos de{" "}
        <strong>Mega Drive</strong> (Sega Genesis), dentro da chamada{" "}
        <em>Legacy Cartridge Collection</em>.
      </p>

      <h2>De volta ao cartucho de verdade</h2>
      <p>
        Não é uma coletânea digital nem um mini console: são{" "}
        <strong>cartuchos reais</strong>, que rodam em um Mega Drive de verdade.
        A pegada é totalmente nostálgica, mas com acabamento premium pensado
        para colecionador:
      </p>
      <ul>
        <li>
          <strong>Sonic 1</strong> vem num cartucho translúcido{" "}
          <em>Blue Blur</em> (o azul clássico do personagem).
        </li>
        <li>
          <strong>Sonic 2</strong> vem num cartucho translúcido{" "}
          <em>Two Tail Amber</em>, em homenagem ao Tails.
        </li>
        <li>
          Embalagem <strong>clamshell</strong> azul nostálgica, com detalhes em
          foil.
        </li>
        <li>
          Manual de instruções <strong>full-color</strong> premium e pôster
          incluso.
        </li>
      </ul>

      <h2>A sacada: 1 em cada 8 cartuchos é especial</h2>
      <p>
        O detalhe mais divertido do anúncio é uma mecânica de{" "}
        <strong>raridade</strong>. Segundo a iam8bit,{" "}
        <strong>1 a cada 8 cartuchos</strong> vem &quot;infundido com a energia
        das Chaos Emeralds&quot; — ou seja, uma edição especial escondida na
        tiragem, no melhor estilo &quot;figurinha rara&quot;.
      </p>
      <p>
        É um toque inteligente: transforma a compra num pequeno evento. Você não
        sabe exatamente qual versão vai receber, e isso resgata aquela sensação
        de abrir uma caixa sem saber o que tem dentro — algo que o digital, por
        definição, nunca entrega.
      </p>

      <h2>Por que isso importa (além da nostalgia)</h2>
      <p>
        O Sonic nasceu em <strong>1991</strong> como a resposta da Sega ao
        Mario, e o Mega Drive foi o console que colocou a empresa no mapa de uma
        geração inteira. Relançar justamente <strong>Sonic 1 e 2</strong> em
        cartucho não é aleatório: são os dois títulos que definiram a identidade
        da franquia — velocidade, loops, anéis e aquela trilha sonora que
        ninguém esquece.
      </p>
      <p>
        Vale notar que essa não é a única forma de jogar Sonic clássico hoje. As
        coletâneas digitais e o excelente <em>Sonic Origins</em> já cumprem esse
        papel para quem só quer jogar. O cartucho físico mira em outro público:{" "}
        <strong>colecionadores e nostálgicos</strong> que valorizam o objeto, a
        embalagem e a experiência de ter a mídia na mão.
      </p>

      <h2>Minha leitura</h2>
      <p>
        Como alguém apaixonado por video game, acho esse tipo de lançamento um
        respiro. Num mercado dominado por jogos-serviço, microtransações e
        downloads de 100 GB, ver a Sega celebrar 35 anos com{" "}
        <strong>mídia física, manual impresso e pôster</strong> é quase um ato de
        carinho com a própria história.
      </p>
      <p>
        A mecânica do &quot;1 em 8&quot; é o tipo de ideia simples que gera
        conversa e dá vida a uma comunidade de colecionadores. E reforça uma
        verdade do mercado: às vezes o melhor lançamento não é o mais novo, e sim
        o que sabe homenagear de onde tudo veio.
      </p>
      <p>
        Você ainda tem um Mega Drive guardado, ou jogaria Sonic no cartucho de
        novo? Me chama no{" "}
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
