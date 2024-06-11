"use client";

import { Container, Content, H1, Social, Small } from "./styles";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <Container id="home">
      <Content>
        <H1>Hi! I'm Nilton Rocha, a Pleno Engineer and Content Creator.</H1>
      </Content>
      <Social>
        <Small>
          <FaLinkedinIn size={18} />
        </Small>
        <Small>
          <FaInstagram size={18} />
        </Small>
        <Small>
          <FaGithub size={18} />
        </Small>
        <Small>
          <FaYoutube size={18} />
        </Small>
      </Social>
    </Container>
  );
};

export default Hero;
