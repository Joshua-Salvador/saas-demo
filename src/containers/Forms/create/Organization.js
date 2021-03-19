import React, { useState } from "react";
import firebase from "firebase";

function Organization() {
  const db = firebase.firestore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      const res = await db.collection(`organizations`).add({
        name,
        email,
        admin,
      });

      console.log(res.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="org-name">Organization Name</label>
        <input
          id="org-name"
          type="text"
          name="name"
          value={name}
          onChange={handleOrgChange}
        />{" "}
        <br></br>
        <label for="org-email">Organization Email</label>
        <input
          id="org-email"
          type="email"
          name="email"
          value={email}
          onChange={handleOrgChange}
        />{" "}
        <br></br>
        <label for="admin-name">Admin Name</label>
        <input
          id="admin-name"
          type="text"
          name="name"
          value={admin.name}
          onChange={handleAdminChange}
        />{" "}
        <br></br>
        <label for="admin-email">Admin Email</label>
        <input
          id="admin-email"
          type="email"
          name="email"
          value={admin.email}
          onChange={handleAdminChange}
        />{" "}
        <br></br>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={admin.password}
          onChange={handleAdminChange}
        />{" "}
        <br></br>
        <label for="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          name="confirmPassword"
          value={admin.confirmPassword}
          onChange={handleAdminChange}
        />{" "}
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Organization;
