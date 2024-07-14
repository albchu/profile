import React from "react";
import Link from "next/link";
import styles from "./nav-bar.module.css";

export const NavItem = ({ Icon, label, path }) => {
  return (
    <li className={styles.navItem}>
      <Link href={path}>
        <Icon size={32} color="var(--surface-3)" />
        <span>{label}</span>
      </Link>
    </li>
  );
};
