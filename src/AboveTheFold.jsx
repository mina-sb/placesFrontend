import React from "react";
import AroundTheWorld from "./shared/assets/AroundTheWorld";
import styles from "./AboveTheFold.module.css";
import Button from "./shared/components/FormElements/Button";

const AboveTheFold = () => {
  return (
    <div className={styles.above_fold}>
      <div className={styles.text_container}>
        <h1>Discover, Share, Explore: Your Journey Awaits</h1>
        <p>
          Join our community to showcase your travels, inspiring others with
          your photos and the places you've uncovered.
        </p>
        <div className={styles.btn_container}>
          <Button href="#places" class="third-color-button btn-xl">All Places</Button>
        </div>
      </div>
      <div className={styles.img_container}>
        <AroundTheWorld />
      </div>
    </div>
  );
};

export default AboveTheFold;
