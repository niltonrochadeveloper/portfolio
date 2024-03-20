'use client'

import { Metadata } from "next"
import { HStack, Title, VStack } from "@/components/Core"
import { useState } from "react"
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
      <LoginForm />
    </main>
  )
}

export default DashBoardLayout;
