import React, { useState, useEffect, useContext, createContext } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthProvider";

const ProjectsContext = createContext();

export const useProject = () => useContext(ProjectsContext);

function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const { currentUser } = useAuth();

  async function getProjects() {
    try {
      const data = await db
        .collection("organizations")
        .doc(currentUser.organization)
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
      .doc(currentUser.organization)
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
