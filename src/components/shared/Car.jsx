import React from "react";

import { LuTrash2 } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

const Car = (props) => {
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:rigth-0 h-full
        transition-all z-50
            ${showOrder ? "right-0" : "-right-full"}
            `}
    >
      {/**Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <IoIosClose
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#1F1D2B] rounded-full text-xl"
        />
        <h1 className="text-2xl mt-4 my-4">Order #511416</h1>
        {/*Phills*/}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/**Car*/}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col col-span-4 ">Item</h5>
            <h5>Qtic</h5>
            <h5>Price</h5>
          </div>
        </div>
        {/**Products */}
        <div className="h-[400px] md:h-[700px] lg:h[540px] p-2 overflow-y-auto">
          {/**Product */}
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/**Product Description */}
              <div className="col-span-4 flex items-center gap-2">
                <img src="food1.png" className="w-12 h-12 object-cover"></img>
                <div>
                  <h5 className="text-sm">Spaicy seaso...</h5>
                  <p className="text-xs text-gray-500">$2.29</p>
                </div>
              </div>
              {/**Qty */}
              <div>
                <span>2</span>
              </div>
              {/**Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/**Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                  placeholder="order note..."
                ></input>
              </form>
              <div>
                <button className=" border border-red-500 p-2 rounded-lg ">
                  <LuTrash2 className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/**Product Description */}
              <div className="col-span-4 flex items-center gap-2">
                <img src="food1.png" className="w-12 h-12 object-cover"></img>
                <div>
                  <h5 className="text-sm">Spaicy seaso...</h5>
                  <p className="text-xs text-gray-500">$2.29</p>
                </div>
              </div>
              {/**Qty */}
              <div>
                <span>2</span>
              </div>
              {/**Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/**Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                  placeholder="order note..."
                ></input>
              </form>
              <div>
                <button className=" border border-red-500 p-2 rounded-lg ">
                  <LuTrash2 className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/**Product Description */}
              <div className="col-span-4 flex items-center gap-2">
                <img src="food1.png" className="w-12 h-12 object-cover"></img>
                <div>
                  <h5 className="text-sm">Spaicy seaso...</h5>
                  <p className="text-xs text-gray-500">$2.29</p>
                </div>
              </div>
              {/**Qty */}
              <div>
                <span>2</span>
              </div>
              {/**Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/**Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                  placeholder="order note..."
                ></input>
              </form>
              <div>
                <button className=" border border-red-500 p-2 rounded-lg ">
                  <LuTrash2 className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/**Product Description */}
              <div className="col-span-4 flex items-center gap-2">
                <img src="food1.png" className="w-12 h-12 object-cover"></img>
                <div>
                  <h5 className="text-sm">Spaicy seaso...</h5>
                  <p className="text-xs text-gray-500">$2.29</p>
                </div>
              </div>
              {/**Qty */}
              <div>
                <span>2</span>
              </div>
              {/**Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/**Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none"
                  placeholder="order note..."
                ></input>
              </form>
              <div>
                <button className=" border border-red-500 p-2 rounded-lg ">
                  <LuTrash2 className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/**Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Discount</span>
            <span>0$</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$201.03</span>
          </div>
          <div>
            <bottom className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continue to payment
            </bottom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
