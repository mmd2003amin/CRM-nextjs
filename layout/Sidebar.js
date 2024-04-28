import pages from "@/constant/pages";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [namePage, setNamePage] = useState("Dashboard");
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
      dir="ltr"
      className={`font-regular scrollSidebar overflow-auto duration-500 h-full w-3/4 xs:w-72 bg-template text-white fixed top-0 lg:left-0 ${
        openSidebar ? "left-0" : "-left-72"
      }`}
    >
      <IoMdClose
        className={`text-xl absolute top-2 right-2 cursor-pointer ${
          !openSidebar && "hidden"
        }`}
        onClick={() => setOpenSidebar(false)}
      />

      <div className="centering justify-start mt-8 ml-5">
        <img
          className="size-14 rounded-full mr-4"
          src="/admin.jpg"
          alt="admin"
        />
        <div>
          <h3 className="text-[17px] font-medium">admin</h3>
          <p className="text-sm opacity-80">administrator</p>
        </div>
      </div>

      <div className="m-5">
        {pages.map((page) => (
          <div key={page.category}>
            <h3 className="text-sm opacity-80">{page.category}</h3>
            <div className="text-sm ml-2">
              {page.items.map((item) => (
                <div
                  onClick={() => pageHandler(item.name)}
                  key={item.id}
                  className={`centering justify-start duration-200 cursor-pointer rounded-lg p-4 mb-1 hover:hover:bg-slate-600 hover:opacity-80 ${
                    namePage === item.name && "bg-slate-600 opacity-80"
                  }`}
                >
                  <i>{item.icon}</i>
                  <p className="ml-3 text-[16px] mt-1">{item.name}</p>
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
