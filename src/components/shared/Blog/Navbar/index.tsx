"use client";

import { usePathname } from "next/navigation";
import { NavProps } from "./types";
import { useThemeStore } from "@/store/Theme";
import { FaHome } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import {
  BackDrop,
  Container,
  ContentList,
  FaBars,
  List,
  FaWindowClose,
} from "./styles";

const BlogNavBar: React.FC<NavProps> = ({ setShowMenu, showMenu }) => {
  const pathname = usePathname();
  const { theme } = useThemeStore();

  return (
    <Container>
      <FaBars $showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <ContentList $showMenu={showMenu}>
        <FaWindowClose
          $showMenu={showMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
        <List>
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
        </List>
        <List>
          <Link href="/blog/contact" className="cursor-pointer">
            Contact
          </Link>
        </List>
      </ContentList>
      <BackDrop
        $showMenu={showMenu}
        onClick={() => setShowMenu(false)}
      ></BackDrop>
    </Container>
  );
};

export default BlogNavBar;
