"use client";

import { Button, Modal } from "@/components/Core";
import { BlogHeader, Footer, Header } from "@/components/shared";
import LoginForm from "@/components/shared/Login";
import useHomeHandler from "@/hooks/home";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <main>
      <BlogHeader />
      {/* <Button onClick={() => setOpenModal(!openModal)}>Login</Button> */}
      {children}
      <Footer />
      <Modal
        modalIsOpen={openModal}
        setModalIsOpen={() => setOpenModal(!openModal)}
      >
        <LoginForm />
      </Modal>
    </main>
  );
};

export default HomeLayout;
