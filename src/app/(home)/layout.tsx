import { Menu, NavBar } from "@/components/shared"
import { Metadata } from "next"
import styles from './page.module.scss'
import { HStack, Title } from "@/components/Core"

export const metadata: Metadata = {
  title: 'Portfólio em Next',
  description: 'Meu portfólio pessoal',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <main className={styles.container}>
        <Menu mobile />
          {children}
        <div className='reverse'>
          <Title fontWeight={500}>Nilton Rocha</Title>
          <HStack mobile={false} space={16}>
            <NavBar />
          </HStack>
        </div>
      </main>
      </>
  )
}
