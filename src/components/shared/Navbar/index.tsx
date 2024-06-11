"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import { NavProps } from "./types";
import { useThemeStore } from "@/store/Theme";
import { useState } from "react";
import { Button } from "@/components/Core";
import { FaBars, FaWindowClose } from "react-icons/fa";
import path from "path";

const NavBar: React.FC<NavProps> = ({ setShowMenu, showMenu }) => {
  const pathname = usePathname();
  const { theme } = useThemeStore();

  return (
    <div>
      {!showMenu && (
        <FaBars
          className="lg:hidden text-lg"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}
      <ul
        className={`${
          !showMenu
            ? "hidden"
            : "fixed h-full top-0 left-0 z-50 bg-white pl-8 gap-4 p-28 lg:py-0 flex-col flex lg:flex-row pr-12"
        } lg:bg-transparent lg:w-full lg:h-full lg:pl-0 lg:pr-0 lg:relative lg:flex lg:gap-12`}
      >
        {showMenu && (
          <FaWindowClose
            className="lg:hidden text-lg absolute top-8 right-4"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        <li
          className={`text-lg text-white hover:border-b hover:border-white ${
            pathname === "/about"
              ? "border-b border-white"
              : "border-b border-transparent"
          }`}
        >
          <Link href="/about">Sobre</Link>
        </li>
        <li
          className={`text-lg text-white hover:border-b hover:border-white ${
            pathname === "/skills"
              ? "border-b border-white"
              : "border-b border-transparent"
          }`}
        >
          <Link href="/skills">Experiência</Link>
        </li>
        <li
          className={`text-lg text-white hover:border-b hover:border-white ${
            pathname === "/blog"
              ? "border-b border-white"
              : "border-b border-transparent"
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`text-lg text-white hover:border-b hover:border-white ${
            pathname === "/portfolio"
              ? "border-b border-white"
              : "border-b border-transparent"
          }`}
        >
          <Link href="/portfolio">Portfólio</Link>
        </li>
        <li
          className={`text-lg text-white hover:border-b hover:border-white ${
            pathname === "/contact"
              ? "border-b border-white"
              : "border-b border-transparent"
          }`}
        >
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="lg:hidden z-10 w-full h-full top-0 left-0 fixed bg-black opacity-30"
        ></div>
      )}
    </div>
  );
};

export default NavBar;
