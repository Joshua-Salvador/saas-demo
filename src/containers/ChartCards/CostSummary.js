import React, { useState, useEffect } from "react";
import { useProject } from "../../contexts/ProjectsProvider";
import "../../tailwind.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

function CostSummary() {
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
  return (
    <div className="text-center shadow-md">
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Tooltip />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" fontSize={12} />
        <PolarRadiusAxis />
        <Radar
          name="Costs"
          dataKey="costs.totalCosts"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

export default CostSummary;
