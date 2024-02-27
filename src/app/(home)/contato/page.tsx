'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



export default function Contato() {

  const [ showModal, setShowModal ] = useState(false)

  const Modal = ({isOpen}: {isOpen: boolean}) => {

    
  }

  return (
    <div>
      <p>Contato</p>
    </div>
)
}
