"use client";

import { useEffect, useState } from "react";
import NavBar from "../Navbar";
import Link from "next/link";

const BlogHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      className={`w-full fixed z-50 flex justify-between items-center lg:bg-background lg:pt-4 lg:pb-4 lg:gap-16 lg:px-24 px-4`}
    >
      <Link href="/" className="cursor-pointer">
        <h2 className="text-3xl lg:text-white text-black">
          <b>dev</b>Nilton
        </h2>
      </Link>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default BlogHeader;
