import React from "react";
import clsx from "clsx";
import styles from "./labelled-section.module.css";

export const LabelledSection = ({ title, children, hideBG }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.sectionContents, hideBG || styles.sectionBG)}>
        {children}
      </div>
    </section>
  );
};
