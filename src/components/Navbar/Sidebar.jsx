import React, { useState } from "react";

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

const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(false);

  const sideBarExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
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
  );
};

export default Sidebar;
