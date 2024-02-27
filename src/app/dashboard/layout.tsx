'use client'

import { Metadata } from "next"
import { HStack, Title, VStack } from "@/components/Core"
import { useState } from "react"
import { Tailwind } from "@/components/Tailwind"
import LoginForm from "@/components/shared/Login"

interface HomeProps {
  children: React.ReactNode
}

const DashBoardLayout = ({ children }: HomeProps) => {

  const [openModal, setOpenModal] = useState<boolean>(true)

  return (
    <main>
      <VStack space={16} >
        {children}
      </VStack>
      <Tailwind.Dialog open={openModal} setOpen={setOpenModal}>
        <LoginForm />
      </Tailwind.Dialog>
    </main>
  )
}

export default DashBoardLayout;
