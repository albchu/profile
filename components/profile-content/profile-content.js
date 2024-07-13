import React, {useState} from "react";
import styles from "./profile-content.module.css";
import AboutMe from "../about-me";
import Expertise from "../expertise";
import Portfolio from "../portfolio";
import Experience from "../experience";
import Education from "../education";
import { HeroBanner } from "../hero-banner";
import ToggleSwitch from "../toggle-switch/toggle-switch";

export const ProfileContent = ({ className }) => {
  const [isChoco, setIsChoco] = useState(false);
  const handleColorSchemeChange = (isDarkMode) => {
    setIsChoco(isDarkMode);
  }

  return (
    <div className={styles.container} color-scheme={isChoco? "choco": "grape"}>
      <ToggleSwitch onChange={handleColorSchemeChange}/>
      <HeroBanner />
      <h1>Hey this is now a work in progress!</h1>
      {/* <div className={styles.content}>
        <AboutMe />

        <Expertise />

        <Portfolio />

        <Experience />

        <Education />
      </div> 

       <div className={styles.footer}>
        <img src="/pineapple.png" />
        <p>You've made it to the end.</p>
        <p>Thanks for visiting!</p>
      </div> */}
    </div>
  );
};
