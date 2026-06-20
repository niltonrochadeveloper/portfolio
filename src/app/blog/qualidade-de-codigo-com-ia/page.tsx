import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import { posts } from "@/content/posts";

export const dynamic = "force-static";

const post = posts.find((p) => p.slug === "qualidade-de-codigo-com-ia")!;

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

export default function QualidadeDeCodigoComIaPage() {
  return (
    <PostLayout
      title={post.title}
      description={post.description}
      date={post.date}
    >
      <p>
        A pergunta que mais ouço hoje não é mais &quot;a IA vai substituir
        programador?&quot;. É uma versão mais incômoda:{" "}
        <strong>
          se todo mundo tem o mesmo assistente, qual é a diferença entre um
          júnior e um sênior?
        </strong>{" "}
        Passei os últimos meses prestando atenção nisso no dia a dia, e a
        resposta curta é: a ferramenta é a mesma, o resultado não.
      </p>

      <h2>A IA acelera, mas não nivela</h2>
      <p>
        A primeira ilusão é achar que o assistente coloca todo mundo no mesmo
        patamar. Ele não coloca — ele <strong>amplifica</strong> quem você já é.
        Um sênior usa a IA como um par que escreve rápido enquanto ele continua
        decidindo a direção. Um júnior, sem repertório, tende a usá-la como uma
        autoridade: aceita a primeira resposta porque parece certa e compila.
      </p>
      <p>
        O ponto é que <strong>código que funciona não é código que presta</strong>.
        A IA é excelente em produzir algo que roda. Avaliar se aquilo é a
        solução certa para o seu contexto — performance, manutenção, segurança,
        custo — continua sendo trabalho humano. E é exatamente aí que a
        senioridade aparece.
      </p>

      <h2>Júnior com IA: o atalho que cobra juros</h2>
      <p>
        Para quem está começando, a IA é tentadora justamente porque resolve o
        sintoma na hora. O problema é que ela também{" "}
        <strong>pula a parte onde o aprendizado acontece</strong>: a luta com o
        erro, a leitura da documentação, o entender <em>por que</em> aquilo
        funciona.
      </p>
      <p>Na prática, vejo três armadilhas recorrentes:</p>
      <ul>
        <li>
          <strong>Dependência sem compreensão.</strong> O código entra no
          projeto, mas o autor não saberia explicá-lo nem debugá-lo quando
          quebrar em produção.
        </li>
        <li>
          <strong>Falta de senso crítico.</strong> Sem base, é difícil
          perceber quando a IA está confiante e errada — e ela é muito boa em
          parecer confiante.
        </li>
        <li>
          <strong>Padrões inconsistentes.</strong> Cada trecho gerado segue um
          estilo diferente, e o projeto vira uma colcha de retalhos.
        </li>
      </ul>
      <p>
        Nada disso significa que júnior não deva usar IA. Significa que o uso
        precisa vir com uma regra: <strong>não cole o que você não entende</strong>.
        A IA é um ótimo tutor quando você a usa para perguntar &quot;por
        quê&quot;, e um péssimo atalho quando você a usa para não pensar.
      </p>

      <h2>Pleno e sênior com IA: o multiplicador</h2>
      <p>
        Com experiência, a relação se inverte. O sênior já tem o modelo mental
        do sistema na cabeça, então usa a IA para{" "}
        <strong>encurtar o caminho até uma decisão que ele mesmo tomaria</strong>
        : gerar o boilerplate, esboçar três abordagens, escrever o teste chato,
        traduzir uma ideia para uma linguagem que ele conhece menos.
      </p>
      <p>
        A diferença está no filtro. Quando a IA sugere algo, o sênior pergunta
        coisas que o júnior nem sabe que existem: isso escala? como envelhece
        em seis meses? quem mais vai mexer aqui? qual o custo de manter? É esse
        filtro — e não a velocidade de digitação — que define a qualidade do que
        entra no repositório.
      </p>

      <h2>O que acontece com o aprendizado</h2>
      <p>
        Essa é a minha maior preocupação de médio prazo. A trajetória clássica
        do desenvolvedor era construída na fricção: você apanhava de um bug por
        horas e saía dali sabendo algo que não esquece mais. A IA remove boa
        parte dessa fricção — e, junto com ela, parte do aprendizado.
      </p>
      <p>
        O risco não é formar profissionais ruins. É formar profissionais{" "}
        <strong>rápidos e rasos</strong>: gente que entrega muito enquanto o
        problema é parecido com o que a IA já viu, e que trava quando aparece o
        problema novo, o legado bizarro, o requisito que não cabe em nenhum
        padrão pronto. A solução não é proibir a ferramenta — é ser intencional:
        usar a IA para acelerar o que você já domina e desligá-la de propósito
        quando o objetivo é aprender.
      </p>

      <h2>Legado: a conta que chega depois</h2>
      <p>
        Quem trabalha com sistemas antigos sabe que o código se lê muito mais do
        que se escreve. E aqui mora um paradoxo: a IA facilita{" "}
        <strong>produzir</strong> código numa velocidade que a equipe não
        consegue <strong>revisar e entender</strong> na mesma proporção.
      </p>
      <p>
        Quando isso vira rotina, o legado de amanhã nasce hoje — só que pior,
        porque ninguém escreveu de fato aquelas linhas. Já vi PRs grandes,
        plausíveis, aprovados rápido porque &quot;a IA fez e está passando nos
        testes&quot;. Seis meses depois, ninguém entende a intenção por trás
        daquele trecho, e o custo de mudar explode. Código que ninguém entende é
        dívida técnica, independentemente de quem o digitou.
      </p>

      <h2>Como manter qualidade no processo</h2>
      <p>
        Não tenho fórmula mágica, mas tenho um conjunto de práticas que têm
        funcionado para mim e para os times com quem trabalho:
      </p>
      <ul>
        <li>
          <strong>Code review trata IA como qualquer autor.</strong> O mesmo
          rigor, as mesmas perguntas. &quot;A IA escreveu&quot; nunca é
          justificativa para aprovar.
        </li>
        <li>
          <strong>Quem submete, explica.</strong> Se você não consegue defender
          uma decisão do seu PR, ela não está pronta — não importa quem a
          sugeriu.
        </li>
        <li>
          <strong>PRs pequenos.</strong> Volume gerado por IA tende a inflar o
          tamanho das mudanças. Pedaços menores são revisáveis de verdade.
        </li>
        <li>
          <strong>Testes e tipos como rede de segurança.</strong> Eles não
          garantem bom design, mas pegam boa parte do código plausível e errado
          que a IA produz.
        </li>
        <li>
          <strong>Contexto antes de geração.</strong> A IA entrega bem melhor
          quando você dá a ela os padrões, as restrições e o objetivo real — em
          vez de aceitar o default genérico.
        </li>
      </ul>

      <h2>Minha leitura</h2>
      <p>
        A IA não apagou a diferença entre júnior e sênior — ela a deslocou. O
        valor saiu de <em>escrever código</em> e foi para{" "}
        <strong>julgar código</strong>: saber o que pedir, reconhecer quando a
        resposta está errada e assumir a responsabilidade pelo que entra no
        sistema. Isso é senioridade, e isso a ferramenta não entrega pronto.
      </p>
      <p>
        Para quem está começando, o conselho que eu daria a mim mesmo: use a IA
        para aprender mais rápido, não para pensar menos. Para quem já tem
        estrada: a IA é o melhor multiplicador que já tivemos — desde que o
        filtro continue sendo seu.
      </p>
      <p>
        Tem uma opinião diferente, ou viu isso acontecer no seu time? Me chama
        no{" "}
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
