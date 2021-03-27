import React, { useState, useEffect, useContext, createContext } from "react";
import { db } from "../firebase";

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection("organizations")
      .doc("GMr7IRmNMzAjXRePEnq1") // Eventually Replace with user's organization claims from Auth Provider
      .collection("tasks")
      .onSnapshot((querySnapshot) => {
        const tasksData = [];
        querySnapshot.forEach((doc) => {
          tasksData.push(doc.data());
        });
        setTasks(tasksData);
        setLoading(false);
      });
    return unsubscribe;
  }, []);

  const value = {
    tasks,
  };
  return (
    <TaskContext.Provider value={value}>
      {!loading && children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;
