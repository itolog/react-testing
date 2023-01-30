import React from "react";
// STYLES
import styles from "./homePage.module.scss";

const HomePage = () => {
  const handleFetchData = () => {
    console.log("FETCH");
  };

  return (
    <div className={styles.HomePage}>
      <h1>HomePage</h1>
      <aside>
        <button onClick={handleFetchData}>fetch data</button>
      </aside>
    </div>
  );
};

export default HomePage;
