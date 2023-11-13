import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import ProjectItem from "./ProjectItem";
import NewProject from "./NewProject";

function Sidebar({ projects, setProjects }) {
  const [createToggle, setCreateToggle] = useState(false);
  return (
    <div className={styles.main__container}>
      <div className={styles.project__container}>
        {projects?.map((project) => {
          return (
            <ProjectItem key={project.id} id={project.id} name={project.name} />
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setCreateToggle((prev) => !prev)}
          className={styles.create__btn}
        >
          {!createToggle ? "Create New" : "Close"}
        </button>
      </div>
      <div className={`${createToggle ? styles.show : styles.hide}`}>
        <NewProject setProjects={setProjects} />
      </div>
    </div>
  );
}

export default Sidebar;
