'use client'

import { Button } from '@/components/Button/Button/Button'
import Image from 'next/image'

import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

export default function Home() {
  return (
      <main style={{ display: 'flex', flexDirection: 'column', margin: '48px 16px', justifyContent: 'space-around', gap: '40px', }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',  }}>
          <h1 style={{ fontSize: '16px', fontWeight: '600', }}>Nilton Rocha</h1>
          <h3 style={{ fontSize: '12px', }}>Desenvolvedor Web e Mobile</h3>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
          <a href="https://www.instagram.com/nilton_roc.ha/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/niltonrochadeveloper" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '50px' }}>
          <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center',  }}>
            <div>3</div>
            <div>Anos de Trabalho</div>
          </div>
          <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center',  }}>
            <div>+40</div>
            <div>Projetos Completos</div>
          </div>
          <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center',  }}>
            <div>+20</div>
            <div>Clientes Satisfeitos</div>
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', gap: '40px', }}>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end'}}>
            <Button>Download</Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', width: '50%', alignItems: 'center', gap: '15px'  }}>
            <div><a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a></div>
            <div><a href="" target="_blank" rel="noreferrer"><FaMailBulk /></a></div>
          </div>
        </div>
      </main>
  )
}
