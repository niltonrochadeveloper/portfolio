"use client";

import { useEffect, useState } from "react";
import NavBar from "../Navbar";
import { Header, Link, LogoTitle } from "./styles";

const BlogHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Header
    // className={`w-full fixed z-50 flex justify-between items-center lg:bg-background lg:pt-4 lg:pb-4 lg:gap-16 lg:px-24 px-4`}
    >
      <Link href="/">
        <LogoTitle
        // className="text-3xl lg:text-white text-black"
        >
          <b>dev</b>Nilton
        </LogoTitle>
      </Link>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </Header>
  );
};

export default BlogHeader;
