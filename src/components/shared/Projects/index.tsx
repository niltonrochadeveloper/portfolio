import Image from "next/image";
import { AiOutlineExport } from "react-icons/ai";
import { ProjectsProps, SourceProps } from "./types";

const Projects = ({ source }: ProjectsProps) => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="text-center pb-12">
        <p>Conheça meus</p>
        <h2 id="projetos" className="text-3xl font-medium text-slate-700 pt-1">
          Projetos
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-left gap-4 px-4">
        {source.map((item: SourceProps, index) => (
          <a
            key={index}
            target="_blank"
            className="border rounded-t-xl overflow-hidden"
            href={item.url}
          >
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Image
                  src={item.image[1]}
                  width={900}
                  height={900}
                  alt={`image_${item.title}`}
                  className="relative z-0 border-b"
                />
                <div className="-bottom-4 w-full absolute flex gap-1 justify-center items-center">
                  <small className="bg-black text-xs text-white h-[20px] px-4 rounded-xl justify-center flex items-center">
                    {item.category[1]}
                  </small>
                  {item.category[2] && (
                    <small className="bg-black text-xs text-white h-[20px] px-4 rounded-xl justify-center flex items-center">
                      {item.category[2]}
                    </small>
                  )}
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h2 className="font-medium">{item.title}</h2>
                <p></p>
                <div className="flex flex-col">
                  <small className="font-semibold">Tecnologias usadas:</small>
                  <small className="font-medium">{item.tecnologies}</small>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-2 pr-2 gap-1 hover:border-b">
              <small>Saiba mais</small>
              <AiOutlineExport />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
