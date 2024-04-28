import React from "react";
import CardDashboard from "@/components/modules/cardDashboard";
import Chart from "@/components/modules/chart";
import Transactions from "@/components/modules/transactions";
import RightBar from "@/components/templates/rightBar";

const Dashboard = () => {
  return (
    <div dir="ltr" className="text-white w-full lg:w-main">
      <div className="flex flex-col md:flex-row justify-between items-start mx-3 xs:mx-6">
        <div className="w-full md:w-3/4 flex flex-col">
          <div className="w-full centering flex-col 510:flex-row justify-between mr-2">
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
          </div>

          <Transactions />
          <Chart />
        </div>
        <div className="w-full md:w-1/4">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
