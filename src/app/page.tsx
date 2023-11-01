'use client'


import { Button, HStack, SubTitle, Title, VStack, } from '@/components/Core';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



export default function Home() {

  const [ showModal, setShowModal ] = useState(false)

  const Modal = ({isOpen}: {isOpen: boolean}) => {

    
  }

  return (
      <main style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <HStack space={16} style={{flexWrap: 'wrap', justifyContent: 'center'}}>
          <VStack space={32} style={{ alignItems: 'center' }}>
            <Image alt='foto perfil' src='/images/header/foto.jpg' width={100} height={100} style={{ borderRadius: '100%' }} />
            <VStack>
              <Title fontWeight='600' center >Nilton Rocha</Title>
              <SubTitle>Desenvolvedor Web e Mobile</SubTitle>
            </VStack>
          </VStack>
          <VStack style={{ height: '100%', justifyContent: 'flex-end'}}>
            <p style={{fontWeight: '500'}}>Tecnologias</p>
            <HStack space={32}>
              <p>Nodejs | React | Nextjs | Angular | PHP</p>
            </HStack>
          </VStack>
        </HStack>
      </main>
  )
}
