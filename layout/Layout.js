import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import changeStyle from "@/helper/changeStyle";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      dir={`${changeStyle("rtl", "ltr")}`}
      className={`bg-darker centering justify-between items-start ${changeStyle(
        "font-kalameh",
        "font-regular"
      )}`}
    >
      <div className="w-3/4 xs:w-72 h-full z-10">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </div>
      <div className="w-full lg:w-main">
        <Navbar setOpenSidebar={setOpenSidebar} />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
