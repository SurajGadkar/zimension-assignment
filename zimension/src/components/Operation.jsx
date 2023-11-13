import React, { useEffect, useState } from "react";
import styles from "./Operation.module.css";
import { useParams } from "react-router-dom";
import { getProjectById } from "../api/api";
import NewOperation from "./NewOperation";

function Operation({ projects, setProjects }) {
  const params = useParams();
  const { id } = params;
  const [project, setProject] = useState({});
  const [newToggle, setNewToggle] = useState(false);

  useEffect(() => {
    const projectData = getProjectById(projects, id);
    if (projectData) {
      setProject(projectData);
    }
  }, [id, projects]);

  const { operations } = project;

  return (
    <div className={styles.main__container}>
      <p>{project.name}</p>
      {operations?.map((op) => (
        <p key={op?.id}>{op?.name}</p>
      ))}

      <div>
        <button onClick={() => setNewToggle((prev) => !prev)}>New </button>
      </div>

      <div className={`${newToggle ? styles.show : styles.hide}`}>
        <NewOperation projectId={id} setProjects={setProjects} />
      </div>
    </div>
  );
}

export default Operation;
