import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdReport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelp, TbHelpSquareFilled } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

const pages = [
  {
    category: "Pages",
    items: [
      { id: 1, name: "Dashboard", icon: <LuLayoutDashboard /> },
      { id: 2, name: "Users", icon: <LuUsers /> },
      { id: 3, name: "Products", icon: <RiProductHuntLine /> },
      { id: 4, name: "Transactions", icon: <FaDollarSign /> },
    ],
  },

  {
    category: "Analytics",
    items: [
      { id: 5, name: "Revenue", icon: <PiBagSimpleFill /> },
      { id: 6, name: "Reports", icon: <MdReport /> },
      { id: 7, name: "Teams", icon: <RiTeamFill /> },
    ],
  },

  {
    category: "User",
    items: [
      { id: 8, name: "Settings", icon: <IoSettingsSharp /> },
      { id: 9, name: "Help", icon: <TbHelp /> },
      { id: 10, name: "Logout", icon: <FiLogOut /> },
    ],
  },
];

export default pages;
