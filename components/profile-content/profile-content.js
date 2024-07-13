import React from "react";
import styles from "./profile-content.module.css";
import AboutMe from "../about-me";
import Expertise from "../expertise";
import Portfolio from "../portfolio";
import Experience from "../experience";
import Education from "../education";
import { HeroBanner } from "../hero-banner";

export const ProfileContent = ({ className }) => {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <h1>Hey this is now a work in progress!</h1>
      {/* <div className={styles.content}>
        <AboutMe />

        <Expertise />

        <Portfolio />

        <Experience />

        <Education />
      </div> */}

      {/* <div className={styles.footer}>
        <img src="/pineapple.png" />
        <p>You've made it to the end.</p>
        <p>Thanks for visiting!</p>
      </div> */}
    </div>
  );
};
