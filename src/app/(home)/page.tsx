"use client";

import Image from "next/image";

import styles from "./page.module.scss";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBars } from "react-icons/fa";
import { Tailwind } from "@/components/Tailwind";
import { useState } from "react";
import LoginForm from "@/components/shared/Login";
import UseStore from "@/store";
import Hero from "@/components/shared/Hero";
import Experience from "@/components/shared/Experience";
import Skills from "@/components/shared/Skills";

export default function Home() {
  const {
    useThemeStore: { theme },
  } = UseStore();

  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <div className="container flex flex-col items-center justify-center py-16">
        <div id="projetos" className="text-center pb-12">
          <p>conheça meus</p>
          <h2
            id="experiencia"
            className="text-3xl font-medium text-slate-700 pt-1"
          >
            Projetos
          </h2>
          <p className="py-4 font-semibold">Aguarde ...</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-12 gap-4">
            <div className="h-60 w-60 bg-slate-500 rounded-2xl"></div>
            <div className="flex gap-8">
              <div className="flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4">
                <div className="flex-col justify-between">
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
            <div className="h-60 w-60 bg-slate-500 rounded-2xl"></div>
            <div className="flex gap-8">
              <div className="flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4">
                <div className="flex-col justify-between">
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
            <div className="h-60 w-60 bg-slate-500 rounded-2xl"></div>
            <div className="flex gap-8">
              <div className="flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4">
                <div className="flex-col justify-between">
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
            <div className="h-60 w-60 bg-slate-500 rounded-2xl"></div>
            <div className="flex gap-8">
              <div className="flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4">
                <div className="flex-col justify-between">
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
          </div>
        </div>
        <div id="contato">
          <p>entre em</p>
          <h2>CONTATO</h2>
        </div>
      </div>
    </>
  );
}
