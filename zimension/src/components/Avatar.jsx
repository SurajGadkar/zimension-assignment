import React from "react";
import styles from "./Avatar.module.css";

import { CgProfile } from "react-icons/cg";

function Avatar() {
  return (
    <div className={styles.main__container}>
      <div className={styles.account__text}>
        <h4>Account</h4>
      </div>
      <div className={styles.profile__container}>
        <CgProfile size={24} />
      </div>
    </div>
  );
}

export default Avatar;
