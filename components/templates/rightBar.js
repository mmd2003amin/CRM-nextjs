import React from "react";
import BarChartRight from "../modules/barChart";
import PieChartRight from "../modules/pieChart";

const RightBar = () => {
  return (
    <div className="ml-2 centering flex-col">
      <BarChartRight />
      <PieChartRight />
    </div>
  );
};

export default RightBar;
