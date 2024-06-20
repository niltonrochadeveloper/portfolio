"use client";

import { useState } from "react";
import NavBar from "../Navbar";
import { Container, Link, LogoTitle } from "./styles";

const BlogHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Container>
      <Link href="/">
        <LogoTitle>
          <b>dev</b>Nilton
        </LogoTitle>
      </Link>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </Container>
  );
};

export default BlogHeader;
