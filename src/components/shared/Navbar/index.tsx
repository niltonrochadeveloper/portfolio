'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './Navbar.module.scss'
import { NavProps } from "./types";
import { useThemeStore } from "@/store/Theme";

const NavBar = ({nav}: {nav: NavProps[]}) => {

    const pathname = usePathname()

    const { theme } = useThemeStore()

    return (
        <div className="flex-row flex items-center justify-center gap-12">
            {nav.map((item: NavProps) => (
                <div key={item.id}>
                    <Link  className={`${theme === 'light' ? 'text-gray-800' : 'text-white'}`} href={item.href}>
                    <div className="flex-row flex items-center gap-1 relative">
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                        {pathname === item.href && <span className={`absolute ${theme === 'light' ? 'bg-gray-800' : 'bg-white'} rounded-full h-1 w-8`}></span>}
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default NavBar;