"use client";

import { useEffect, useState } from "react";
import NavBar from "../Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      className={`container relative flex justify-between pt-6 items-center lg:bg-transparent lg:pt-16 lg:pb-4 lg:gap-16 lg:px-24 px-4`}
    >
      <h2 className="text-3xl">
        <b className="text-primary">dev</b>Nilton
      </h2>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Header;
