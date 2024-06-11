"use client";

import { usePathname } from "next/navigation";
import { NavProps } from "./types";
import { useThemeStore } from "@/store/Theme";
import { FaBars, FaHome, FaWindowClose } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

const BlogNavBar: React.FC<NavProps> = ({ setShowMenu, showMenu }) => {
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
        <li className="text-lg text-white hover:border-b hover:border-white">
          <Scroll
            activeClass="border-b border-white"
            to="home-blog"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <FaHome size={18} className="mt-1" />
          </Scroll>
        </li>
        <li className="text-lg text-white hover:border-b hover:border-white">
          <Link href="/blog/contact" className="cursor-pointer">
            Contact
          </Link>
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

export default BlogNavBar;
