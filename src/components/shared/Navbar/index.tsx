'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './Navbar.module.scss'
import { FaGithub } from "react-icons/fa";

import { IoHomeOutline, IoMailOutline, IoCodeSlashOutline, IoMedalOutline } from "react-icons/io5";

const NavBar = () => {

    const pathname = usePathname()

    return (
        <>
            <Link className={pathname === '/' ? styles.onFocus : styles.noFocus} href={'/'}>
                <IoHomeOutline className={styles.iconStyle} color={pathname === '/' ? '#2F9BF4' : '#969696'} />
                Home
                </Link>
            <Link className={pathname === '/sobre/' ? styles.onFocus : styles.noFocus} href={'/sobre'}><IoMedalOutline className={styles.iconStyle} color={pathname === '/sobre/' ? '#2F9BF4' : '#969696'} />Sobre</Link>
            <Link className={pathname === '/portfolio/' ? styles.onFocus : styles.noFocus} href={'/portfolio'}><IoCodeSlashOutline className={styles.iconStyle} color={pathname === '/portfolio/' ? '#2F9BF4' : '#969696'} />Portfólio</Link>
            <Link className={pathname === '/contato/' ? styles.onFocus : styles.noFocus} href={'/contato'}><IoMailOutline className={styles.iconStyle} color={pathname === '/contato/' ? '#2F9BF4' : '#969696'} />Contato</Link>
        </>
    )
};

export default NavBar;