import pages from "@/constant/pages";
import changeStyle from "@/helper/changeStyle";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [namePage, setNamePage] = useState("Dashboard");
  const { t } = useTranslation();
  const routes = useRouter();

  const pageHandler = (page) => {
    setNamePage(page);
    if (page === "Dashboard") {
      routes.push(`/dashboard`);
    } else {
      routes.push(`/dashboard/${page.toLowerCase()}`);
    }
  };

  return (
    <div
      dir={`${changeStyle("rtl", "ltr")}`}
      className={`scrollSidebar fixed top-0 overflow-auto duration-500 bg-template text-white w-3/4 xs:w-72 ${
        routes.locale === "fa" &&
        (openSidebar ? "right-0" : "-right-72 lg:right-0")
      } ${
        routes.locale !== "fa" &&
        (openSidebar ? "left-0" : "-left-72 lg:left-0")
      }`}
    >
      <IoMdClose
        className={`text-xl absolute top-2 cursor-pointer ${
          !openSidebar && "hidden"
        } ${changeStyle("left-2", "right-2")}`}
        onClick={() => setOpenSidebar(false)}
      />

      <div className={`centering justify-start pt-8 ml-5`}>
        <img
          className="size-14 rounded-full mr-4"
          src="/admin.jpg"
          alt="admin"
        />
        <div className={`${changeStyle("mr-5")}`}>
          <h3
            className={`text-[17px] ${changeStyle(
              "font-kalameh",
              "font-faceMedium"
            )}`}
          >
            {t("home:admin")}
          </h3>
          <p className="text-sm opacity-80">administrator</p>
        </div>
      </div>

      <div className="m-5">
        {pages.map((page) => (
          <div key={page.category}>
            <h3 className="text-sm opacity-80">
              {t(`sidebar:${page.category}`)}
            </h3>
            <div className={`text-sm ${changeStyle("mr-2", "ml-2")}`}>
              {page.items.map((item) => (
                <div
                  onClick={() => pageHandler(item.name)}
                  key={item.id}
                  className={`centering justify-start duration-200 cursor-pointer rounded-lg p-4 mb-1 hover:hover:bg-slate-600 hover:opacity-80 ${
                    namePage === item.name && "bg-slate-600 opacity-80"
                  }`}
                >
                  <i>{item.icon}</i>
                  <p
                    className={`text-[16px] mt-1 ${changeStyle(
                      "mr-3",
                      "ml-3"
                    )}`}
                  >
                    {t(`sidebar:${item.name}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
