import {
  Brain,
  Briefcase,
  GithubLogo,
  HouseLine,
  IdentificationCard,
  ReadCvLogo,
  Student,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import ToggleSwitch from "../toggle-switch/toggle-switch";
import styles from "./nav-bar.module.css";

const Navbar = ({ handleColorSchemeChange }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <ToggleSwitch onChange={handleColorSchemeChange} />
        </li>
        <li>
          <HouseLine size={32} color="var(--surface-3)" />
          <Link href="/">Home</Link>
        </li>
        <li>
          <IdentificationCard size={32} color="var(--surface-3)" />
          <Link href="/about">About</Link>
        </li>
        <li>
          <Brain size={32} color="var(--surface-3)" />
          <Link href="/expertise">Technologies</Link>
        </li>
        <li>
          <ReadCvLogo size={32} color="var(--surface-3)" />
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Briefcase size={32} color="var(--surface-3)" />
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Student size={32} color="var(--surface-3)" />
          <Link href="/education">Education</Link>
        </li>
        <li>
          <GithubLogo size={32} color="var(--surface-3)" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
