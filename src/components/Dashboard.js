import React, { useEffect, useState } from "react";
import "../tailwind.css";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthProvider";
import Profit from "../containers/Cards/Profit";

function Dashboard() {
  const [data, setData] = useState();
  const { logout } = useAuth();
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
  console.log(data);
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <br></br>
      <button
        onClick={async () => await logout()}
        className="px-8 py-1 ml-2 text-gray-700 text-xl rounded-lg bg-green-300"
      >
        Logout
      </button>
      <br></br>
      <Profit />
    </div>
  );
}

export default Dashboard;