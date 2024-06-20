import { AiOutlineExport } from "react-icons/ai";
import { useEffect, useState } from "react";
import LoginForm from "@/components/shared/Login";
import UseStore from "@/store";
import Skills from "@/components/shared/Skills";
import {
  Hero,
  Projects,
  About,
  Contact,
  Experience,
} from "@/components/shared";
import type { Metadata } from "next";
import { experiences, projetos } from "@/lib";

export const metadata: Metadata = {
  title: "Dev Nilton Rocha",
  description: "Meu portfólio pessoal",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience source={experiences} />
      <Projects source={projetos} />
      <Contact />
    </>
  );
}
