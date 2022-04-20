import React from "react";
import styles from "./parallax-container.module.css";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
import { ProfileContent } from "../profile-content";

export const ParallaxContainer = () => {
  const parallax1 = useParallax({
    scale: [1.3, 2],
    translateX: [0, -20],
    translateY: [0, -40],
  });
  const parallax2 = useParallax({
    scale: [1, 1.8],
    translateX: [0, 10],
    speed: 8,
  });

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <ProfileContent />
      </div>

      <div className={styles.parallaxBG}>
        <div className={styles.sky} />
        <div className={styles.mountainsUpper} ref={parallax1.ref} />
        <div className={styles.mountainsLower} ref={parallax2.ref} />
      </div>
    </div>
  );
};

export default () => {
  return (
    <ParallaxProvider>
      <ParallaxContainer />
    </ParallaxProvider>
  );
};
