"use client";

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
      {children}
      <Footer />
      <LoginForm />
    </main>
  );
};

export default HomeLayout;
