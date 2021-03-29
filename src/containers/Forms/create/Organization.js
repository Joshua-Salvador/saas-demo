import React, { useState } from "react";
// import { db, auth } from "../../../firebase";
import "../../../tailwind.css";
import axios from "../../../axios";

function Organization() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    salary: 0,
  });

  const handleOrgChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      default:
        return null;
    }
  };

  const handleAdminChange = (e) => {
    setAdmin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await db.collection(`organizations`).add({
      //   name,
      //   email,
      //   admin,
      // });

      // await auth.createUserWithEmailAndPassword(admin.email, admin.password);

      // console.log(res.id);

      axios.post("/organizations/", {
        name,
        email,
        admin,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="organization">
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Organization Name: </h3>
              <input
                onChange={handleOrgChange}
                value={name}
                type="text"
                name="name"
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Organization Email: </h3>
              <input
                value={email}
                onChange={handleOrgChange}
                type="email"
                name="email"
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="admin">
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Admin Name: </h3>
              <input
                value={admin.username}
                onChange={handleAdminChange}
                type="text"
                name="username"
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Admin Email: </h3>
              <input
                value={admin.email}
                onChange={handleAdminChange}
                type="email"
                name="email"
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Password: </h3>
              <input
                value={admin.password}
                onChange={handleAdminChange}
                type="password"
                name="password"
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Confirm Password: </h3>
              <input
                value={admin.confirmPassword}
                onChange={handleAdminChange}
                type="password"
                name="confirmPassword"
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
            <div className="container my-8">
              <h3 className="text-2xl font-semibold">Monthly Salary: </h3>
              <input
                onChange={handleAdminChange}
                type="number"
                min={0}
                name="salary"
                value={admin.salary}
                className="w-1/2 border-green-400 border-b-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-8 py-1 text-gray-700 text-xl rounded-lg bg-green-300"
        >
          Create Organization
        </button>
      </form>
    </div>
  );
}

export default Organization;
