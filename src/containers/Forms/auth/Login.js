import React, { useState } from "react";
import "../../../tailwind.css";
import axios from "../../../axios";
import { useAuth } from "../../../contexts/AuthProvider";

function Login() {
  const { login, currentUser } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState();

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
      setUser(currentUser);
      console.log(currentUser);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
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
          {JSON.stringify(user)}
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
