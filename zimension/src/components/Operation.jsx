import React, { useEffect, useState } from "react";
import styles from "./Operation.module.css";
import { useParams } from "react-router-dom";
import { getProjectById } from "../api/api";
import OperationItem from "./OperationItem";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvasExample({ projectId, setProjects, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    const randomId = Math.floor(Math.random() * 956684);

    const newOp = { id: randomId, name: input.opName, type: input.opType };

    setProjects((prev) => {
      return prev.map((project) => {
        if (Number(project.id) === Number(projectId)) {
          const { operations } = project;
          const newOperations = [...operations, newOp];
          return { ...project, operations: newOperations };
        } else {
          return project;
        }
      });
    });
  };

  return (
    <>
      <Button className={styles.add__operation__btn} onClick={handleShow}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Operation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offCanvasBody}>
          <div className={styles.operation__main__container}>
            <input
              type="text"
              name="opName"
              placeholder="Enter the name of the placeholder"
              onChange={handleChange}
              className={styles.input__operation}
            />
            <div className={styles.select__container}>
              <label for="cars" className={styles.label}>
                Select a Tool
              </label>
              <select
                name="opType"
                onChange={handleChange}
                className={styles.select__tool}
              >
                <option value="">Select an option</option>
                <option value="Tool D-2">Tool D-2</option>
                <option value="Tool D-4">Tool D-4</option>
                <option value="Tool D-6">Tool D-6</option>
                <option value="Tool D-8">Tool D-8</option>
              </select>
            </div>

            <button className={styles.add__btn} onClick={handleClick}>
              Add
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Operation({ projects, setProjects }) {
  const params = useParams();
  const { id } = params;
  const [project, setProject] = useState({});

  useEffect(() => {
    const projectData = getProjectById(projects, id);
    if (projectData) {
      setProject(projectData);
    }
  }, [id, projects]);

  const { operations } = project;
  return (
    <div className={styles.main__container}>
      <div className={styles.project__name}>{project.name}</div>

      {operations?.map((op) => (
        <OperationItem
          key={op.id}
          id={op.id}
          name={op.name}
          type={op.type}
          setProjects={setProjects}
          projectId={id}
        />
      ))}

      <div className={styles.new__btn}>
        <OffCanvasExample
          setProjects={setProjects}
          projectId={id}
          placement={"end"}
          name={"."}
        />
      </div>
    </div>
  );
}

export default Operation;
