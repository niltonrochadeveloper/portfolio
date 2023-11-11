import StyledComponentsRegistry from '@/lib/registry'
import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { HStack, Title } from '@/components/Core'


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400','500','600','700','800','900'] })

import { Menu, NavBar } from '@/components/shared'

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
      <body suppressHydrationWarning={true} className={poppins.className}>
        <Menu mobile />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div className='reverse'>
          <Title fontWeight={500}>Nilton Rocha</Title>
          <HStack mobile={false} space={16}>
            <NavBar />
          </HStack>
        </div>
      </body>
    </html>
  )
}
