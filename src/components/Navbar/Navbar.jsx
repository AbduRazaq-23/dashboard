import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFlag, FaRegMessage } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-18 bg-[#3A3A87] flex justify-between items-center text-amber-50 p-2 px-6 shadow-2xl">
        {/* left  */}
        <div className="w-[40%] flex justify-between">
          <div className="hidden md:flex items-center font-extrabold text-2xl">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <h1>FoodX</h1>
          </div>
          <div className="flex gap-3 items-center">
            <div
              // onClick={sideBarExpand}
              className="bg-[#F24566] p-2 rounded text-white hover:bg-[#cd536a]"
            >
              <RxHamburgerMenu size={16} />
            </div>

            <div className="hidden md:flex align-middle rounded-lg bg-blue-950 py-1 px-2 focus-within:outline-3 outline-offset-2 outline-blue-300">
              <input
                type="text"
                placeholder="search"
                className="focus:outline-none px-1"
              />
              <button>
                <IoMdSearch />
              </button>
            </div>
            <img src={logo} alt="logo" className="md:hidden w-14 h-14" />
          </div>
        </div>
        {/* right  */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block p-3 bg-[#4a4a8c] rounded-full">
            <FaFlag />
          </div>
          <div className="hidden md:block relative p-3 bg-[#4a4a8c] rounded-full">
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
            <FaShoppingCart />
          </div>
          <div className="hidden md:block relative p-3 bg-[#4a4a8c] rounded-full">
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
            <FaRegMessage />
          </div>
          <div className="flex items-center text-sm ">
            <img src={logo} alt="image" className="w-14 h-14" />
            <div className="hidden md:flex flex-col gap-1">
              <h2 className="bg-blue-400 px-1 rounded">Sumaira</h2>
              <h3 className="bg-[#F24566] px-1 rounded">Admin</h3>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
    </>
  );
};

export default Navbar;
