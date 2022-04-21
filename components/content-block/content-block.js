import React from "react";
import clsx from "clsx";
import styles from "./content-block.module.css";

export const ContentBlock = ({
  className,
  title,
  links = [],
  description,
  imgPath,
}) => {
  return (
    <div className={clsx(className, styles.container)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.secondaryContent}>
        {imgPath ? (
          <img className={styles.img} src={imgPath} />
        ) : (
          <div className={styles.links}>
            {links.map(({ displayName, href }) => (
              <a href={href}>{displayName}</a>
            ))}
          </div>
        )}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
