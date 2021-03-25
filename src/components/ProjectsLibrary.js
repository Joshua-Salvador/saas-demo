import React, { useState, useEffect } from "react";
import { useProject } from "../contexts/ProjectsProvider";
import "../tailwind.css";

function ProjectsLibrary() {
  const { projects } = useProject();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        setData([...projects]);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
    console.log(data, projects);
  }, []);
  return (
    <div className="shadow-md mx-1 my-8 font-nunito">
      {data.map((doc) => (
        <div className="flex justify-evenly">
          <span>{doc.name}</span>
          <span>{doc.completed ? "Completed" : "Ongoing"}</span>
          <span>{doc.lead}</span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsLibrary;
