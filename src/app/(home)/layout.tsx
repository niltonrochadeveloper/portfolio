'use client'

import { Header, Menu, NavBar } from "@/components/shared"
import { Metadata } from "next"
import { HStack, Title, VStack } from "@/components/Core"
import useHomeHandler from "@/hooks/home"


interface HomeProps {
  children: React.ReactNode
}

// export const metadata: Metadata = {
//   title: 'Portfólio em Next',
//   description: 'Meu portfólio pessoal',
// }

const HomeLayout = ({ children }: HomeProps) => {

  const { handleSign, authenticated } = useHomeHandler()
  
  console.log('auth', authenticated)

  return (
    <main>
      <VStack space={16} >
        <Header />
        {children}
      </VStack>
    </main>
  )
}

export default HomeLayout;
