import React, { useState, useEffect } from "react";
// import { db } from "../../firebase";
import { useProject } from "../../contexts/ProjectsProvider";
import "../../tailwind.css";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
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
    //eslint-disable-next-line
  }, []);
  console.log(data);
  return (
    <div className="bg-white font-nunito text-center shadow-md max-w-7xl mx-auto my-10 py-2">
      <h1 className="text-4xl font-semibold underline my-4">
        Revenues vs Costs
      </h1>
      <BarChart
        width={1200}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar
          name="Revenue"
          dataKey={"revenue"}
          type={"monotone"}
          fill="#45d320"
        />
        <Bar
          name="Total Costs"
          dataKey={"costs.totalCosts"}
          type={"monotone"}
          fill="#d34520"
        />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis name="Revenue" tick={{ fontSize: 12 }} />
        <Legend
          iconSize={12}
          verticalAlign="top"
          layout="horizontal"
          align="center"
          wrapperStyle={{ paddingTop: 4 }}
        />
      </BarChart>
    </div>
  );
}

export default Profit;
