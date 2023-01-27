import React, { ReactNode } from "react";
// STYLES
import styles from "./mainLayout.module.scss";
// COMPONENTS
import Header from "@components/Header/Header";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      <main className={styles.MainContent}>{children}</main>
    </div>
  );
};

export default MainLayout;
