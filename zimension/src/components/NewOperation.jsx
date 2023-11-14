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
        className = {styles}
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

export default NewOperation;
