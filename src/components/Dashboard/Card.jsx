import React from "react";

const Card = ({
  title,
  total,
  name,
  icon0,
  icon1,
  nTotal,
  icon2,
  grp,
  complete,
}) => {
  return (
    <div className="w-full  p-4 bg-blue-900 rounded-md text-white">
      <div>
        <h2 className="text-2xl ">{title}</h2>
        <div className="flex justify-between mt-4 items-center">
          <div>
            <h2 className="text-3xl font-bold">{total}</h2>
            <h3>{name}</h3>
          </div>
          <div className="bg-blue-600 rounded-full p-2">{icon0}</div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={complete}
          className="w-full my-4"
        />
        <div className="flex justify-between">
          <div className="flex gap-1 items-center text-sm">
            {icon1} <span>{nTotal}</span>
          </div>
          <div className="flex gap-1 items-center text-sm">
            {icon2}
            <span> {grp}:</span>
            <span> {complete}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
