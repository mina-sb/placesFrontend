import React from "react";
import AroundTheWorld from "./shared/assets/AroundTheWorld";
import styles from "./AboveTheFold.module.css";
import Button from "./shared/components/FormElements/Button";

const AboveTheFold = () => {
  return (
    <div className={styles.above_fold}>
      <div className={styles.text_container}>
        <h1>Mind Blowing Creative For Startup Companies</h1>
        <p>
          Strategic visual language that differentiates the brand from its
          competition & communicates it well to the audience.
        </p>
        <div className={styles.btn_container}>
          <Button class="third-color-button btn-xl">All Places</Button>
        </div>
      </div>
      <div className={styles.img_container}>
        <AroundTheWorld />
      </div>
    </div>
  );
};

export default AboveTheFold;
