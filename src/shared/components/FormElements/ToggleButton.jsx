import React from "react";
import { useState } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className={styles.toggle_container}>
      <label className={styles.toggle_label}>
        <input
          className={styles.toggle_input}
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
        <span className={styles.toggle_span} />
      </label>
      <span className={styles.title}>{label}</span>
    </div>
  );
};

export default ToggleButton;
