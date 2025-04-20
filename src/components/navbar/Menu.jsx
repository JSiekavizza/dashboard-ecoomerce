import { useState } from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/**Menu Movil */}
      <nav
        className="bg-[#1F1D2B] fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center 
        justify-around rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <FiUser />
        </button>
        <button className="p-2">
          <RiAddFill />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoIosClose /> : <RiMenu3Line />}
        </button>
      </nav>
    </>
  );
};

export default Menu;
