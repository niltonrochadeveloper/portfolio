"use client";

import { useEffect, useState } from "react";
import NavBar from "../Navbar";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      className={`w-full relative flex justify-between items-center lg:bg-background lg:pt-4 lg:pb-4 lg:gap-16 lg:px-24 px-4`}
    >
      <Link href="/">
        <h2 className="text-3xl lg:text-white text-black">
          <b>dev</b>Nilton
        </h2>
      </Link>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Header;
