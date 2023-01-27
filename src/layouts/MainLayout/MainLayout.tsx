import React from "react";
import { Outlet } from "react-router-dom";
// STYLES
import styles from "./mainLayout.module.scss";
// COMPONENTS
import Header from "@components/Header/Header";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      <main className={styles.MainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
