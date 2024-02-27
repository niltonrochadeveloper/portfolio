'use client'

import Image from 'next/image'

import styles from './page.module.scss'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavBar } from '@/components/shared';
import { Tailwind } from '@/components/Tailwind';
import { useState } from 'react';
import LoginForm from '@/components/shared/Login';
import UseStore from '@/store';

export default function Home() {

  const { useThemeStore: { theme } } = UseStore()

  return (    
    <>
      <div id='sobre' className='h-screen container '>
        <div className='w-full flex justify-center gap-16 items-center h-full'>
          <div className='overflow-hidden rounded-full flex items-center object-center justify-center text-center'>
            <Image src="/images/header/foto.jpg" width={240} height={240} alt={'foto perfil'} />
            {/* <div className='w-60 h-60 bg-slate-500'></div> */}
          </div>
          <div>
            <p><b>Olá,</b></p>
            <p>meu nome é <b>Nilton Rocha</b> e sou um</p>
            <h1>Desenvolvedor</h1>
            <p>Trabalho com aplicações WEB e MOBILE</p>
          </div>
        </div>
      </div>
      <div className='container flex flex-col items-center justify-center'>
        <div className='text-center pb-12'>
          <p>Explore minha</p>
          <h2 id='experiencia' className='text-3xl font-medium text-slate-700 pt-1'>Experiência</h2>
        </div>
        <div className='w-full grid grid-cols-2 flex-row gap-4'>
          <div className='rounded-xl w-full border-[1px] border-slate-500 min-w-fit p-4'>
            <div className='pb-6 pt-2'>
              <h2 className='font-semibold text-slate-700 text-center text-2xl'>Desenvolvimento Frontend</h2>
            </div>
            <div className='grid grid-cols-4 gap-4 mb-4'>
              <div>
                <h3>HTML</h3>
                <p>Proficiente</p>
              </div>
              <div>
                <h3>CSS</h3>
                <p>Proficiente</p>
              </div>
              <div>
                <h3>Nextjs</h3>
              <p>Proficiente</p>
              </div>
              <div>
                <h3>React</h3>
                <p>Proficiente</p>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              <div>
                <h3>Angular</h3>
                <p>Intermediário</p>
              </div>
              <div>
                <h3>TypeScript</h3>
                <p>Proficiente</p>
              </div>
              <div>
                <h3>PHP</h3>
                <p>Intermediário</p>
              </div>
              <div>
                <h3>Laravel</h3>
                <p>Intermediário</p>
              </div>
            </div>
          </div>
          <div className='rounded-xl w-full border-[1px] border-slate-500 min-w-fit p-4'>
            <div className='pb-6 pt-2'>
              <h2 className='font-semibold text-slate-700 text-center text-2xl'>Desenvolvimento Backend</h2>
            </div>
            <div className='grid grid-cols-4 gap-4 mb-4'>
              <div className='text-left'>
                <h3>Node JS</h3>
                <p>Proficiente</p>
              </div>
              <div className='text-left'>
                <h3>PHP</h3>
                <p>Intermediário</p>
              </div>
              <div className='text-left'>
                <h3>Laravel</h3>
                <p>Intermediário</p>
              </div>
              <div className='text-left'>
                <h3>Git</h3>
                <p>Proficiente</p>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              <div className='text-left'>
                <h3>MySQL/PostgreSQL</h3>
                <p>Proficiente</p>
              </div>
              <div className='text-left'>
                <h3>Docker</h3>
                <p>Básico</p>
              </div>
              <div className='text-left'>
                <h3>Nest JS</h3>
                <p>Básico</p>
              </div>
              <div className='text-left'>
                <h3>Nest JS</h3>
                <p>Básico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col items-center justify-center'>
        <div id='projetos'>
          <p>conheça meus</p>
          <h2>PROJETOS</h2>
        </div>
        <div id='contato'>
          <p>entre em</p>
          <h2>CONTATO</h2>
        </div>      
      </div>
    </>    
  )
}
