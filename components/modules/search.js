import changeStyle from "@/helper/changeStyle";
import { useTranslation } from "next-i18next";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`centering justify-between mx-1 relative w-64 px-2 bg-slate-600 rounded-lg opacity-80 ${changeStyle(
        "flex-row-reverse"
      )}`}
    >
      <IoIosSearch className="w-1/12 text-lg" />
      <input
        type="text"
        placeholder={t("home:search")}
        className="bg-transparent p-2 w-11/12 outline-none"
      />
    </div>
  );
};

export default Search;
