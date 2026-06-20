import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
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

export default function DesenvolvimentoDeJogosNoBrasilPage() {
  return (
    <PostLayout
      title={post.title}
      description={post.description}
      date={post.date}
    >
      <p>
        Sempre que alguém descobre que sou desenvolvedor, em algum momento vem a
        pergunta: &quot;dá pra viver de fazer jogo no Brasil?&quot;. A resposta
        honesta é <strong>sim, mas é mais difícil do que deveria</strong> — e
        entender o porquê diz muito sobre o estado da nossa indústria de games.
      </p>

      <h2>Temos talento de sobra</h2>
      <p>
        Não falta gente boa. O Brasil já entregou jogos que rodaram o mundo,
        ganharam prêmios e construíram comunidades fiéis. Temos artistas,
        programadores, designers e roteiristas que competem em qualidade com
        qualquer estúdio lá fora. A criatividade nunca foi o gargalo.
      </p>
      <p>
        Some a isso uma população enorme de jogadores: o Brasil é um dos maiores
        mercados consumidores de games do planeta. Em tese, deveríamos ter um
        ecossistema robusto de produção. Na prática, a maior parte desse
        consumo vai para jogos feitos fora.
      </p>

      <h2>Onde a conta não fecha</h2>
      <p>
        Os obstáculos são quase sempre os mesmos, e quase nenhum é técnico:
      </p>
      <ul>
        <li>
          <strong>Financiamento.</strong> Desenvolver jogo é caro e demora.
          Faltam fundos, editoras locais e investidores que entendam o ciclo
          longo de um game. Muita gente banca o próprio projeto nas horas vagas.
        </li>
        <li>
          <strong>Mercado interno fraco para produtos nacionais.</strong> O
          jogador brasileiro consome muito, mas historicamente compra pouco do
          que é feito aqui — em parte por preço, em parte por visibilidade.
        </li>
        <li>
          <strong>Câmbio e impostos.</strong> Ferramentas, hardware e serviços
          são cobrados em dólar, enquanto a receita muitas vezes é em real.
        </li>
        <li>
          <strong>Fuga de talento.</strong> Profissionais formados aqui acabam
          contratados por estúdios estrangeiros, muitas vezes sem sair de casa.
        </li>
      </ul>

      <h2>O que vem dando certo</h2>
      <p>
        Apesar do cenário, tem muita coisa acontecendo — e o caminho mais
        promissor passou a ser o <strong>indie</strong>. Times pequenos,
        engines acessíveis como Unity e Godot, e plataformas de distribuição
        digital derrubaram a barreira de entrada. Hoje um estúdio de poucas
        pessoas consegue publicar para o mundo inteiro sem precisar de uma
        gigante por trás.
      </p>
      <p>
        A <strong>Godot</strong>, inclusive, virou queridinha de boa parte da
        cena brasileira: é gratuita, aberta e tem uma comunidade ativa que fala
        português. Junte isso a coletivos, game jams e eventos locais e você tem
        um ambiente onde dá para começar de verdade, sem pedir licença a
        ninguém.
      </p>

      <h2>Para quem quer entrar</h2>
      <p>
        Se você está pensando em desenvolver jogos no Brasil, o conselho que eu
        daria é direto:
      </p>
      <ul>
        <li>
          <strong>Comece pequeno e termine.</strong> Um jogo curto finalizado
          ensina mais — e abre mais portas — do que um épico eternamente
          inacabado.
        </li>
        <li>
          <strong>Trate como produto, não só como arte.</strong> Pense em
          público, divulgação e sustentabilidade desde cedo.
        </li>
        <li>
          <strong>Entre na comunidade.</strong> Game jams, Discords e eventos
          locais são onde se aprende, se faz networking e se acha sócio.
        </li>
        <li>
          <strong>Aproveite o remoto.</strong> Trabalhar para um estúdio de fora
          enquanto desenvolve o próprio jogo é uma forma realista de bancar o
          sonho.
        </li>
      </ul>

      <h2>Minha leitura</h2>
      <p>
        O desenvolvimento de jogos no Brasil é uma indústria{" "}
        <strong>jovem, criativa e subfinanciada</strong>. O talento já está
        aqui; o que falta é estrutura — financiamento, valorização do produto
        nacional e um mercado interno que compre o que produzimos. A boa notícia
        é que as ferramentas nunca estiveram tão acessíveis, e a cena indie
        prova todos os anos que dá para fazer coisa séria com pouco.
      </p>
      <p>
        Trabalha com games ou está começando agora? Me chama no{" "}
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
