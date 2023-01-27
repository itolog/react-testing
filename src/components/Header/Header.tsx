import React from "react";
// STYLES
import styles from "./header.module.scss";
// COMPONENTS
import Navigation from "@components/Header/components/Navigation/Navigation";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Navigation />
    </div>
  );
};

export default Header;
