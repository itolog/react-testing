import React from "react";
// DATA
import navLinks from "./components/Navigation/data/navLinks";
// STYLES
import styles from "./header.module.scss";
// COMPONENTS
import Navigation from "./components/Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Navigation items={navLinks} />
    </header>
  );
};

export default Header;
