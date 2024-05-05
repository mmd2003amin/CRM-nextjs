import React from "react";
import CardDashboard from "@/components/modules/cardDashboard";
import Chart from "@/components/modules/chart";
import Transactions from "@/components/modules/transactions";
import RightBar from "@/components/templates/rightBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import changeStyle from "@/helper/changeStyle";

const Dashboard = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row justify-between items-start mx-3 xs:mx-6">
        <div className="w-full md:w-3/4 flex flex-col">
          <div
            className={`w-full centering flex-col 510:flex-row justify-between ${changeStyle(
              "ml-2",
              "mr-2"
            )}`}
          >
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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "sidebar"])),
    },
  };
}
