import React, { useState } from "react";

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
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button onClick={handleClick}>Create</button>
    </div>
  );
}

export default NewOperation;
