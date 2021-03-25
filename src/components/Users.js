import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UsersProvider";

function Users() {
  const { users } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setData([...users]);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
    console.log(data, users);
  }, []);
  return (
    <div>
      {data.map((doc) => (
        <p>{doc.username}</p>
      ))}
    </div>
  );
}

export default Users;
