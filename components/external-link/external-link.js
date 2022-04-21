import React from "react";
import { ArrowUpRightFromSquareIcon } from "../arrow-up-right-from-square-icon";
import styles from "./external-link.module.css";

export const ExternalLink = ({ displayName, href }) => {
  return (
    <a href={href} className={styles.link}>
      {displayName}
      <ArrowUpRightFromSquareIcon />
    </a>
  );
};
