import React, { useState } from "react";
import clsx from "clsx";
import styles from "./toggle-switch.module.css"; // Make sure to create this CSS file
import { SunDim, MoonStars } from "@phosphor-icons/react/dist/ssr";

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
      <div className={styles.knob}>
        {isToggled ? (
          <MoonStars size={32} color="var(--surface-3)" />
        ) : (
          <SunDim size={32} color="var(--surface-3)" />
        )}
      </div>
    </div>
  );
};

export default ToggleSwitch;
