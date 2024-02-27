'use client'

import { Header } from "@/components/shared"
import { Metadata } from "next"
import { HStack, Title, VStack } from "@/components/Core"
import useHomeHandler from "@/hooks/home"
import { Tailwind } from "@/components/Tailwind"
import LoginForm from "@/components/shared/Login"
import { useState } from "react"


interface HomeProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { handleSign, authenticated } = useHomeHandler()

  return (
    <main className="container relative">
      <VStack space={16} >
        <Header.HeaderWebsite className="absolute top 0" open={openModal} setOpen={setOpenModal} />
        {children}
      </VStack>
      <Tailwind.Dialog open={openModal} setOpen={setOpenModal}>
        <LoginForm />
      </Tailwind.Dialog>
    </main>
  )
}

export default HomeLayout;
