import React, { useState, useEffect } from "react";
import { useProject } from "../../contexts/ProjectsProvider";
import "../../tailwind.css";

function AverageProfitMargin() {
  const { projects } = useProject();
  const [profit, setProfit] = useState(0);
  useEffect(() => {
    async function fetchProjectData() {
      try {
        const profits = [];
        let profit;
        await projects.forEach(async (project) => {
          if (project.completed) profits.push(project.profitMarginByDeadline);
        });
        profit = Number.parseFloat(
          ((await profits.reduce((acc, cum) => acc + cum)) * 100) /
            profits.length
        ).toFixed(2);
        setProfit(profit);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProjectData();
    // data.forEach((project) => {
    //   setProfits(...(prev) => [...prev, project.profitMarginByDeadline]);
    // });
    // setProfit(profits.reduce((acc, cum) => acc + cum) / profits.length);

    //eslint-disable-next-line
  }, []);
  return (
    <div className="bg-white shadow-md max-w-md w-1/3 mx-auto my-10 py-4 px-8 font-nunito">
      <h1 className="text-xl">Mean Profit Margin</h1>
      <p className="text-xs">(Completed Projects)</p>
      <h1 className="text-6xl font-semibold mt-4">{profit}%</h1>
    </div>
  );
}

export default AverageProfitMargin;
