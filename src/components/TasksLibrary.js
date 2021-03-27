import React, { useState, useEffect } from "react";
import { useTask } from "../contexts/TasksProvider";
function TasksLibrary() {
  const { tasks } = useTask();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setData([...tasks]);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
    console.log(data, tasks);
  }, []);
  return (
    <div>
      {data.map((doc) => (
        <p>{doc.name}</p>
      ))}
    </div>
  );
}

export default TasksLibrary;
