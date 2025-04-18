import React from "react";

import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      {/* Title and Search*/}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Jeager Rester</h1>
          <p className="text-gray-500">04/07/2024</p>
        </div>
        <form>
          <div className="w-full relative">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D28] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Buscar"
            ></input>
          </div>
        </form>
      </div>
      {/*tabs*/}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start lg:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 
                before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Hot Dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Could Dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Soup
        </a>
        <a href="#" className="py-2">
          Grill
        </a>
      </nav>
    </header>
  );
};

export default Header;
