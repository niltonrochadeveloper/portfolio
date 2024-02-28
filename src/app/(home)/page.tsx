'use client'

import Image from 'next/image'

import styles from './page.module.scss'
import { FaGithub, FaInstagram, FaLinkedinIn, FaBars } from 'react-icons/fa';
import { Tailwind } from '@/components/Tailwind';
import { useState } from 'react';
import LoginForm from '@/components/shared/Login';
import UseStore from '@/store';

export default function Home() {

  const { useThemeStore: { theme } } = UseStore()

  return (    
    <>
      <div id='sobre' className='h-screen'>
        <div className='w-full lg:flex lg:flex-row -mt-20 flex-col flex lg:flex-nowrap flex-wrap justify-center lg:gap-16 items-center h-screen'>
          <div className='flex justify-center'>
            <Image className='rounded-full' src="/images/header/foto.jpg" width={240} height={240} alt={'foto perfil'} />
          </div>
          <div>
            <p className='font-bold'>Olá,</p>
            <p>meu nome é <b>Nilton Rocha</b> e sou um</p>
            <h1>Desenvolvedor</h1>
            <p>Trabalho com aplicações WEB e MOBILE</p>
            <div className='flex justify-between gap-4'>
              <a className='text-white text-center bg-slate-400 w-48 rounded-full mt-4 h-12 flex items-center justify-center' download href="nilton_rocha_desenvolvedor.pdf">
                Currículo
              </a>
              <div className='border-slate-400 border-[1px] w-24 rounded-full mt-4 h-12 flex items-center justify-center'>
                <a className='text-slate-400 text-center' href="https://wa.me/11989186177?text=olá, ">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col items-center justify-center'>
        <div className='text-center pb-12'>
          <p>Explore minha</p>
          <h2 id='experiencia' className='text-3xl font-medium text-slate-700 pt-1'>Experiência</h2>
        </div>
        <div className='w-full grid lg:grid-cols-2 flex-row gap-4'>
          <div className='rounded-xl w-full border-[1px] border-slate-500 min-w-fit p-4'>
            <div className='pb-6 pt-2'>
              <h2 className='font-semibold text-slate-700 text-center text-2xl'>Desenvolvimento Frontend</h2>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4'>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>HTML</h3>
                <p>Proficiente</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>CSS</h3>
                <p>Proficiente</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Nextjs</h3>
              <p>Proficiente</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>React</h3>
                <p>Proficiente</p>
              </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Angular</h3>
                <p>Intermediário</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>TypeScript</h3>
                <p>Proficiente</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>PHP</h3>
                <p>Intermediário</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Laravel</h3>
                <p>Intermediário</p>
              </div>
            </div>
          </div>
          <div className='rounded-xl w-full border-[1px] border-slate-500 min-w-fit p-4'>
            <div className='pb-6 pt-2'>
              <h2 className='font-semibold text-slate-700 text-center text-2xl'>Desenvolvimento Backend</h2>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4'>
            <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Node JS</h3>
                <p>Proficiente</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>PHP</h3>
                <p>Intermediário</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Laravel</h3>
                <p>Intermediário</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Git</h3>
                <p>Proficiente</p>
              </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>SQL</h3>
                <p>intermediário</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Docker</h3>
                <p>Básico</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Nest JS</h3>
                <p>Básico</p>
              </div>
              <div className='lg:text-left text-center'>
                <h3 className='font-medium text-xl'>Java</h3>
                <p>Básico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col items-center justify-center py-16'>
        <div id='projetos' className='text-center pb-12'>
          <p>conheça meus</p>
          <h2 id='experiencia' className='text-3xl font-medium text-slate-700 pt-1'>Projetos</h2>
          <p className='py-4 font-semibold'>Aguarde ...</p>
          <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-12 gap-4'>
            <div className='h-60 w-60 bg-slate-500 rounded-2xl'></div>
            <div className='flex gap-8'>
              <div className='flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4'>
                <div className='flex-col justify-between'>
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
            <div className='h-60 w-60 bg-slate-500 rounded-2xl'></div>
            <div className='flex gap-8'>
              <div className='flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4'>
                <div className='flex-col justify-between'>
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
            <div className='h-60 w-60 bg-slate-500 rounded-2xl'></div>
            <div className='flex gap-8'>
              <div className='flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4'>
                <div className='flex-col justify-between'>
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
            <div className='h-60 w-60 bg-slate-500 rounded-2xl'></div>
            <div className='flex gap-8'>
              <div className='flex-col flex justify-center text-left items-start lg:gap-12 gap-4 lg:mb-0 mb-4'>
                <div className='flex-col justify-between'>
                  <h2>Site</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <p>infknfekm</p>
              </div>
            </div>
          </div>
        </div>
        <div id='contato'>
          <p>entre em</p>
          <h2>CONTATO</h2>
        </div>      
      </div>
    </>    
  )
}
