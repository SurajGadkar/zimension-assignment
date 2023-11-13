import React from "react";
import styles from "./Avatar.module.css";

function Avatar() {
  return (
    <div className={styles.main__container}>
      <div className={styles.account__text}>
        <h4>Account</h4>
      </div>
      <div className={styles.profile__container}>profile</div>
    </div>
  );
}

export default Avatar;
