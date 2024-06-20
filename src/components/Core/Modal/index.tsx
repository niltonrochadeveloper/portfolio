import React from "react";
import { ModalProps } from "./types";


const Modal: React.FC<ModalProps> = ({children, modalIsOpen, setModalIsOpen, screen = "full"}) => {


    return (
        <div className={`${!modalIsOpen && ' hidden'} absolute top-0 w-full h-full flex justify-center items-center z-100`}>
        <div onClick={() => setModalIsOpen(!modalIsOpen)} className={`bg-black/30 w-full h-full absolute z-101`} />
        <div className="max-w-md bg-white rounded-xl absolute flex w-full z-110">
          <div onClick={() => setModalIsOpen(!modalIsOpen)} className="absolute right-4 top-4 cursor-pointer"><p>Fechar</p></div>
          {children}
        </div>
      </div>
    )
};

export default Modal;