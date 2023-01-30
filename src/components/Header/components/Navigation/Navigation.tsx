import React from "react";
import { NavLink } from "react-router-dom";
// TYPES
import { NavLinks } from "./types";
// STYLES
import styles from "./navigation.module.scss";

interface NavigationProps {
  items?: NavLinks[];
}

const Navigation: React.FC<NavigationProps> = ({ items = [] }) => {
  return (
    <nav className={styles.NavigationContainer}>
      <ul className={styles.Navigation}>
        {items.map((item) => {
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
