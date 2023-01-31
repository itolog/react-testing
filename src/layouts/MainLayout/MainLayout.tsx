import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
// CONSTANTS
import appTest from "../../shared/constants/appTest";
// STYLES
import styles from "./mainLayout.module.scss";
// COMPONENTS
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AppNprogress from "../../shared/progress/AppNprogress/AppNprogress";

interface MainLayoutProps {
  withFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ withFooter = true }) => {
  const navigation = useNavigation();

  return (
    <div data-testid={appTest.MAIN_LAYOUT_TEST} className={styles.MainLayout}>
      <AppNprogress isAnimating={navigation.state === "loading"} />
      <Header />
      <main className={styles.MainContent}>
        <Outlet />
      </main>
      {withFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
