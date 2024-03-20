import styles from "./page.module.scss";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBars } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import { useEffect, useState } from "react";
import LoginForm from "@/components/shared/Login";
import UseStore from "@/store";
import Skills from "@/components/shared/Skills";
import axios from "axios";
import { Hero, Projects, About, Contact } from "@/components/shared";
import { source } from "@/components/shared/Projects/source";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Nilton Rocha",
  description: "Meu portfólio pessoal",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects source={source} />
      {/* <Contact /> */}
    </div>
  );
}
