import React from "react";
// STYLES
import styles from "./header.module.scss";
// COMPONENTS
import Navigation from "./components/Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
};

export default Header;
