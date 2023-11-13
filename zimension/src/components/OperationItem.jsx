import React from "react";
import styles from "./OperationItem.module.css";

const OperationItem = ({ id, name, type }) => {
  return (
    <div className={styles.main__container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.tool}> {type}</div>
      <button className={styles.btn}>Remove</button>
    </div>
  );
};

export default OperationItem;
