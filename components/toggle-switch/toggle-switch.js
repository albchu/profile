import React, { useState } from "react";
import clsx from "clsx";
import styles from "./toggle-switch.module.css"; // Make sure to create this CSS file

const ToggleSwitch = ({ onChange }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
    onChange(!isToggled);
  };

  return (
    <div
      className={clsx(styles.container, isToggled ? styles.on : styles.off)}
      onClick={toggleSwitch}
    >
      <div className={styles.knob}></div>
    </div>
  );
};

export default ToggleSwitch;
