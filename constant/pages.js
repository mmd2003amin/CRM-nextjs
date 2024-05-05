import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdReport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

const pages = [
  {
    category: "pages",
    items: [
      { id: 1, name: "dashboard", icon: <LuLayoutDashboard /> },
      { id: 2, name: "users", icon: <LuUsers /> },
      { id: 3, name: "products", icon: <RiProductHuntLine /> },
      { id: 4, name: "transactions", icon: <FaDollarSign /> },
    ],
  },

  {
    category: "analytics",
    items: [
      { id: 5, name: "revenue", icon: <PiBagSimpleFill /> },
      { id: 6, name: "reports", icon: <MdReport /> },
      { id: 7, name: "teams", icon: <RiTeamFill /> },
    ],
  },

  {
    category: "user",
    items: [
      { id: 8, name: "settings", icon: <IoSettingsSharp /> },
      { id: 9, name: "help", icon: <TbHelp /> },
      { id: 10, name: "logout", icon: <FiLogOut /> },
    ],
  },
];

export default pages;
