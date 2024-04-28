import React from "react";
import { IoEarthSharp } from "react-icons/io5";

const CardDashboard = () => {
  return (
    <div className="font-regular bg-template mb-3 510:mb-0 w-full 510:w-[32%] p-5 rounded-lg cursor-pointer hover:bg-slate-600 hover:opacity-80 duration-200">
      <div className="centering justify-start">
        <IoEarthSharp className="text-lg mr-3" />
        <p className="text-[16px] mt-1 opacity-80">Total Users</p>
      </div>
      <h2 className="text-xl my-3 font-faceMedium">12.373</h2>
      <div className="flex text-sm font-faceMedium">
        <span className="text-green-600 mr-0.5">17%</span>
        <p>more than previous week</p>
      </div>
    </div>
  );
};

export default CardDashboard;
