import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    localStorage.removeItem("token");
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const token = await auth.currentUser.getIdTokenResult();

            setCurrentUser({
              ...user.providerData[0],
              ...token.claims,
            });
            setLoading(false);
          } catch (err) {
            console.error(err);
          }
        } else {
          setCurrentUser(user);
          setLoading(false);
        }
      });
    };
    return unsubscribe();
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
