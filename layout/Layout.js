import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div dir="rtl" className="bg-darker">
      <Navbar setOpenSidebar={setOpenSidebar} />
      {children}
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default Layout;
