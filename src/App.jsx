import { useState } from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";

import Header from "./components/shared/Header.jsx";
import Sidebar from "./components/shared/Sidebar.jsx";
import Car from "./components/shared/Car.jsx";
import Card from "./components/shared/Card.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />

      {/**Menu Movil */}
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center 
      justify-around rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <FiUser />
        </button>
        <button className="p-2">
          <RiAddFill />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoIosClose /> : <RiMenu3Line />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <FaAngleDown /> Dine in
            </button>
          </div>
          {/*Content*/}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/*Card*/}
            <Card
              img="food1.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20 Bowls"
            />
            {/*Card*/}
            <Card
              img="food1.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20 Bowls"
            />
            {/*Card*/}
            <Card
              img="food1.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20 Bowls"
            />
            {/*Card*/}
            <Card
              img="food1.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20 Bowls"
            />
            {/*Card*/}
            <Card
              img="food1.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20 Bowls"
            />
            {/*Card*/}
            <Card
              img="food1.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20 Bowls"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
