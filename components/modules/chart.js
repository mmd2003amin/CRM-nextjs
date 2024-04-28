import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import fakeChart from "@/constant/fakeChart";

const Chart = () => {
  return (
    <div className="w-full bg-template rounded-lg p-5 centering mb-6">
      <LineChart
        width={1000}
        height={400}
        data={fakeChart}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
        <XAxis dataKey="name" />
        <Tooltip />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Chart;
