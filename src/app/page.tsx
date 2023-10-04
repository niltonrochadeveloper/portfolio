'use client'


import { Button, HStack, VStack, } from '@/components/Core';
import Image from 'next/image'

import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

export default function Home() {
  return (
      <main style={{ display: 'flex', flexDirection: 'column', padding: '16px', justifyContent: 'space-around', gap: '40px', }}>
        <HStack style={{ justifyContent: "flex-end" }}>
          <a href=''>Login</a>
        </HStack>
        <VStack space={32}>
          <Image alt='foto perfil' src='/images/header/foto.jpg' width={100} height={100} style={{ borderRadius: '100%' }} />
          <VStack>
            <h1 style={{ fontSize: '18px', fontWeight: '600', }}>Nilton Rocha</h1>
            <h3 style={{ fontSize: '12.5px', color: '#606060', fontWeight: '500' }}>Desenvolvedor Web e Mobile</h3>
          </VStack>
        </VStack>
        <HStack space={16}>
          <a href="https://www.instagram.com/nilton_roc.ha/" target="_blank" rel="noreferrer"><FaInstagram color="#202020" /></a>
          <a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noreferrer"><FaLinkedinIn color="#202020" /></a>
          <a href="https://github.com/niltonrochadeveloper" target="_blank" rel="noreferrer"><FaGithub color="#202020" /></a>
        </HStack>
        <HStack space={48}>
          <VStack>
            <h3 style={{ fontSize: '16px'}}>+3</h3>
            <div style={{ maxWidth: '120px', textAlign: 'center'}}>
              <h4 style={{ fontSize: '14px', color: '#606060', lineHeight: 1.4}}>Anos de Trabalho</h4>
            </div>
          </VStack>
          <VStack>
            <h3 style={{ fontSize: '16px'}}>+40</h3>
              <div style={{ maxWidth: '120px', textAlign: 'center'}}>
              <h4 style={{ fontSize: '14px', color: '#606060', lineHeight: 1.4}}>Projetos Completos</h4>
            </div>
          </VStack>
          <VStack>
            <h3 style={{ fontSize: '16px'}}>+20</h3>
              <div style={{ maxWidth: '120px', textAlign: 'center'}}>
              <h4 style={{ fontSize: '14px', color: '#606060', lineHeight: 1.4}}>Clientes Satisfeitos</h4>
            </div>
          </VStack>
        </HStack>
        <HStack space={48}>
          <div style={{ width: '35%', display: 'flex', justifyContent: 'flex-end'}}>
            <Button>Download</Button>
          </div>
          <HStack space={16} style={{ justifyContent: 'flex-start', alignItems: 'center', width: '25%' }} >
            <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="" target="_blank" rel="noreferrer"><FaMailBulk /></a>
          </HStack>
        </HStack>
      </main>
  )
}
