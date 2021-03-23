import React, { useEffect, useState } from "react";
import "../tailwind.css";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthProvider";

function Dashboard() {
  const [data, setData] = useState();
  const { logout, currentUser } = useAuth();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await db
          .collection("organizations")
          .doc("GMr7IRmNMzAjXRePEnq1")
          .get();

        setData(res.data());
      } catch (err) {
        console.log(err);
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {JSON.stringify(data)}
      <br></br>
      <button
        onClick={async () => await logout()}
        className="px-8 py-1 ml-2 text-gray-700 text-xl rounded-lg bg-green-300"
      >
        Logout
      </button>
      <br></br>
      {JSON.stringify(currentUser)}
    </div>
  );
}

export default Dashboard;
