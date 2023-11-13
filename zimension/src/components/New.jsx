import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NewProjectModal = ({ onHide, show, setProjects }) => {
  const [input, setInput] = useState("");

  const randomId = Math.floor(Math.random() * 93459);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const newProject = { id: randomId, name: input, operations: [] };

  const handleCreate = (e) => {
    e.preventDefault(); // Prevents the default form submission
    setProjects((prev) => [...prev, newProject]);
    setInput("");
    onHide(); // Close the modal after creating a new project
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Operation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreate}>
          <Form.Control
            type="text"
            onChange={handleChange}
            placeholder="Enter the project name"
            value={input}
          />
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const NewProject = ({ setProjects }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create New
      </Button>

      <NewProjectModal
        setProjects={setProjects}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default NewProject;
