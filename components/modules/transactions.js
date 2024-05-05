import fakeData from "@/constant/fakeData";
import changeStyle from "@/helper/changeStyle";
import { useTranslation } from "next-i18next";
import React from "react";

const Transactions = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full rounded-lg bg-template my-6 p-5 ${changeStyle(
        "ml-2",
        "mr-2"
      )}`}
    >
      <h1 className="text-[19px] opacity-80 mb-5">
        {t("home:latest-transActions")}
      </h1>
      <table className="w-full justify-between mx-auto list-transactions">
        <thead>
          <tr>
            <td>{t("home:name")}</td>
            <td>{t("home:status")}</td>
            <td>{t("home:date")}</td>
            <td>{t("home:amount")}</td>
          </tr>

          {fakeData.map((item) => (
            <tr key={item.id}>
              <td className="centering justify-start">
                <img
                  className={`size-10 rounded-full ${changeStyle(
                    "ml-3",
                    "mr-3"
                  )}`}
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
                  {t(`home:${item.status}`)}
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
