import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400','500','600','700','800','900'] })

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
      <body className={poppins.className}><StyledComponentsRegistry>{children}</StyledComponentsRegistry></body>
    </html>
  )
}
