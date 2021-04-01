import React, { useState, useEffect } from "react";
import { useProject } from "../../contexts/ProjectsProvider";
import "../../tailwind.css";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

function CostSummary() {
  const { projects } = useProject();
  const [data, setData] = useState([]);
  const colors = ["#45d320", "#03c2fc"];
  useEffect(() => {
    async function fetchProjectData() {
      try {
        let sumOfTotalSalaries = 0,
          sumOfTotalAssets = 0;
        await projects.forEach((project) => {
          console.log(
            project.costs.totalSalary,
            project.costs.totalAssets,
            sumOfTotalSalaries,
            sumOfTotalAssets
          );
          sumOfTotalSalaries = sumOfTotalSalaries + project.costs.totalSalary;
          sumOfTotalAssets = sumOfTotalAssets + project.costs.totalAssets;
        });
        setData([
          {
            type: "Salary",
            value: sumOfTotalSalaries,
          },
          {
            type: "Assets",
            value: sumOfTotalAssets,
          },
        ]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProjectData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="bg-white text-center shadow-md max-w-3xl mx-auto my-10">
      <PieChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          nameKey="type"
          label={(entry) => entry.type}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default CostSummary;

/*

{
  type: "Salary",
  cost: Number
},
{
  type: "Assets",
  cost: Number
}

*/
