import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";
import fakeChart from "@/constant/fakeChart";

const BarChartRight = () => {
  return (
    <div className="w-full bg-template rounded-lg centering mb-3">
      <BarChart
        width={250}
        height={300}
        data={fakeChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartRight;
