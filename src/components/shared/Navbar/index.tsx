"use client";

import { usePathname } from "next/navigation";
import { NavProps } from "./types";
import { useThemeStore } from "@/store/Theme";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import {
  Container,
  FaBars,
  Article,
  BackDrop,
  Content,
  ContentList,
  FaWindowClose,
  List,
} from "./styles";
import { FaHome } from "react-icons/fa";

const NavBar: React.FC<NavProps> = ({ setShowMenu, showMenu }) => {
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
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <FaHome size={18} className="mt-1" />
          </Scroll>
        </List>
        <List>
          <Scroll
            activeClass="border-b border-white"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Scroll>
        </List>
        <List>
          <Scroll
            activeClass="border-b border-white"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Scroll>
        </List>
        <List>
          <Scroll
            activeClass="border-b border-white"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Experience
          </Scroll>
        </List>
        <List>
          <Scroll
            activeClass="border-b border-white"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Scroll>
        </List>
        <List>
          <Scroll
            activeClass="border-b border-white"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Scroll>
        </List>
        <List>
          <Link href="/blog" className="cursor-pointer">
            Blog
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

export default NavBar;
