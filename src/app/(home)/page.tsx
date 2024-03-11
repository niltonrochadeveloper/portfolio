"use client";

import Image from "next/image";

import styles from "./page.module.scss";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBars } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import { Tailwind } from "@/components/Tailwind";
import { useEffect, useState } from "react";
import LoginForm from "@/components/shared/Login";
import UseStore from "@/store";
import Hero from "@/components/shared/Hero";
import Experience from "@/components/shared/Experience";
import Skills from "@/components/shared/Skills";
import axios from "axios";
import Projects from "@/components/shared/Projects";
import { source } from "@/components/shared/Projects/source";

export default function Home() {
  const {
    useThemeStore: { theme },
  } = UseStore();

  return (
    <div>
      <Hero />
      <Projects source={source} />
    </div>
  );
}
