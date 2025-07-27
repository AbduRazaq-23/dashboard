import React from "react";
import { FaDollarSign } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="w-full  p-4 bg-blue-900 rounded-md text-white">
      <div>
        <h2 className="text-2xl ">user</h2>
        <div className="flex justify-between mt-4 items-center">
          <div>
            <h2 className="text-3xl font-bold">7877</h2>
            <h3>Total Order</h3>
          </div>
          <div className="bg-blue-600 rounded-full p-2">
            <FaDollarSign size={25} />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={75}
          className="w-full my-4"
        />
        <div className="flex justify-between">
          <div className="flex gap-1 items-center text-sm">
            <FaDollarSign /> <span>Profit: $8,245</span>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <FaDollarSign /> <span>Goal: 75%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
