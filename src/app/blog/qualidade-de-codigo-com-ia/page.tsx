import type { Metadata } from "next";

import { PostLayout } from "@/components/post-layout";
import type { LocalizedPost } from "@/components/post-content";
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

const linkedin =
  '<a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noopener noreferrer">LinkedIn</a>';

const content: LocalizedPost = {
  title: {
    "pt-BR":
      "Qualidade de código na era da IA: júnior x sênior usando as mesmas ferramentas",
    "en-US":
      "Code quality in the AI era: junior vs senior using the same tools",
    "es-ES":
      "Calidad de código en la era de la IA: junior vs senior usando las mismas herramientas",
  },
  description: {
    "pt-BR":
      "A IA acelera todo mundo, mas não nivela a senioridade. O que muda quando um júnior e um sênior usam o mesmo assistente, o que acontece com o aprendizado e o legado, e como manter qualidade no processo.",
    "en-US":
      "AI speeds everyone up, but it doesn't level out seniority. What changes when a junior and a senior use the same assistant, what happens to learning and legacy, and how to keep quality in the process.",
    "es-ES":
      "La IA acelera a todos, pero no nivela la seniority. Qué cambia cuando un junior y un senior usan el mismo asistente, qué pasa con el aprendizaje y el legado, y cómo mantener la calidad en el proceso.",
  },
  body: {
    "pt-BR": `
      <p>A pergunta que mais ouço hoje não é mais "a IA vai substituir programador?". É uma versão mais incômoda: <strong>se todo mundo tem o mesmo assistente, qual é a diferença entre um júnior e um sênior?</strong> Passei os últimos meses prestando atenção nisso no dia a dia, e a resposta curta é: a ferramenta é a mesma, o resultado não.</p>
      <h2>A IA acelera, mas não nivela</h2>
      <p>A primeira ilusão é achar que o assistente coloca todo mundo no mesmo patamar. Ele não coloca — ele <strong>amplifica</strong> quem você já é. Um sênior usa a IA como um par que escreve rápido enquanto ele continua decidindo a direção. Um júnior, sem repertório, tende a usá-la como uma autoridade: aceita a primeira resposta porque parece certa e compila.</p>
      <p>O ponto é que <strong>código que funciona não é código que presta</strong>. A IA é excelente em produzir algo que roda. Avaliar se aquilo é a solução certa para o seu contexto — performance, manutenção, segurança, custo — continua sendo trabalho humano. E é exatamente aí que a senioridade aparece.</p>
      <h2>Júnior com IA: o atalho que cobra juros</h2>
      <p>Para quem está começando, a IA é tentadora justamente porque resolve o sintoma na hora. O problema é que ela também <strong>pula a parte onde o aprendizado acontece</strong>: a luta com o erro, a leitura da documentação, o entender <em>por que</em> aquilo funciona.</p>
      <p>Na prática, vejo três armadilhas recorrentes:</p>
      <ul>
        <li><strong>Dependência sem compreensão.</strong> O código entra no projeto, mas o autor não saberia explicá-lo nem debugá-lo quando quebrar em produção.</li>
        <li><strong>Falta de senso crítico.</strong> Sem base, é difícil perceber quando a IA está confiante e errada — e ela é muito boa em parecer confiante.</li>
        <li><strong>Padrões inconsistentes.</strong> Cada trecho gerado segue um estilo diferente, e o projeto vira uma colcha de retalhos.</li>
      </ul>
      <p>Nada disso significa que júnior não deva usar IA. Significa que o uso precisa vir com uma regra: <strong>não cole o que você não entende</strong>. A IA é um ótimo tutor quando você a usa para perguntar "por quê", e um péssimo atalho quando você a usa para não pensar.</p>
      <h2>Pleno e sênior com IA: o multiplicador</h2>
      <p>Com experiência, a relação se inverte. O sênior já tem o modelo mental do sistema na cabeça, então usa a IA para <strong>encurtar o caminho até uma decisão que ele mesmo tomaria</strong>: gerar o boilerplate, esboçar três abordagens, escrever o teste chato, traduzir uma ideia para uma linguagem que ele conhece menos.</p>
      <p>A diferença está no filtro. Quando a IA sugere algo, o sênior pergunta coisas que o júnior nem sabe que existem: isso escala? como envelhece em seis meses? quem mais vai mexer aqui? qual o custo de manter? É esse filtro — e não a velocidade de digitação — que define a qualidade do que entra no repositório.</p>
      <h2>O que acontece com o aprendizado</h2>
      <p>Essa é a minha maior preocupação de médio prazo. A trajetória clássica do desenvolvedor era construída na fricção: você apanhava de um bug por horas e saía dali sabendo algo que não esquece mais. A IA remove boa parte dessa fricção — e, junto com ela, parte do aprendizado.</p>
      <p>O risco não é formar profissionais ruins. É formar profissionais <strong>rápidos e rasos</strong>: gente que entrega muito enquanto o problema é parecido com o que a IA já viu, e que trava quando aparece o problema novo, o legado bizarro, o requisito que não cabe em nenhum padrão pronto. A solução não é proibir a ferramenta — é ser intencional: usar a IA para acelerar o que você já domina e desligá-la de propósito quando o objetivo é aprender.</p>
      <h2>Legado: a conta que chega depois</h2>
      <p>Quem trabalha com sistemas antigos sabe que o código se lê muito mais do que se escreve. E aqui mora um paradoxo: a IA facilita <strong>produzir</strong> código numa velocidade que a equipe não consegue <strong>revisar e entender</strong> na mesma proporção.</p>
      <p>Quando isso vira rotina, o legado de amanhã nasce hoje — só que pior, porque ninguém escreveu de fato aquelas linhas. Já vi PRs grandes, plausíveis, aprovados rápido porque "a IA fez e está passando nos testes". Seis meses depois, ninguém entende a intenção por trás daquele trecho, e o custo de mudar explode. Código que ninguém entende é dívida técnica, independentemente de quem o digitou.</p>
      <h2>Como manter qualidade no processo</h2>
      <p>Não tenho fórmula mágica, mas tenho um conjunto de práticas que têm funcionado para mim e para os times com quem trabalho:</p>
      <ul>
        <li><strong>Code review trata IA como qualquer autor.</strong> O mesmo rigor, as mesmas perguntas. "A IA escreveu" nunca é justificativa para aprovar.</li>
        <li><strong>Quem submete, explica.</strong> Se você não consegue defender uma decisão do seu PR, ela não está pronta — não importa quem a sugeriu.</li>
        <li><strong>PRs pequenos.</strong> Volume gerado por IA tende a inflar o tamanho das mudanças. Pedaços menores são revisáveis de verdade.</li>
        <li><strong>Testes e tipos como rede de segurança.</strong> Eles não garantem bom design, mas pegam boa parte do código plausível e errado que a IA produz.</li>
        <li><strong>Contexto antes de geração.</strong> A IA entrega bem melhor quando você dá a ela os padrões, as restrições e o objetivo real — em vez de aceitar o default genérico.</li>
      </ul>
      <h2>Minha leitura</h2>
      <p>A IA não apagou a diferença entre júnior e sênior — ela a deslocou. O valor saiu de <em>escrever código</em> e foi para <strong>julgar código</strong>: saber o que pedir, reconhecer quando a resposta está errada e assumir a responsabilidade pelo que entra no sistema. Isso é senioridade, e isso a ferramenta não entrega pronto.</p>
      <p>Para quem está começando, o conselho que eu daria a mim mesmo: use a IA para aprender mais rápido, não para pensar menos. Para quem já tem estrada: a IA é o melhor multiplicador que já tivemos — desde que o filtro continue sendo seu.</p>
      <p>Tem uma opinião diferente, ou viu isso acontecer no seu time? Me chama no ${linkedin}</p>
    `,
    "en-US": `
      <p>The question I hear most today is no longer "will AI replace programmers?". It's a more uncomfortable version: <strong>if everyone has the same assistant, what's the difference between a junior and a senior?</strong> I've spent the last few months paying attention to this day to day, and the short answer is: the tool is the same, the result isn't.</p>
      <h2>AI speeds you up, but doesn't level you</h2>
      <p>The first illusion is thinking the assistant puts everyone on the same level. It doesn't — it <strong>amplifies</strong> who you already are. A senior uses AI as a peer that writes fast while they keep deciding the direction. A junior, without a repertoire, tends to use it as an authority: accepts the first answer because it looks right and compiles.</p>
      <p>The point is that <strong>code that works isn't code that's good</strong>. AI is excellent at producing something that runs. Judging whether that's the right solution for your context — performance, maintenance, security, cost — remains human work. And that's exactly where seniority shows.</p>
      <h2>Junior with AI: the shortcut that charges interest</h2>
      <p>For those just starting, AI is tempting precisely because it resolves the symptom instantly. The problem is it also <strong>skips the part where learning happens</strong>: the struggle with the error, reading the documentation, understanding <em>why</em> it works.</p>
      <p>In practice, I see three recurring traps:</p>
      <ul>
        <li><strong>Dependence without comprehension.</strong> The code goes into the project, but the author wouldn't be able to explain or debug it when it breaks in production.</li>
        <li><strong>Lack of critical sense.</strong> Without a foundation, it's hard to notice when AI is confident and wrong — and it's very good at looking confident.</li>
        <li><strong>Inconsistent patterns.</strong> Each generated snippet follows a different style, and the project becomes a patchwork.</li>
      </ul>
      <p>None of this means juniors shouldn't use AI. It means the use needs a rule: <strong>don't paste what you don't understand</strong>. AI is a great tutor when you use it to ask "why", and a terrible shortcut when you use it to avoid thinking.</p>
      <h2>Mid-level and senior with AI: the multiplier</h2>
      <p>With experience, the relationship flips. The senior already has the system's mental model in their head, so they use AI to <strong>shorten the path to a decision they'd make themselves</strong>: generate the boilerplate, sketch three approaches, write the boring test, translate an idea into a language they know less.</p>
      <p>The difference is in the filter. When AI suggests something, the senior asks things the junior doesn't even know exist: does this scale? how does it age in six months? who else will touch this? what's the cost of maintaining it? It's that filter — not typing speed — that defines the quality of what enters the repository.</p>
      <h2>What happens to learning</h2>
      <p>This is my biggest medium-term concern. The classic developer's trajectory was built on friction: you'd struggle with a bug for hours and walk away knowing something you'd never forget. AI removes much of that friction — and, along with it, part of the learning.</p>
      <p>The risk isn't producing bad professionals. It's producing <strong>fast and shallow</strong> ones: people who deliver a lot while the problem resembles what AI has already seen, and who freeze when the new problem appears, the bizarre legacy, the requirement that fits no ready-made pattern. The solution isn't banning the tool — it's being intentional: use AI to speed up what you already master, and turn it off on purpose when the goal is to learn.</p>
      <h2>Legacy: the bill that comes later</h2>
      <p>Anyone who works with old systems knows code is read far more than it's written. And here lies a paradox: AI makes it easier to <strong>produce</strong> code at a speed the team can't <strong>review and understand</strong> in the same proportion.</p>
      <p>When that becomes routine, tomorrow's legacy is born today — only worse, because no one actually wrote those lines. I've seen large, plausible PRs approved fast because "AI did it and it's passing the tests". Six months later, no one understands the intent behind that snippet, and the cost of changing explodes. Code no one understands is technical debt, regardless of who typed it.</p>
      <h2>How to keep quality in the process</h2>
      <p>I don't have a magic formula, but I have a set of practices that have worked for me and the teams I work with:</p>
      <ul>
        <li><strong>Code review treats AI like any author.</strong> The same rigor, the same questions. "AI wrote it" is never a justification to approve.</li>
        <li><strong>Whoever submits, explains.</strong> If you can't defend a decision in your PR, it's not ready — no matter who suggested it.</li>
        <li><strong>Small PRs.</strong> AI-generated volume tends to inflate change size. Smaller chunks are actually reviewable.</li>
        <li><strong>Tests and types as a safety net.</strong> They don't guarantee good design, but they catch much of the plausible-and-wrong code AI produces.</li>
        <li><strong>Context before generation.</strong> AI delivers far better when you give it the patterns, the constraints and the real goal — instead of accepting the generic default.</li>
      </ul>
      <h2>My take</h2>
      <p>AI didn't erase the difference between junior and senior — it shifted it. The value moved from <em>writing code</em> to <strong>judging code</strong>: knowing what to ask for, recognizing when the answer is wrong and taking responsibility for what enters the system. That's seniority, and the tool doesn't deliver it ready-made.</p>
      <p>For those starting out, the advice I'd give my younger self: use AI to learn faster, not to think less. For those with mileage: AI is the best multiplier we've ever had — as long as the filter stays yours.</p>
      <p>Have a different opinion, or seen this happen on your team? Reach me on ${linkedin}</p>
    `,
    "es-ES": `
      <p>La pregunta que más escucho hoy ya no es "¿la IA va a reemplazar al programador?". Es una versión más incómoda: <strong>si todos tienen el mismo asistente, ¿cuál es la diferencia entre un junior y un senior?</strong> Pasé los últimos meses prestando atención a esto en el día a día, y la respuesta corta es: la herramienta es la misma, el resultado no.</p>
      <h2>La IA acelera, pero no nivela</h2>
      <p>La primera ilusión es creer que el asistente pone a todos en el mismo nivel. No lo hace — <strong>amplifica</strong> quien ya eres. Un senior usa la IA como un par que escribe rápido mientras él sigue decidiendo la dirección. Un junior, sin repertorio, tiende a usarla como una autoridad: acepta la primera respuesta porque parece correcta y compila.</p>
      <p>El punto es que <strong>código que funciona no es código que sirve</strong>. La IA es excelente produciendo algo que corre. Evaluar si eso es la solución correcta para tu contexto — rendimiento, mantenimiento, seguridad, costo — sigue siendo trabajo humano. Y es exactamente ahí donde aparece la seniority.</p>
      <h2>Junior con IA: el atajo que cobra intereses</h2>
      <p>Para quien está empezando, la IA es tentadora justamente porque resuelve el síntoma al instante. El problema es que también <strong>salta la parte donde ocurre el aprendizaje</strong>: la lucha con el error, la lectura de la documentación, el entender <em>por qué</em> eso funciona.</p>
      <p>En la práctica, veo tres trampas recurrentes:</p>
      <ul>
        <li><strong>Dependencia sin comprensión.</strong> El código entra en el proyecto, pero el autor no sabría explicarlo ni depurarlo cuando se rompa en producción.</li>
        <li><strong>Falta de sentido crítico.</strong> Sin base, es difícil percibir cuándo la IA está confiada y equivocada — y es muy buena pareciendo confiada.</li>
        <li><strong>Patrones inconsistentes.</strong> Cada fragmento generado sigue un estilo diferente, y el proyecto se vuelve una colcha de retazos.</li>
      </ul>
      <p>Nada de esto significa que un junior no deba usar IA. Significa que el uso necesita una regla: <strong>no pegues lo que no entiendes</strong>. La IA es un gran tutor cuando la usas para preguntar "por qué", y un pésimo atajo cuando la usas para no pensar.</p>
      <h2>Semi-senior y senior con IA: el multiplicador</h2>
      <p>Con experiencia, la relación se invierte. El senior ya tiene el modelo mental del sistema en la cabeza, así que usa la IA para <strong>acortar el camino hasta una decisión que él mismo tomaría</strong>: generar el boilerplate, esbozar tres enfoques, escribir el test aburrido, traducir una idea a un lenguaje que conoce menos.</p>
      <p>La diferencia está en el filtro. Cuando la IA sugiere algo, el senior pregunta cosas que el junior ni sabe que existen: ¿esto escala? ¿cómo envejece en seis meses? ¿quién más va a tocar esto? ¿cuál es el costo de mantenerlo? Es ese filtro — y no la velocidad de tecleo — el que define la calidad de lo que entra en el repositorio.</p>
      <h2>Qué pasa con el aprendizaje</h2>
      <p>Esta es mi mayor preocupación de mediano plazo. La trayectoria clásica del desarrollador se construía en la fricción: te peleabas con un bug por horas y salías de ahí sabiendo algo que no olvidas más. La IA elimina buena parte de esa fricción — y, junto con ella, parte del aprendizaje.</p>
      <p>El riesgo no es formar profesionales malos. Es formar profesionales <strong>rápidos y superficiales</strong>: gente que entrega mucho mientras el problema se parece a lo que la IA ya vio, y que se traba cuando aparece el problema nuevo, el legado bizarro, el requisito que no cabe en ningún patrón listo. La solución no es prohibir la herramienta — es ser intencional: usar la IA para acelerar lo que ya dominas y apagarla a propósito cuando el objetivo es aprender.</p>
      <h2>Legado: la cuenta que llega después</h2>
      <p>Quien trabaja con sistemas antiguos sabe que el código se lee mucho más de lo que se escribe. Y aquí hay una paradoja: la IA facilita <strong>producir</strong> código a una velocidad que el equipo no consigue <strong>revisar y entender</strong> en la misma proporción.</p>
      <p>Cuando eso se vuelve rutina, el legado de mañana nace hoy — solo que peor, porque nadie escribió de hecho esas líneas. Ya vi PRs grandes, plausibles, aprobados rápido porque "la IA lo hizo y está pasando los tests". Seis meses después, nadie entiende la intención detrás de ese fragmento, y el costo de cambiar explota. Código que nadie entiende es deuda técnica, sin importar quién lo tecleó.</p>
      <h2>Cómo mantener la calidad en el proceso</h2>
      <p>No tengo fórmula mágica, pero tengo un conjunto de prácticas que han funcionado para mí y para los equipos con los que trabajo:</p>
      <ul>
        <li><strong>El code review trata a la IA como a cualquier autor.</strong> El mismo rigor, las mismas preguntas. "La IA lo escribió" nunca es justificación para aprobar.</li>
        <li><strong>Quien envía, explica.</strong> Si no puedes defender una decisión de tu PR, no está lista — no importa quién la sugirió.</li>
        <li><strong>PRs pequeños.</strong> El volumen generado por IA tiende a inflar el tamaño de los cambios. Trozos más pequeños son revisables de verdad.</li>
        <li><strong>Tests y tipos como red de seguridad.</strong> No garantizan buen diseño, pero atrapan buena parte del código plausible y equivocado que produce la IA.</li>
        <li><strong>Contexto antes de generar.</strong> La IA entrega mucho mejor cuando le das los patrones, las restricciones y el objetivo real — en vez de aceptar el default genérico.</li>
      </ul>
      <h2>Mi lectura</h2>
      <p>La IA no borró la diferencia entre junior y senior — la desplazó. El valor pasó de <em>escribir código</em> a <strong>juzgar código</strong>: saber qué pedir, reconocer cuándo la respuesta está equivocada y asumir la responsabilidad por lo que entra en el sistema. Eso es seniority, y eso la herramienta no lo entrega listo.</p>
      <p>Para quien está empezando, el consejo que me daría a mí mismo: usa la IA para aprender más rápido, no para pensar menos. Para quien ya tiene camino: la IA es el mejor multiplicador que hemos tenido — siempre que el filtro siga siendo tuyo.</p>
      <p>¿Tienes una opinión diferente, o lo viste pasar en tu equipo? Escríbeme en ${linkedin}</p>
    `,
  },
};

export default function QualidadeDeCodigoComIaPage() {
  return <PostLayout {...content} date={post.date} />;
}
