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
import { NavItem } from "./nav-item";

const Navbar = ({ handleColorSchemeChange }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <ToggleSwitch onChange={handleColorSchemeChange} />
        </li>
        <NavItem Icon={HouseLine} label="Home" path="/" />
        <NavItem Icon={IdentificationCard} label="About" path="/about" />
        <NavItem Icon={Brain} label="Technologies" path="/expertise" />
        <NavItem Icon={ReadCvLogo} label="Experience" path="/experience" />
        <NavItem Icon={Briefcase} label="Portfolio" path="/portfolio" />
        <NavItem Icon={Student} label="Education" path="/education" />
        <li>
          <GithubLogo size={32} color="var(--surface-3)" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
