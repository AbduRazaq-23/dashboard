import React, { useState } from "react";

import Card from "./Card";

import { FaDollarSign } from "react-icons/fa6";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
import { IoCheckmarkDone, IoTimeOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { FaArrowsRotate } from "react-icons/fa6";

const Dashboard = () => {
  const SoTotal = 24580;
  const SoObtain = 8245;
  let SoComp = ((SoObtain / SoTotal) * 100).toFixed(2);

  const UeTotal = 8360;
  const UeObtain = 348;
  let UeComp = ((UeObtain / UeTotal) * 100).toFixed(2);

  // Order Status
  const OsTotal = 1245;
  const OsObtain = 936;
  let OsComp = ((OsObtain / OsTotal) * 100).toFixed(2);

  return (
    <div className="mt-18 bg-[#161676] w-full">
      <div className="p-10 w-full">
        <div className="text-white">
          <h1 className="text-3xl font-bold ">Food Dashboard</h1>
          <p>
            Streamlines orders, inventory, sales, and customer management with
            real-time tracking and analytics.
          </p>
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex  justify-around gap-4 ">
            <Card
              title={"Sales Overview"}
              total={SoTotal.toLocaleString()}
              name={"Total monthly revenue"}
              icon0={<FaDollarSign size={25} />}
              icon1={<FaDollarSign />}
              nTotal={"Profit: " + SoObtain}
              icon2={<GoGoal />}
              grp={"Goal"}
              complete={SoComp}
            />
            <Card
              title={"User Engagement"}
              total={UeTotal.toLocaleString()}
              name={"Active users"}
              icon0={<FaUsers size={25} />}
              icon1={<FaUserPlus />}
              nTotal={"New: " + UeObtain}
              icon2={<FaArrowsRotate />}
              grp={"Returning:"}
              complete={UeComp}
            />
          </div>
          <div>
            <Card
              title={"Order Status"}
              total={OsTotal}
              name={"Total orders today"}
              icon0={<MdNoteAlt size={25} />}
              icon1={<IoCheckmarkDone />}
              nTotal={"Completed: " + OsObtain}
              icon2={<IoTimeOutline />}
              grp={"Pending:"}
              complete={OsComp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
