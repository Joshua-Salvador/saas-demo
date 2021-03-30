import React, { useState } from "react";
import "../../../tailwind.css";
import axios from "../../../axios";

function User() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    branch: "",
    salary: 0,
  });
  // const positionOptions =
  const changeHandler = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };
  const addUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/adduser", user);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form onSubmit={addUser}>
        <div className="container">
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Username: </h3>
            <input
              onChange={changeHandler}
              type="text"
              name="username"
              value={user.username}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Email: </h3>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              value={user.email}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Branch: </h3>
            <input
              onChange={changeHandler}
              type="text"
              name="branch"
              value={user.branch}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Monthly Salary: </h3>
            <input
              onChange={changeHandler}
              type="number"
              min={0}
              name="salary"
              value={user.salary}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-1 text-gray-700 text-xl rounded-lg bg-green-300"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default User;
