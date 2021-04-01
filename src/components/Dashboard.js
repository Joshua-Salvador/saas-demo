import React, { useEffect, useState } from "react";
import "../tailwind.css";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthProvider";
import ProjectsProvider from "../contexts/ProjectsProvider";
import Profit from "../containers/ChartCards/Profit";
import CostSummary from "../containers/ChartCards/CostSummary";
import AverageProfitMargin from "../containers/ChartCards/AverageProfitMargin";
import MeanProfitForCompleted from "../containers/ChartCards/MeanProfitForCompleted";

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
    <div className="bg-gray-50">
      <button
        onClick={async () => await logout()}
        className="px-8 py-1 ml-2 text-white text-xl rounded-sm bg-blue-900"
      >
        Logout
      </button>
      <br></br>

      <ProjectsProvider>
        <Profit />
        <CostSummary />
        <AverageProfitMargin />
        <MeanProfitForCompleted />
      </ProjectsProvider>
    </div>
  );
}

export default Dashboard;
