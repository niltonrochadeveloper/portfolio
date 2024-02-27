'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';



export default function Sobre() {

  const [ showModal, setShowModal ] = useState(false)

  const Modal = ({isOpen}: {isOpen: boolean}) => {

    
  }

  return (
      <div>
        <p>Sobre</p>
      </div>
  )
}
