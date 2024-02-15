'use client'

import StyledComponentsRegistry from '@/lib/registry'
import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Tailwind } from '@/components/Tailwind'
import LoginForm from '@/components/shared/Login'
import { QueryClient, QueryClientProvider } from 'react-query'
import { usePathname, } from 'next/navigation'
import { useMiddleware } from '@/hooks/middleware'
import { useRouter } from 'next/navigation'

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
  const pathname = usePathname()
  const { isSign } = useMiddleware({pathname})

  useEffect(() => {
    isSign()
  }, [isSign])

  return (
    <QueryClientProvider client={client}>
      <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={`${poppins.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>        
      </body>
    </html>
    </QueryClientProvider>
  )
}
