import React from "react";
import Link from "next/link";
import styles from "./nav-bar.module.css";
import { useRouter } from "next/router";
import clsx from "clsx";

export const NavItem = ({ Icon, label, path }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <li
      className={clsx(styles.navItem, currentRoute === path && styles.selected)}
    >
      <Link href={path}>
        <Icon size={32} color="var(--surface-3)" />
        <span>{label}</span>
      </Link>
    </li>
  );
};
