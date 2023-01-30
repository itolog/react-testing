import React from "react";
import { NavLink } from "react-router-dom";
// DATA
import navLinks from "./data/navLinks";
// STYLES
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.NavigationContainer}>
      <ul className={styles.Navigation}>
        {navLinks.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  return isActive ? styles.NavigationItemActive : styles.NavigationItem;
                }}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
