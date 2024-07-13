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
          layout="fill" // Use fill layout to make it easier to position
          objectFit="cover" // Cover the entire container
          quality={75} // Optional: Adjust the quality of the optimized image
          priority // Optional: Load this image with high priority
        />
      </div>
    </div>
  );
};