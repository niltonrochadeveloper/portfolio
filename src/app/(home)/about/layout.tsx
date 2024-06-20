import styles from "./about.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dev Nilton Rocha",
  description: "Meu portfólio pessoal",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
