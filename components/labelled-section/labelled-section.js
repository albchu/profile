import React from "react";
import clsx from "clsx";
import styles from "./labelled-section.module.css";

export const LabelledSection = ({ title, children, hideBG, imgPath }) => {
  return (
    <section>
      <div className={styles.titleBlock}>
        <img className={styles.titleImg} src={imgPath} alt={imgPath} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={clsx(styles.sectionContents, hideBG || styles.sectionBG)}>
        {children}
      </div>
    </section>
  );
};
