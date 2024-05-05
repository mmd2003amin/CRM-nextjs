import React from "react";
import { IoEarthSharp, IoMenu } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import Search from "@/components/modules/search";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import GetPath from "@/helper/getPath";
import changeStyle from "@/helper/changeStyle";

const Navbar = ({ setOpenSidebar }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-6 text-white centering justify-end">
      <div className="w-full centering justify-between rounded-lg p-3 py-6 xs:p-6 bg-template mx-3 xs:mx-6">
        <h1 className="text-lg">{t(`home:${GetPath().toString()}`)}</h1>

        <div className="centering">
          <div className="hidden md:flex">
            <Search />
          </div>

          <div className="centering icons-navbar">
            <BiMessageDetail />
            <FaBell />
            <div className="group relative py-1">
              <IoEarthSharp />
              <div
                className={`centering flex-col items-start languages absolute py-1.5 top-10 z-10 group-hover:top-6 rounded-lg w-20 bg-slate-600 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 ${changeStyle(
                  "left-0",
                  "right-0"
                )}`}
              >
                <Link href={`/${GetPath()}`} locale="en">
                  en
                </Link>
                <Link href={`/fa/${GetPath()}`} locale="fa">
                  fa
                </Link>
                <Link href={`/fr/${GetPath()}`} locale="fr">
                  fr
                </Link>
              </div>
            </div>
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
