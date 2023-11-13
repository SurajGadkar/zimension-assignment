import { useState } from "react";
import Header from "./components/Header";
import Operation from "./components/Operation";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  console.log(projects);
  return (
    <>
      <Header />
      <Sidebar projects={projects} setProjects={setProjects} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:id"
          element={<Operation projects={projects} setProjects={setProjects} />}
        />
      </Routes>
    </>
  );
}

export default App;
