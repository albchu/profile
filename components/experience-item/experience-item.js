import React, { useState } from "react";
import { ArrowUpRightFromSquareIcon } from "../arrow-up-right-from-square-icon";
import styles from "./experience-item.module.css";
import clsx from "clsx";
import { ChevronDownIcon } from "../chevron-down-icon";

export const ExperienceItem = ({
  logoPath,
  company,
  companyUrl,
  role,
  date,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={styles.container}
    >
      <div className={styles.header}>
        {logoPath && <img src={logoPath} />}
        <div className={styles.headerContents}>
          <div className={styles.titleBlock}>
            <div className={styles.company}>
              {companyUrl ? (
                <a href={companyUrl} className={styles.companyLink}>
                  {company}
                  <ArrowUpRightFromSquareIcon />
                </a>
              ) : (
                company
              )}
            </div>
            <div className={styles.role}>{role}</div>
          </div>
          <div className={styles.date}>{date}</div>
          <div
            className={clsx(
              styles.chevron,
              isExpanded && styles.chevronExpanded
            )}
          >
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <div
        className={clsx(styles.details, isExpanded && styles.detailsExpanded)}
      >
        {children}
        <div className={styles.detailsFooter} />
      </div>
    </div>
  );
};
