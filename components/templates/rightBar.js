import React from "react";
import BarChartRight from "../modules/barChart";
import PieChartRight from "../modules/pieChart";
import changeStyle from "@/helper/changeStyle";

const RightBar = () => {
  return (
    <div className={`centering flex-col ${changeStyle("mr-2", "ml-2")}`}>
      <BarChartRight />
      <PieChartRight />
    </div>
  );
};

export default RightBar;
