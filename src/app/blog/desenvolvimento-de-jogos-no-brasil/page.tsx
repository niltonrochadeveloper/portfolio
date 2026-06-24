import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import type { LocalizedPost } from "@/components/post-content";
import { posts } from "@/content/posts";

export const dynamic = "force-static";

const post = posts.find((p) => p.slug === "desenvolvimento-de-jogos-no-brasil")!;

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
      "Desenvolvimento de jogos no Brasil: onde estamos e para onde caminhamos",
    "en-US":
      "Game development in Brazil: where we are and where we're heading",
    "es-ES":
      "Desarrollo de videojuegos en Brasil: dónde estamos y hacia dónde vamos",
  },
  description: {
    "pt-BR":
      "O Brasil tem talento, comunidade e jogos premiados, mas ainda esbarra em financiamento e mercado interno. Um panorama honesto da indústria de games nacional e dos caminhos para quem quer entrar.",
    "en-US":
      "Brazil has talent, community and award-winning games, but still struggles with funding and the domestic market. An honest overview of the national games industry and the paths for those who want in.",
    "es-ES":
      "Brasil tiene talento, comunidad y juegos premiados, pero todavía choca con la financiación y el mercado interno. Un panorama honesto de la industria nacional de videojuegos y los caminos para quien quiere entrar.",
  },
  body: {
    "pt-BR": `
      <p>Sempre que alguém descobre que sou desenvolvedor, em algum momento vem a pergunta: "dá pra viver de fazer jogo no Brasil?". A resposta honesta é <strong>sim, mas é mais difícil do que deveria</strong> — e entender o porquê diz muito sobre o estado da nossa indústria de games.</p>
      <h2>Temos talento de sobra</h2>
      <p>Não falta gente boa. O Brasil já entregou jogos que rodaram o mundo, ganharam prêmios e construíram comunidades fiéis. Temos artistas, programadores, designers e roteiristas que competem em qualidade com qualquer estúdio lá fora. A criatividade nunca foi o gargalo.</p>
      <p>Some a isso uma população enorme de jogadores: o Brasil é um dos maiores mercados consumidores de games do planeta. Em tese, deveríamos ter um ecossistema robusto de produção. Na prática, a maior parte desse consumo vai para jogos feitos fora.</p>
      <h2>Onde a conta não fecha</h2>
      <p>Os obstáculos são quase sempre os mesmos, e quase nenhum é técnico:</p>
      <ul>
        <li><strong>Financiamento.</strong> Desenvolver jogo é caro e demora. Faltam fundos, editoras locais e investidores que entendam o ciclo longo de um game. Muita gente banca o próprio projeto nas horas vagas.</li>
        <li><strong>Mercado interno fraco para produtos nacionais.</strong> O jogador brasileiro consome muito, mas historicamente compra pouco do que é feito aqui — em parte por preço, em parte por visibilidade.</li>
        <li><strong>Câmbio e impostos.</strong> Ferramentas, hardware e serviços são cobrados em dólar, enquanto a receita muitas vezes é em real.</li>
        <li><strong>Fuga de talento.</strong> Profissionais formados aqui acabam contratados por estúdios estrangeiros, muitas vezes sem sair de casa.</li>
      </ul>
      <h2>O que vem dando certo</h2>
      <p>Apesar do cenário, tem muita coisa acontecendo — e o caminho mais promissor passou a ser o <strong>indie</strong>. Times pequenos, engines acessíveis como Unity e Godot, e plataformas de distribuição digital derrubaram a barreira de entrada. Hoje um estúdio de poucas pessoas consegue publicar para o mundo inteiro sem precisar de uma gigante por trás.</p>
      <p>A <strong>Godot</strong>, inclusive, virou queridinha de boa parte da cena brasileira: é gratuita, aberta e tem uma comunidade ativa que fala português. Junte isso a coletivos, game jams e eventos locais e você tem um ambiente onde dá para começar de verdade, sem pedir licença a ninguém.</p>
      <h2>Para quem quer entrar</h2>
      <p>Se você está pensando em desenvolver jogos no Brasil, o conselho que eu daria é direto:</p>
      <ul>
        <li><strong>Comece pequeno e termine.</strong> Um jogo curto finalizado ensina mais — e abre mais portas — do que um épico eternamente inacabado.</li>
        <li><strong>Trate como produto, não só como arte.</strong> Pense em público, divulgação e sustentabilidade desde cedo.</li>
        <li><strong>Entre na comunidade.</strong> Game jams, Discords e eventos locais são onde se aprende, se faz networking e se acha sócio.</li>
        <li><strong>Aproveite o remoto.</strong> Trabalhar para um estúdio de fora enquanto desenvolve o próprio jogo é uma forma realista de bancar o sonho.</li>
      </ul>
      <h2>Minha leitura</h2>
      <p>O desenvolvimento de jogos no Brasil é uma indústria <strong>jovem, criativa e subfinanciada</strong>. O talento já está aqui; o que falta é estrutura — financiamento, valorização do produto nacional e um mercado interno que compre o que produzimos. A boa notícia é que as ferramentas nunca estiveram tão acessíveis, e a cena indie prova todos os anos que dá para fazer coisa séria com pouco.</p>
    `,
    "en-US": `
      <p>Whenever someone finds out I'm a developer, at some point the question comes up: "can you make a living making games in Brazil?". The honest answer is <strong>yes, but it's harder than it should be</strong> — and understanding why says a lot about the state of our games industry.</p>
      <h2>We have talent to spare</h2>
      <p>There's no shortage of good people. Brazil has already delivered games that traveled the world, won awards and built loyal communities. We have artists, programmers, designers and writers who compete in quality with any studio abroad. Creativity was never the bottleneck.</p>
      <p>Add to that a huge population of players: Brazil is one of the largest games-consuming markets on the planet. In theory, we should have a robust production ecosystem. In practice, most of that consumption goes to games made elsewhere.</p>
      <h2>Where the math doesn't add up</h2>
      <p>The obstacles are almost always the same, and almost none are technical:</p>
      <ul>
        <li><strong>Funding.</strong> Developing a game is expensive and slow. There's a lack of funds, local publishers and investors who understand a game's long cycle. Many people bankroll their own project in their spare time.</li>
        <li><strong>Weak domestic market for national products.</strong> The Brazilian player consumes a lot, but historically buys little of what's made here — partly due to price, partly due to visibility.</li>
        <li><strong>Exchange rate and taxes.</strong> Tools, hardware and services are charged in dollars, while revenue is often in reais.</li>
        <li><strong>Talent drain.</strong> Professionals trained here end up hired by foreign studios, often without even leaving home.</li>
      </ul>
      <h2>What's been working</h2>
      <p>Despite the scenario, a lot is happening — and the most promising path has become <strong>indie</strong>. Small teams, accessible engines like Unity and Godot, and digital distribution platforms tore down the entry barrier. Today a studio of a few people can publish to the entire world without needing a giant behind them.</p>
      <p><strong>Godot</strong>, in fact, became a favorite of much of the Brazilian scene: it's free, open and has an active community that speaks Portuguese. Combine that with collectives, game jams and local events and you have an environment where you can truly start, without asking anyone's permission.</p>
      <h2>For those who want in</h2>
      <p>If you're thinking about developing games in Brazil, the advice I'd give is straightforward:</p>
      <ul>
        <li><strong>Start small and finish.</strong> A short finished game teaches more — and opens more doors — than an eternally unfinished epic.</li>
        <li><strong>Treat it as a product, not just art.</strong> Think about audience, promotion and sustainability from early on.</li>
        <li><strong>Join the community.</strong> Game jams, Discords and local events are where you learn, network and find partners.</li>
        <li><strong>Take advantage of remote work.</strong> Working for a studio abroad while developing your own game is a realistic way to fund the dream.</li>
      </ul>
      <h2>My take</h2>
      <p>Game development in Brazil is a <strong>young, creative and underfunded</strong> industry. The talent is already here; what's missing is structure — funding, appreciation for national products and a domestic market that buys what we produce. The good news is that tools have never been so accessible, and the indie scene proves every year that you can make serious things with little.</p>
    `,
    "es-ES": `
      <p>Siempre que alguien descubre que soy desarrollador, en algún momento llega la pregunta: "¿se puede vivir de hacer juegos en Brasil?". La respuesta honesta es <strong>sí, pero es más difícil de lo que debería</strong> — y entender por qué dice mucho sobre el estado de nuestra industria de videojuegos.</p>
      <h2>Tenemos talento de sobra</h2>
      <p>No falta gente buena. Brasil ya entregó juegos que recorrieron el mundo, ganaron premios y construyeron comunidades fieles. Tenemos artistas, programadores, diseñadores y guionistas que compiten en calidad con cualquier estudio de fuera. La creatividad nunca fue el cuello de botella.</p>
      <p>Súmale una población enorme de jugadores: Brasil es uno de los mayores mercados consumidores de videojuegos del planeta. En teoría, deberíamos tener un ecosistema robusto de producción. En la práctica, la mayor parte de ese consumo va para juegos hechos fuera.</p>
      <h2>Donde la cuenta no cuadra</h2>
      <p>Los obstáculos son casi siempre los mismos, y casi ninguno es técnico:</p>
      <ul>
        <li><strong>Financiación.</strong> Desarrollar un juego es caro y lleva tiempo. Faltan fondos, editoras locales e inversores que entiendan el ciclo largo de un juego. Mucha gente banca su propio proyecto en los ratos libres.</li>
        <li><strong>Mercado interno débil para productos nacionales.</strong> El jugador brasileño consume mucho, pero históricamente compra poco de lo que se hace aquí — en parte por precio, en parte por visibilidad.</li>
        <li><strong>Cambio e impuestos.</strong> Herramientas, hardware y servicios se cobran en dólares, mientras que los ingresos muchas veces son en reales.</li>
        <li><strong>Fuga de talento.</strong> Profesionales formados aquí acaban contratados por estudios extranjeros, muchas veces sin salir de casa.</li>
      </ul>
      <h2>Lo que viene funcionando</h2>
      <p>A pesar del escenario, hay mucho pasando — y el camino más prometedor pasó a ser el <strong>indie</strong>. Equipos pequeños, motores accesibles como Unity y Godot, y plataformas de distribución digital derribaron la barrera de entrada. Hoy un estudio de pocas personas consigue publicar para el mundo entero sin necesitar a una gigante detrás.</p>
      <p><strong>Godot</strong>, de hecho, se volvió la favorita de buena parte de la escena brasileña: es gratuita, abierta y tiene una comunidad activa que habla portugués. Junta eso con colectivos, game jams y eventos locales y tienes un ambiente donde se puede empezar de verdad, sin pedir permiso a nadie.</p>
      <h2>Para quien quiere entrar</h2>
      <p>Si estás pensando en desarrollar juegos en Brasil, el consejo que daría es directo:</p>
      <ul>
        <li><strong>Empieza pequeño y termina.</strong> Un juego corto finalizado enseña más — y abre más puertas — que un épico eternamente inacabado.</li>
        <li><strong>Trátalo como producto, no solo como arte.</strong> Piensa en público, difusión y sostenibilidad desde temprano.</li>
        <li><strong>Entra en la comunidad.</strong> Game jams, Discords y eventos locales son donde se aprende, se hace networking y se encuentran socios.</li>
        <li><strong>Aprovecha el remoto.</strong> Trabajar para un estudio de fuera mientras desarrollas tu propio juego es una forma realista de bancar el sueño.</li>
      </ul>
      <h2>Mi lectura</h2>
      <p>El desarrollo de videojuegos en Brasil es una industria <strong>joven, creativa y subfinanciada</strong>. El talento ya está aquí; lo que falta es estructura — financiación, valoración del producto nacional y un mercado interno que compre lo que producimos. La buena noticia es que las herramientas nunca estuvieron tan accesibles, y la escena indie prueba todos los años que se puede hacer algo serio con poco.</p>
    `,
  },
};

export default function DesenvolvimentoDeJogosNoBrasilPage() {
  return <PostLayout {...content} date={post.date} />;
}
