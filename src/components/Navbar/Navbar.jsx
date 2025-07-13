import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFlag, FaRegMessage } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

// sidebar icon import
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaSquarePollVertical, FaWpforms } from "react-icons/fa6";
import { AiOutlineBook, AiOutlineLayout } from "react-icons/ai";
import {
  MdAddTask,
  MdPages,
  MdOutlineAutoGraph,
  MdOutlineMultipleStop,
  MdArrowForwardIos,
} from "react-icons/md";
import {
  FaDollarSign,
  FaPlaceOfWorship,
  FaCalendarAlt,
  FaTable,
  FaLock,
} from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { SiElementary } from "react-icons/si";

import logo from "../../assets/logo.png";

import { useState } from "react";

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);

  const sideBarExpand = () => {
    setIsExpand(!isExpand);
  };

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
              onClick={sideBarExpand}
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
          <div className="hidden md:block p-3 bg-[#4a4a8c] rounded-full">
            <FaShoppingCart />
          </div>
          <div className="hidden md:block p-3 bg-[#4a4a8c] rounded-full">
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

      <div
        onMouseEnter={() => setIsExpand(true)}
        onMouseLeave={() => setIsExpand(false)}
        className={`${isExpand ? "w-64" : "w-18"} transform transition-discrete
        duration-300 left-0 mt-18 hidden md:block  p-4 text-white bg-blue-950 `}
      >
        <div className="  flex flex-col gap-3 text-sm">
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <RiDashboardHorizontalFill size={22} />
            {isExpand && <span>Dashboard</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaSquarePollVertical size={22} />
            {isExpand && <span>Reports</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <AiOutlineBook size={22} />
            {isExpand && <span>Sales</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <MdAddTask size={22} />
            {isExpand && <span>My Tasks</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaDollarSign size={22} />
            {isExpand && <span>Yearly Expenses</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <MdPages size={22} />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Pages</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <LiaTableSolid size={22} />
            {isExpand && <span>Data Table</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <CiEdit size={22} />
            {isExpand && <span>Editor</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaPlaceOfWorship size={22} />
            {isExpand && <span>Placeholder</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaCalendarAlt size={22} />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Calendars</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <SiElementary />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Elements</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaWpforms size={22} />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Forms</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <AiOutlineLayout size={22} />
            {isExpand && <span>Default Layout</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaTable size={22} />
            {isExpand && <span>Tables</span>}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <MdOutlineAutoGraph size={22} />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Graphs & Maps</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <FaLock size={22} />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Authentication</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
          <div className="flex  gap-3 bg-blue-800 p-2 rounded-full ">
            <MdOutlineMultipleStop size={22} />
            {isExpand && (
              <div className="flex items-center justify-between w-full">
                <span>Multi Level</span>
                <div className="text-[#F24566] border border-blue-500 p-0.5 rounded-full">
                  <MdArrowForwardIos />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
