import fakeData from "@/constant/fakeData";
import React from "react";

const Transactions = () => {
  return (
    <div className="font-regular w-full mr-2 rounded-lg bg-template my-6 p-5">
      <h1 className="text-[19px] opacity-80 mb-5">Latest TransActions</h1>
      <table className="w-full justify-between mx-auto list-transactions">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>

          {fakeData.map((item) => (
            <tr key={item.id}>
              <td className="centering justify-start">
                <img
                  className="size-10 rounded-full mr-3"
                  src="/user.avif"
                  alt="user"
                />
                <p>{item.name}</p>
              </td>
              <td>
                <span
                  className={`${
                    item.status === "done"
                      ? "bg-slate-700"
                      : item.status === "pending"
                      ? "bg-amber-400 opacity-80"
                      : "bg-red-500"
                  } p-2 rounded-md`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
          </thead>
      </table>
    </div>
  );
};

export default Transactions;
