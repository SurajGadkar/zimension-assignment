import React from "react";
import styles from "./OperationItem.module.css";

const OperationItem = ({ id, name, type, setProjects, projectId }) => {
  const handleRemove = () => {
    setProjects((prev) => {
      return prev.map((project) => {
        if (Number(project.id) === Number(projectId)) {
          const { operations } = project;
          const newOperations = operations.filter((op) => op.id !== id);
          return { ...project, operations: newOperations };
        } else {
          return project;
        }
      });
    });
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.tool}> {type}</div>
      <button className={styles.button_with_x} onClick={handleRemove}></button>
    </div>
  );
};

export default OperationItem;
