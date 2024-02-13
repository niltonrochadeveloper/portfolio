'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './Navbar.module.scss'
import { FaGithub } from "react-icons/fa";
import { NavProps } from "./types";
import useAuthHandler from "@/hooks/auth";
import { HStack } from "@/components/Core";



const NavBar = ({nav}: {nav: NavProps[]}) => {

    const pathname = usePathname()

    const { auth: {authenticated, }, setSignIn, resetAuth } = useAuthHandler()

    return (
        <>
            {nav.map((item: any) => (
            <>
                {item.id !== 5 && <Link className={pathname === item.href ? styles.onFocus : styles.noFocus} href={item.href}>
                <item.icon className={styles.iconStyle} color={pathname === item.href ? '#2F9BF4' : '#969696'} />
                {item.name}
                </Link>}
                {item.id === 5 && 
                <button onClick={authenticated ? resetAuth : () => setSignIn(true)}>
                    <HStack space={4} className="items-center w-28 bg-slate-200 rounded-md p-2 text-center justify-center">
                    
                    <item.icon className={styles.iconStyle} color={pathname === item.href ? '#2F9BF4' : '#969696'} />
                    {authenticated ? 'Logout' : 'Login' }
                </HStack>
                </button>}
            </>
            ))}
        </>
    )
};

export default NavBar;