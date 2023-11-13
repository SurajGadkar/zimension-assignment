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
        console.log(project.id, projectId);
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
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Operation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <input
              type="text"
              name="opName"
              placeholder="Enter the name of the placeholder"
              onChange={handleChange}
            />
            <select name="opType" onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="Tool D-2">Tool D-2</option>
              <option value="Tool D-4">Tool D-4</option>
              <option value="Tool D-6">Tool D-6</option>
              <option value="Tool D-8">Tool D-8</option>
            </select>
            <button onClick={handleClick}>Create</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function NewOperation({ projectId, setProjects }) {
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
    <div>
      <input
        type="text"
        name="opName"
        placeholder="Enter the name of the placeholder"
        onChange={handleChange}
      />
      <select name="opType" onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Tool D-2">Tool D-2</option>
        <option value="Tool D-4">Tool D-4</option>
        <option value="Tool D-6">Tool D-6</option>
        <option value="Tool D-8">Tool D-8</option>
      </select>
      <button onClick={handleClick}>Create</button>
    </div>
  );
}

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
      <div className={styles.project__name}>{project.name}</div>

      {operations?.map((op) => (
        <OperationItem key={op.id} id={op.id} name={op.name} type={op.type} />
      ))}

      <div className={styles.new__btn}>
        <OffCanvasExample
          setProjects={setProjects}
          projectId = {id}
          placement={"end"}
          name={"New"}
        />
      </div>

      <div className={`${newToggle ? styles.show : styles.hide}`}></div>
    </div>
  );
}

export default Operation;
