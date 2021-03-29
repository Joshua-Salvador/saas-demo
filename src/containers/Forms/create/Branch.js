import React, { useState } from "react";
import "../../../tailwind.css";
import axios from "../../../axios";

function Branch() {
  const [branch, setBranch] = useState({
    username: "",
    email: "",
    branch: "",
    salary: 0,
  });
  const changeHandler = (e) => {
    setBranch((branch) => ({
      ...branch,
      [e.target.name]: e.target.value,
    }));
  };
  const addBranch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/organizations/newbranch", branch);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form onSubmit={addBranch}>
        <div className="container">
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Username: </h3>
            <input
              onChange={changeHandler}
              type="text"
              name="username"
              value={branch.username}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Email: </h3>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              value={branch.email}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Branch Name: </h3>
            <input
              onChange={changeHandler}
              type="text"
              name="branch"
              value={branch.branch}
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
              value={branch.salary}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Branch;
