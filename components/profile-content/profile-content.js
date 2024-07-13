import React from "react";
import { HeroBanner } from "../hero-banner";
import styles from "./profile-content.module.css";

export const ProfileContent = ({ className }) => {

  return (
    <div className={styles.container}>
      {/* <ToggleSwitch onChange={handleColorSchemeChange}/> */}
      <HeroBanner />
      <h1>Hey this is now a work in progress!</h1>
    </div>
  );
};
