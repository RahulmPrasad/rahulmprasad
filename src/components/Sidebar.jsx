import { useState } from "react";
import {
  TbLayoutDashboardFilled,
  TbLayoutDashboard,
} from "react-icons/tb";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { IoSettingsSharp, IoSettingsOutline } from "react-icons/io5";
import { IoPersonAdd, IoPersonAddOutline } from "react-icons/io5";
import { PiNotepadFill, PiNotepad } from "react-icons/pi"
import logo from "../assets/logo.png";

import "../css/components.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      label: "Dashboard",
      filled: TbLayoutDashboardFilled,
      outline: TbLayoutDashboard,
    },
    {
      label: "Master",
      filled: IoPersonAdd,
      outline: IoPersonAddOutline,
    },
    {
      label: "Inspector",
      filled: RiSearchFill,
      outline: RiSearchLine,
    },
    {
      label: "Register",
      filled: PiNotepadFill,
      outline: PiNotepad,
    },
    {
      label: "Settings",
      filled: IoSettingsSharp,
      outline: IoSettingsOutline,
    },
  ];

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <ul className="menu-list">
        <div className="logo">
          <img src={logo} alt="" />
          <p>APS Group</p>
        </div>

        <div className="title">
          <p>MENU</p>
        </div>

        {menuItems.map((item, index) => {
          const FilledIcon = item.filled;
          const OutlineIcon = item.outline;

          let IconToShow;

          if (!isOpen) {
            // --- SIDEBAR CLOSED ---
            IconToShow = FilledIcon; // always filled
          } else {
            // --- SIDEBAR OPEN ---
            IconToShow = hoverIndex === index ? FilledIcon : OutlineIcon;
          }

          return (
            <li
              key={index}
              className="menu-item"
              onClick={toggleSidebar}
              onMouseEnter={() => isOpen && setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <IconToShow className="icon" />
              {isOpen && <span className="menu-text">{item.label}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
