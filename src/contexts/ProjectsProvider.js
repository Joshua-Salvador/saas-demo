import React, { useState, useEffect, useContext, createContext } from "react";
import { db } from "../firebase";

const ProjectsContext = createContext();

export const useProject = () => useContext(ProjectsContext);

function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  async function getProjects() {
    try {
      const data = await db
        .collection("organizations")
        .doc("GMr7IRmNMzAjXRePEnq1") // Eventually Replace with user's organization claims from Auth Provider
        .collection("projects")
        .limit(10)
        .orderBy("name")
        .get();

      data.forEach((project) => {
        setProjects((prev) => [...prev, { ...project.data() }]);
      });
    } catch (err) {
      console.error(err);
      throw new Error(err.message ? err.message : "Something went wrong");
    }
  }

  useEffect(() => {
    const unsubscribe = db
      .collection("organizations")
      .doc("GMr7IRmNMzAjXRePEnq1") // Eventually Replace with user's organization claims from Auth Provider
      .collection("projects")
      .onSnapshot((querySnapshot) => {
        const projectsData = [];
        querySnapshot.forEach((doc) => {
          projectsData.push(doc.data());
        });
        setProjects(projectsData);
        setLoading(false);
      });
    return unsubscribe;
  }, []);

  const value = {
    projects,
    getProjects,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {!loading && children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsProvider;
