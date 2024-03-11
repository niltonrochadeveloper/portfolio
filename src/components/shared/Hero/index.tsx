import { SubTitle, Title } from "@/components/Core";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="sobre"
      className="container h-screen flex justify-center items-center lg:-mt-20 lg:px-24 px-4"
    >
      <div className="flex lg:gap-40 items-center justify-center gap-4 lg:flex-row flex-col">
        <div className="flex flex-col ">
          <div className="flex justify-center pb-2">
            <Image
              className="rounded-full"
              src="/images/header/foto.jpg"
              width={120}
              height={120}
              alt={"foto perfil"}
            />
          </div>
          <div>
            <Title center fontSize={24} fontWeight="600">
              Nilton Rocha
            </Title>
            <SubTitle center className="text-gray-500">
              Desenvolvedor Web e Mobile
            </SubTitle>
            <div className="py-4">
              <SubTitle center className="text-gray-500">
                TYPESCRIPT | REACT NATIVE | FLUTTER | REACT
                <br />
                NEXTJS | NODEJS | ANGULAR | PHP | LARAVEL
              </SubTitle>
            </div>
          </div>
          <div className="flex justify-center gap-4 py-4">
            <a
              target="_blank"
              href="https://www.instagram.com/nilton.rocha_tito/"
            >
              <FaInstagram className="text-lg hover:text-primary" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/devnilton/">
              <FaLinkedinIn className="text-lg hover:text-primary" />
            </a>
            <a target="_blank" href="https://github.com/niltonrochadeveloper">
              <FaGithub className="text-lg hover:text-primary" />
            </a>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-around text-center gap-12">
              <div className="max-w-xs">
                <h2 className="font-semibold">3</h2>
                <p className="text-gray-500 font-medium">Anos de</p>
                <p className="text-gray-500 font-medium">trabalho</p>
              </div>
              <div className="max-w-xs">
                <h2 className="font-semibold">+50</h2>
                <p className="text-gray-500 font-medium">Projetos</p>
                <p className="text-gray-500 font-medium">realizados</p>
              </div>
              <div className="max-w-xs">
                <h2 className="font-semibold">+15</h2>
                <p className="text-gray-500 font-medium">Clientes</p>
                <p className="text-gray-500 font-medium">satisfeitos</p>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <a
                className="text-white text-center hover:border-primary hover:bg-transparent hover:text-primary hover:border bg-primary w-48 rounded-2xl mt-4 h-12 flex items-center justify-center"
                download
                href="nilton_rocha_desenvolvedor.pdf"
              >
                Download CV
              </a>
              <div className="bg-gray-100 w-24 rounded-2xl mt-4 h-12 flex items-center justify-center">
                <a
                  className="text-gray-500 text-center"
                  href="https://wa.me/11989186177?text=olá, "
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
