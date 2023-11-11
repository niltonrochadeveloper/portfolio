
import { Button, HSpace, HStack, SubTitle, Title, VSpace, VStack, } from '@/components/Core';
import Image from 'next/image'

import styles from './page.module.scss'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {

  return (
      <main className={styles.container}>
        <div className={styles.reverseW}>
          <VStack space={32} className={styles.alignCenter}>
          <Image priority alt='foto perfil' src='/images/header/foto.jpg' width={100} height={100} style={{ borderRadius: '100%' }} />
            <VStack space={0} className={styles.textAlignCenter} classContainer={styles.textAlignCenter}>
              <Title fontWeight='600' center >Nilton Rocha</Title>
              <SubTitle style={{color: '#969696', fontWeight: '500'}}>Desenvolvedor Web e Mobile</SubTitle>
              <VSpace height={28} />
              <HStack space={16} className={styles.iconsCenter}>
                <a href="https://www.instagram.com/nilton_roc.ha/" target="_blank" rel="noreferrer"><FaInstagram color="#202020" /></a>
                <a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noreferrer"><FaLinkedinIn color="#202020" /></a>
                <a href="https://github.com/niltonrochadeveloper" target="_blank" rel="noreferrer"><FaGithub color="#202020" /></a>
              </HStack>
              <VSpace mobile height={24} />
            </VStack>
          </VStack>
          <HSpace mobile={false} width={120} />
          <VStack space={16} className={styles.textAlignLeft}>
            <VStack space={0}>
              <p style={{fontWeight: '500'}}>Tecnologias</p>
              <HStack space={32}>
                <p style={{ color: '#969696'}}>Nodejs | React | Nextjs | Angular | PHP</p>
              </HStack>
            </VStack>
            <a href={'nilton_rocha_desenvolvedor.pdf'} download style={{ width: '100%',}}>
              <Button><FaGithub style={{color: '#fff', fontSize: '20px'}} />Baixar CV</Button>
            </a>
          </VStack>
        </div>
      </main>
  )
}
