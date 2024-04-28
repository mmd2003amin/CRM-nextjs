import React from "react";
import { IoEarthSharp, IoMenu } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { useRouter } from "next/router";
import Search from "@/components/modules/search";

const Navbar = ({ setOpenSidebar }) => {
  const routes = useRouter();

  return (
    <div dir="ltr" className="w-full lg:w-main py-6 text-white font-regular">
      <div className="centering justify-between rounded-lg p-3 py-6 xs:p-6 bg-template mx-3 xs:mx-6">
        <h1 className="text-lg">{routes.route.split("/").slice(-1)}</h1>

        <div className="centering">
          <div className="hidden md:flex">
            <Search />
          </div>

          <div className="centering icons-navbar">
            <BiMessageDetail />
            <FaBell />
            <IoEarthSharp />
            <IoMenu
              className="lg:hidden"
              onClick={() => setOpenSidebar(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
