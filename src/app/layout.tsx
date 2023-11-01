import StyledComponentsRegistry from '@/lib/registry'
import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { HStack, Title } from '@/components/Core'
import Link from 'next/link'


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400','500','600','700','800','900'] })

import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Portfólio em Next',
  description: 'Meu portfólio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={poppins.className}><StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div className='reverse'>
          <Title fontWeight={500}>Nilton Rocha</Title>
          <HStack className={'desktop'} space={16}>
            <Link href={'/'}><p>Home</p></Link>
            <Link href={'/'}><p>Sobre</p></Link>
            <Link href={'/'}><p>Portfólio</p></Link>
            <Link href={'/'}><p>Contato</p></Link>
          </HStack>
        </div>
        <HStack space={16} className={'center'} style={{ position: 'absolute', right: 16, bottom: 12 }}>
          <a href="https://www.instagram.com/nilton_roc.ha/" target="_blank" rel="noreferrer"><FaInstagram color="#202020" /></a>
          <a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noreferrer"><FaLinkedinIn color="#202020" /></a>
          <a href="https://github.com/niltonrochadeveloper" target="_blank" rel="noreferrer"><FaGithub color="#202020" /></a>
        </HStack>
      </body>
    </html>
  )
}
