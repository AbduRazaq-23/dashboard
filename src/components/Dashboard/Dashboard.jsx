import React from "react";
import Card from "./Card";

const Dashboard = () => {
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
            <Card />
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
