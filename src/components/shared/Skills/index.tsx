import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="text-center pb-12">
        <p>Conheça meus</p>
        <h2
          id="experiencia"
          className="text-3xl font-medium text-slate-700 pt-1"
        >
          Skills
        </h2>
      </div>
      <div className="w-full grid lg:grid-cols-2 flex-row gap-4">
        <div className="rounded-xl w-full border-[1px] border-slate-500 min-w-fit p-4">
          <div className="pb-6 pt-2">
            <h2 className="font-semibold text-slate-700 text-center text-2xl">
              Desenvolvimento Frontend
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">HTML</h3>
              <p>Proficiente</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">CSS</h3>
              <p>Proficiente</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Nextjs</h3>
              <p>Proficiente</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">React</h3>
              <p>Proficiente</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Angular</h3>
              <p>Intermediário</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">TypeScript</h3>
              <p>Proficiente</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">PHP</h3>
              <p>Intermediário</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Laravel</h3>
              <p>Intermediário</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl w-full border-[1px] border-slate-500 min-w-fit p-4">
          <div className="pb-6 pt-2">
            <h2 className="font-semibold text-slate-700 text-center text-2xl">
              Desenvolvimento Backend
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Node JS</h3>
              <p>Proficiente</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">PHP</h3>
              <p>Intermediário</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Laravel</h3>
              <p>Intermediário</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Git</h3>
              <p>Proficiente</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">SQL</h3>
              <p>intermediário</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Docker</h3>
              <p>Básico</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Nest JS</h3>
              <p>Básico</p>
            </div>
            <div className="lg:text-left text-center">
              <h3 className="font-medium text-xl">Java</h3>
              <p>Básico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
