import React from "react";
import Link from "next/link";
import styles from "./nav-bar.module.css";
import ToggleSwitch from "../toggle-switch/toggle-switch";

const Navbar = ({handleColorSchemeChange}) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <ToggleSwitch onChange={handleColorSchemeChange} />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
