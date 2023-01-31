import React from "react";
import { Outlet } from "react-router-dom";
// CONSTANTS
import appTest from "../../shared/constants/appTest";
// STYLES
import styles from "./mainLayout.module.scss";
// COMPONENTS
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface MainLayoutProps {
  withFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ withFooter = true }) => {
  return (
    <div data-testid={appTest.MAIN_LAYOUT_TEST} className={styles.MainLayout}>
      <Header />
      <main className={styles.MainContent}>
        <Outlet />
      </main>
      {withFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
