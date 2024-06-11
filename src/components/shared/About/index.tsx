import { Content, Paragraph } from "./styles";

const About = () => {
  return (
    <Content>
      <div className="text-center pb-8">
        <p>um pouco</p>
        <h2 className="text-3xl font-medium text-slate-700 pt-1">Sobre mim</h2>
      </div>
      <div className="max-w-xl px-4 pb-4 text-center">
        <Paragraph>
          Desenvolvedor Front-end Pleno, tenho mais de 3 anos na área, expertise
          em UX e UI, tenho um olhar clinico e crio bastante código para mim
          mesmo. Amo o que faço e foi a melhor escolha que fiz, migrar para o
          desenvolvimento.
        </Paragraph>
      </div>
    </Content>
  );
};

export default About;
