import React from "react";
import styles from "./hero-image.module.css";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className={styles.heroImageWrapper}>
      <div className={styles.heroImageInner}>
        <Image
          src="/real-face.jpg" // Path to your image in the public directory
          alt="mee"
          className={styles.heroImage}
          width={350}
          height={350}
          quality={75}
          priority
        />
      </div>
    </div>
  );
};
