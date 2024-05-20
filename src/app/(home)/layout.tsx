"use client";

import { Button } from "@/components/Core";
import { Footer, Header } from "@/components/shared";
import LoginForm from "@/components/shared/Login";
import useHomeHandler from "@/hooks/home";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { handleSign, authenticated } = useHomeHandler();

  return (
    <main className="container">
      <Header />
      {/* <Button onClick={() => setOpenModal(!openModal)} >Login</Button> */}
      {children}
      <Footer />
      <div className={`${!openModal && ' hidden'} absolute top-0 w-full h-full flex justify-center items-center z-100`}>
        <div onClick={() => setOpenModal(!openModal)} className={`bg-black/30 w-full h-full absolute z-101`} />
        <div className="max-w-md bg-white rounded-xl absolute flex w-full z-110">
          <div onClick={() => setOpenModal(!openModal)} className="absolute right-4 top-4 cursor-pointer"><p>Fechar</p></div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
