import React from "react";
import styles from "./ProjectItem.module.css";
import { Link } from "react-router-dom";

function ProjectItem({ id, name }) {
  return (
    <Link className={styles.link} to={`/projects/${id}`}>
      <div className={styles.main__container}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default ProjectItem;
