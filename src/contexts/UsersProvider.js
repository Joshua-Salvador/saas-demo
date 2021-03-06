import React, { useState, useEffect, useContext, createContext } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthProvider";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

function UsersProvider({ children }) {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  async function getUsers() {
    try {
      const data = await db
        .collection("organizations")
        .doc(currentUser.organization)
        .collection("users")
        .get();

      data.forEach((user) => {
        setUsers((prev) => [...prev, { ...user.data() }]);
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
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push(doc.data());
        });
        setUsers(usersData);
        setLoading(false);
      });
    return unsubscribe;
  }, []);

  const value = {
    users,
    getUsers,
  };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export default UsersProvider;
