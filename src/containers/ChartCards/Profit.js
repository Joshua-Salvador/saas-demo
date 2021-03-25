import React, { useState, useEffect } from "react";
// import { db } from "../../firebase";
import { useProject } from "../../contexts/ProjectsProvider";
import "../../tailwind.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function Profit() {
  const { projects } = useProject();
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchProjectData() {
      try {
        setData(projects);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProjectData();
  }, []);
  console.log(data);
  return (
    <div className="text-center ml-10">
      <LineChart
        width={1200}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line
          name="Revenue"
          dataKey={"revenue"}
          type={"monotone"}
          stroke="#45d320"
        />
        <Line
          name="Total Costs"
          dataKey={"costs.totalCosts"}
          type={"monotone"}
          stroke="#d34520"
        />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis name="Revenue" tick={{ fontSize: 12 }} />
      </LineChart>
    </div>
  );
}

export default Profit;
