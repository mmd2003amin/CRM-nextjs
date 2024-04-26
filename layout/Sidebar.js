import React from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div
      className={`duration-500 h-full w-3/4 xs:w-72 bg-template text-white fixed top-0 lg:left-0 ${
        openSidebar ? "left-0" : "-left-72"
      }`}
    >
      <IoMdClose
        className={`text-xl absolute top-4 right-4 cursor-pointer ${
          !openSidebar && "hidden"
        }`}
        onClick={() => setOpenSidebar(false)}
      />
    </div>
  );
};

export default Sidebar;
