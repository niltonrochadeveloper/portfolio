'use client'

import StyledComponentsRegistry from '@/lib/registry'
import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useThemeStore } from '@/store/Theme'
import Link from 'next/link'
import { Tailwind } from '@/components/Tailwind'
import LoginForm from '@/components/shared/Login'
import { useState } from 'react'
import useHomeHandler from '@/hooks/home'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400','500','600','700','800','900'] })

const metadata: Metadata = {
  title: 'Portfólio em Next',
  description: 'Meu portfólio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new QueryClient

  const [openModal, setOpenModal] = useState<boolean>(false)
  const { handleSign, authenticated } = useHomeHandler()
  
  const { theme } = useThemeStore()


  return (
    <QueryClientProvider client={client}>
      <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={`${poppins.className} justify-center flex`}>
        <StyledComponentsRegistry>
        <main className="container">
      <div className="bg-white rounded-full fixed flex justify-between flex-row container pt-16 pb-4">
        <h2 className="text-3xl"><b>dev</b>Nilton Rocha</h2>
        <ul className="inline-flex gap-12">
          <li className="text-2xl"><Link href="/#sobre">Sobre</Link></li>
          <li className="text-2xl"><Link href="/#experiencia">Experiência</Link></li>
          <li className="text-2xl"><Link href="/#blog">Blog</Link></li>
          <li className="text-2xl"><Link href="/#projetos">Projetos</Link></li>
          <li className="text-2xl"><Link href="/#contato">Contato</Link></li>
        </ul>
      </div>
      <div className="container">
        {children}
      </div>
      <div>
        <div>
          <p>footer</p>
        </div>
      </div>
      <Tailwind.Dialog open={openModal} setOpen={setOpenModal}>
        <LoginForm />
      </Tailwind.Dialog>
    </main>
        </StyledComponentsRegistry>        
      </body>
    </html>
    </QueryClientProvider>
  )
}
