'use client'

import Image from 'next/image'

import styles from './page.module.scss'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavBar } from '@/components/shared';
import { Tailwind } from '@/components/Tailwind';
import { useState } from 'react';
import LoginForm from '@/components/shared/Login';
import UseStore from '@/store';

export default function Home() {

  const { useThemeStore: { theme } } = UseStore()

  const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]

  return (    
    <>
      <div className={`container flex justify-around items-center h-screen ${theme === 'light' ? 'bg-white' : 'bg-slate-500'} pt-20`}>
        <div>
          
        </div>
        <div>
          <h1 className={`text-4xl max-w-xl flex-shrink font-bold tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'} sm:text-6xl`}>
            Tornando a visão em Realidade com Código e Design.
          </h1>
          <p className={`mt-4 text-xl ${theme === 'light' ? 'text-gray-500' : 'text-white'}`}>
            <span className="max-w-lg">This year, our new summer collection will <br /> shelter you from the harsh elements of a <br /> world that does not care you live or die.</span>
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
