import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import type { LocalizedPost } from "@/components/post-content";
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

const content: LocalizedPost = {
  title: {
    "pt-BR":
      "Sonic faz 35 anos: Sega e iam8bit relançam Sonic 1 e 2 em cartucho de Mega Drive",
    "en-US":
      "Sonic turns 35: Sega and iam8bit re-release Sonic 1 and 2 on Mega Drive cartridges",
    "es-ES":
      "Sonic cumple 35 años: Sega e iam8bit relanzan Sonic 1 y 2 en cartucho de Mega Drive",
  },
  description: {
    "pt-BR":
      "Para celebrar os 35 anos do Sonic, a Sega se uniu à iam8bit na Legacy Cartridge Collection: Sonic 1 e 2 voltam em cartuchos físicos de Mega Drive, com uma edição rara escondida em 1 a cada 8 unidades.",
    "en-US":
      "To celebrate Sonic's 35th anniversary, Sega teamed up with iam8bit on the Legacy Cartridge Collection: Sonic 1 and 2 return as physical Mega Drive cartridges, with a rare edition hidden in 1 of every 8 units.",
    "es-ES":
      "Para celebrar los 35 años de Sonic, Sega se unió a iam8bit en la Legacy Cartridge Collection: Sonic 1 y 2 vuelven en cartuchos físicos de Mega Drive, con una edición rara escondida en 1 de cada 8 unidades.",
  },
  body: {
    "pt-BR": `
      <p>O ouriço azul mais famoso dos games está fazendo <strong>35 anos</strong>, e a Sega resolveu comemorar do jeito que mais agrada quem cresceu nos anos 90: voltando à origem. Em parceria com a <strong>iam8bit</strong>, a empresa anunciou o relançamento de <strong>Sonic The Hedgehog 1 e 2</strong> em cartuchos físicos de <strong>Mega Drive</strong> (Sega Genesis), dentro da chamada <em>Legacy Cartridge Collection</em>.</p>
      <h2>De volta ao cartucho de verdade</h2>
      <p>Não é uma coletânea digital nem um mini console: são <strong>cartuchos reais</strong>, que rodam em um Mega Drive de verdade. A pegada é totalmente nostálgica, mas com acabamento premium pensado para colecionador:</p>
      <ul>
        <li><strong>Sonic 1</strong> vem num cartucho translúcido <em>Blue Blur</em> (o azul clássico do personagem).</li>
        <li><strong>Sonic 2</strong> vem num cartucho translúcido <em>Two Tail Amber</em>, em homenagem ao Tails.</li>
        <li>Embalagem <strong>clamshell</strong> azul nostálgica, com detalhes em foil.</li>
        <li>Manual de instruções <strong>full-color</strong> premium e pôster incluso.</li>
      </ul>
      <h2>A sacada: 1 em cada 8 cartuchos é especial</h2>
      <p>O detalhe mais divertido do anúncio é uma mecânica de <strong>raridade</strong>. Segundo a iam8bit, <strong>1 a cada 8 cartuchos</strong> vem "infundido com a energia das Chaos Emeralds" — ou seja, uma edição especial escondida na tiragem, no melhor estilo "figurinha rara".</p>
      <p>É um toque inteligente: transforma a compra num pequeno evento. Você não sabe exatamente qual versão vai receber, e isso resgata aquela sensação de abrir uma caixa sem saber o que tem dentro — algo que o digital, por definição, nunca entrega.</p>
      <h2>Por que isso importa (além da nostalgia)</h2>
      <p>O Sonic nasceu em <strong>1991</strong> como a resposta da Sega ao Mario, e o Mega Drive foi o console que colocou a empresa no mapa de uma geração inteira. Relançar justamente <strong>Sonic 1 e 2</strong> em cartucho não é aleatório: são os dois títulos que definiram a identidade da franquia — velocidade, loops, anéis e aquela trilha sonora que ninguém esquece.</p>
      <p>Vale notar que essa não é a única forma de jogar Sonic clássico hoje. As coletâneas digitais e o excelente <em>Sonic Origins</em> já cumprem esse papel para quem só quer jogar. O cartucho físico mira em outro público: <strong>colecionadores e nostálgicos</strong> que valorizam o objeto, a embalagem e a experiência de ter a mídia na mão.</p>
      <h2>Minha leitura</h2>
      <p>Como alguém apaixonado por video game, acho esse tipo de lançamento um respiro. Num mercado dominado por jogos-serviço, microtransações e downloads de 100 GB, ver a Sega celebrar 35 anos com <strong>mídia física, manual impresso e pôster</strong> é quase um ato de carinho com a própria história.</p>
      <p>A mecânica do "1 em 8" é o tipo de ideia simples que gera conversa e dá vida a uma comunidade de colecionadores. E reforça uma verdade do mercado: às vezes o melhor lançamento não é o mais novo, e sim o que sabe homenagear de onde tudo veio.</p>
    `,
    "en-US": `
      <p>The most famous blue hedgehog in gaming is turning <strong>35</strong>, and Sega decided to celebrate in the way that most pleases those who grew up in the 90s: going back to its roots. In partnership with <strong>iam8bit</strong>, the company announced the re-release of <strong>Sonic The Hedgehog 1 and 2</strong> on physical <strong>Mega Drive</strong> (Sega Genesis) cartridges, as part of the so-called <em>Legacy Cartridge Collection</em>.</p>
      <h2>Back to real cartridges</h2>
      <p>It's not a digital collection or a mini console: these are <strong>real cartridges</strong> that run on an actual Mega Drive. The vibe is fully nostalgic, but with a premium finish designed for collectors:</p>
      <ul>
        <li><strong>Sonic 1</strong> comes in a translucent <em>Blue Blur</em> cartridge (the character's classic blue).</li>
        <li><strong>Sonic 2</strong> comes in a translucent <em>Two Tail Amber</em> cartridge, in homage to Tails.</li>
        <li>Nostalgic blue <strong>clamshell</strong> packaging, with foil details.</li>
        <li>Premium <strong>full-color</strong> instruction manual and poster included.</li>
      </ul>
      <h2>The twist: 1 in every 8 cartridges is special</h2>
      <p>The most fun detail of the announcement is a <strong>rarity</strong> mechanic. According to iam8bit, <strong>1 in every 8 cartridges</strong> comes "infused with Chaos Emerald energy" — that is, a special edition hidden in the print run, in the best "rare collectible" style.</p>
      <p>It's a clever touch: it turns the purchase into a little event. You don't know exactly which version you'll get, and that brings back the feeling of opening a box without knowing what's inside — something the digital format, by definition, never delivers.</p>
      <h2>Why it matters (beyond nostalgia)</h2>
      <p>Sonic was born in <strong>1991</strong> as Sega's answer to Mario, and the Mega Drive was the console that put the company on the map for an entire generation. Re-releasing precisely <strong>Sonic 1 and 2</strong> on cartridge is no accident: they are the two titles that defined the franchise's identity — speed, loops, rings and that soundtrack no one forgets.</p>
      <p>It's worth noting this isn't the only way to play classic Sonic today. Digital collections and the excellent <em>Sonic Origins</em> already cover that for those who just want to play. The physical cartridge targets a different audience: <strong>collectors and nostalgics</strong> who value the object, the packaging and the experience of holding the media in their hands.</p>
      <h2>My take</h2>
      <p>As someone passionate about video games, I find this kind of release a breath of fresh air. In a market dominated by live-service games, microtransactions and 100 GB downloads, seeing Sega celebrate 35 years with <strong>physical media, a printed manual and a poster</strong> is almost an act of affection for its own history.</p>
      <p>The "1 in 8" mechanic is the kind of simple idea that sparks conversation and brings a collector community to life. And it reinforces a market truth: sometimes the best release isn't the newest one, but the one that knows how to honor where it all came from.</p>
    `,
    "es-ES": `
      <p>El erizo azul más famoso de los videojuegos está cumpliendo <strong>35 años</strong>, y Sega decidió celebrarlo de la forma que más agrada a quienes crecieron en los 90: volviendo a sus orígenes. En colaboración con <strong>iam8bit</strong>, la empresa anunció el relanzamiento de <strong>Sonic The Hedgehog 1 y 2</strong> en cartuchos físicos de <strong>Mega Drive</strong> (Sega Genesis), dentro de la llamada <em>Legacy Cartridge Collection</em>.</p>
      <h2>De vuelta al cartucho de verdad</h2>
      <p>No es una colección digital ni una mini consola: son <strong>cartuchos reales</strong>, que funcionan en un Mega Drive de verdad. La onda es totalmente nostálgica, pero con un acabado premium pensado para coleccionistas:</p>
      <ul>
        <li><strong>Sonic 1</strong> viene en un cartucho translúcido <em>Blue Blur</em> (el azul clásico del personaje).</li>
        <li><strong>Sonic 2</strong> viene en un cartucho translúcido <em>Two Tail Amber</em>, en homenaje a Tails.</li>
        <li>Embalaje <strong>clamshell</strong> azul nostálgico, con detalles en foil.</li>
        <li>Manual de instrucciones <strong>full-color</strong> premium y póster incluido.</li>
      </ul>
      <h2>El detalle: 1 de cada 8 cartuchos es especial</h2>
      <p>El detalle más divertido del anuncio es una mecánica de <strong>rareza</strong>. Según iam8bit, <strong>1 de cada 8 cartuchos</strong> viene "infundido con la energía de las Chaos Emeralds" — es decir, una edición especial escondida en la tirada, al mejor estilo "figurita rara".</p>
      <p>Es un toque inteligente: convierte la compra en un pequeño evento. No sabes exactamente qué versión vas a recibir, y eso rescata aquella sensación de abrir una caja sin saber qué hay dentro — algo que lo digital, por definición, nunca entrega.</p>
      <h2>Por qué importa (más allá de la nostalgia)</h2>
      <p>Sonic nació en <strong>1991</strong> como la respuesta de Sega a Mario, y el Mega Drive fue la consola que puso a la empresa en el mapa de toda una generación. Relanzar justamente <strong>Sonic 1 y 2</strong> en cartucho no es aleatorio: son los dos títulos que definieron la identidad de la franquicia — velocidad, loops, anillos y aquella banda sonora que nadie olvida.</p>
      <p>Cabe señalar que esta no es la única forma de jugar Sonic clásico hoy. Las colecciones digitales y el excelente <em>Sonic Origins</em> ya cumplen ese papel para quien solo quiere jugar. El cartucho físico apunta a otro público: <strong>coleccionistas y nostálgicos</strong> que valoran el objeto, el embalaje y la experiencia de tener la media en la mano.</p>
      <h2>Mi lectura</h2>
      <p>Como alguien apasionado por los videojuegos, encuentro este tipo de lanzamiento un respiro. En un mercado dominado por juegos-servicio, microtransacciones y descargas de 100 GB, ver a Sega celebrar 35 años con <strong>media física, manual impreso y póster</strong> es casi un acto de cariño con su propia historia.</p>
      <p>La mecánica del "1 de 8" es el tipo de idea simple que genera conversación y da vida a una comunidad de coleccionistas. Y refuerza una verdad del mercado: a veces el mejor lanzamiento no es el más nuevo, sino el que sabe homenajear de dónde vino todo.</p>
    `,
  },
};

export default function Sonic35AnosMegaDrivePage() {
  return <PostLayout {...content} date={post.date} />;
}
