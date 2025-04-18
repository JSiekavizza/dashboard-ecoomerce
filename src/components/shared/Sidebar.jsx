import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { PiPercent } from "react-icons/pi";
import { RiPieChartLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg-left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl
    z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href=""
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-white"
            >
              <RiHome5Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href=""
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <PiPercent className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href=""
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href=""
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <MdOutlineMailOutline className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href=""
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <IoMdNotificationsOutline className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href=""
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <IoSettingsOutline className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href=""
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <AiOutlineLogout className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
