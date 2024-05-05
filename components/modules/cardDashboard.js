import changeStyle from "@/helper/changeStyle";
import { useTranslation } from "next-i18next";
import React from "react";
import { IoEarthSharp } from "react-icons/io5";

const CardDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-template mb-3 510:mb-0 w-full 510:w-[32%] p-5 rounded-lg cursor-pointer hover:bg-slate-600 hover:opacity-80 duration-200">
      <div className="centering justify-start">
        <IoEarthSharp className={`text-lg ${changeStyle("ml-3", "mr-3")}`} />
        <p className="text-[16px] mt-1 opacity-80">{t("home:total-users")}</p>
      </div>
      <h2
        className={`text-xl my-3 ${changeStyle(
          "font-kalameh",
          "font-faceMedium"
        )}`}
      >
        12.373
      </h2>
      <div
        className={`flex text-sm ${changeStyle(
          "font-kalameh",
          "font-faceMedium"
        )}`}
      >
        <span className={`text-green-600 ${changeStyle("ml-0.5", "mr-0.5")}`}>
          17%
        </span>
        <p>{t("home:about-total")}</p>
      </div>
    </div>
  );
};

export default CardDashboard;
