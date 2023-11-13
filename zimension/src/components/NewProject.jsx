import { useState } from "react";
import React from "react";

const NewProject = ({ setProjects }) => {
  const [input, setInput] = useState("");

  const randomId = Math.floor(Math.random() * 93459);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const newProject = { id: randomId, name: input, operations: [] };

  const handleCreate = () => {
    setProjects((prev) => [...prev, newProject]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter the project name"
        value={input}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default NewProject;
