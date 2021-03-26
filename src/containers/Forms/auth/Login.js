import React, { useState } from "react";
import "../../../tailwind.css";
import axios from "../../../axios";
import { useAuth } from "../../../contexts/AuthProvider";
import { db } from "../../../firebase";
import { Redirect, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const { login, currentUser, logout } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prevCredential) => ({
      ...prevCredential,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(credentials.email, credentials.password);
      console.log(currentUser);
      console.log(res);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      logout();
    } catch (err) {
      console.error(err);
    }
  };

  const getTestData = async (e) => {
    e.preventDefault();
    try {
      const res = await db
        .collection("organizations")
        .doc("GMr7IRmNMzAjXRePEnq1")
        .get();
      console.log(res.data());
    } catch (err) {
      console.error(err);
    }
  };
  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form onSubmit={submitLogin}>
        <div className="container">
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Email:</h3>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={credentials.email}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Password:</h3>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={credentials.password}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-1 text-gray-700 text-xl rounded-lg bg-green-300"
        >
          Login
        </button>
        {currentUser && (
          <button
            onClick={handleLogout}
            className="px-8 py-1 ml-2 text-gray-700 text-xl rounded-lg bg-green-300"
          >
            Logout
          </button>
        )}
        <button
          onClick={getTestData}
          className="px-8 py-1 ml-2 text-gray-700 text-xl rounded-lg bg-green-300"
        >
          Get Test Data
        </button>
        <button
          onClick={async () => console.log(await axios.get("/users/"))}
          className="px-8 py-1 ml-2 text-gray-700 text-xl rounded-lg bg-green-300"
        >
          Function call
        </button>
      </form>
    </div>
  );
}

export default Login;
