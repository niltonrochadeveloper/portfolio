import styles from "./skills.module.scss";

const cellPhone = () => {
  return (
    <div className="w-full">
      <div className="pb-6 pt-2">
        <h2 className="font-semibold text-slate-700 text-center text-2xl">
          Desenvolvimento Mobile
        </h2>
      </div>
      <div className={styles.phone}>
        <div className={styles.screen}>
          {/* Conteúdo da tela do celular */}
          <p>tete</p>
        </div>
        <div className={styles.button}></div>
        <div className={styles.speaker}></div>
      </div>
    </div>
  );
};

export default cellPhone;
