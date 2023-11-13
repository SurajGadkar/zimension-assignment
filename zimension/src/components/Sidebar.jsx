import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import ProjectItem from "./ProjectItem";
import NewProject from "./NewProject";
import New from "./New";

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
      <New setProjects={setProjects} />
    </div>
  );
}

export default Sidebar;
