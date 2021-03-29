import React, { useState } from "react";
import "../../../tailwind.css";
import axios from "../../../axios";

function Admin() {
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    salary: 0,
  });
  const changeHandler = (e) => {
    setAdmin((admin) => ({
      ...admin,
      [e.target.name]: e.target.value,
    }));
  };
  const addAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/organizations/newadmin", admin);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form onSubmit={addAdmin}>
        <div className="container">
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Username: </h3>
            <input
              onChange={changeHandler}
              type="text"
              name="username"
              value={admin.username}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Email: </h3>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              value={admin.email}
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
              value={admin.salary}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Admin;
