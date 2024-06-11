"use client";

import { Root, Content, H1, Social, Small } from "./styles";

const Hero = () => {
  return (
    <Root>
      <Content>
        <H1>Hi! I'm Nilton Rocha, a Pleno Engineer and Content Creator.</H1>
      </Content>
      <Social>
        <Small>LinkedIn</Small>
        <Small>Instagram</Small>
        <Small>GitHub</Small>
        <Small>Youtube</Small>
      </Social>
    </Root>
  );
};

export default Hero;
