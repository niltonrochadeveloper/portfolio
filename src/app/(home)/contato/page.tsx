'use client'


import { Button, HStack, SubTitle, Title, VStack, } from '@/components/Core';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



export default function Contato() {

  const [ showModal, setShowModal ] = useState(false)

  const Modal = ({isOpen}: {isOpen: boolean}) => {

    
  }

  return (
      <main style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <p>Contato</p>
        </div>
      </main>
  )
}
