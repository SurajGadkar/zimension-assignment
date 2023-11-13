import React from "react";
import styles from "./Header.module.css";
import Avatar from "./Avatar";

function Header() {
  return (
    <div className={styles.main__container}>
      <Avatar />
    </div>
  );
}

export default Header;
