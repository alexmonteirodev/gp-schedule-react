import React from "react";
import LeftArrow from "../../assets/svg/left-arrow.svg?react";

const Months = ({ months, currentMonth, currentYear }) => {
  return (
    <div>
      <div className="flex items-center text-gray-600 absolute top-2 left-3">
        <LeftArrow className="size-7" />
        <span className="">{currentYear}</span>
      </div>
      <div className="font-bold text-3xl ">{months[currentMonth]}</div>
    </div>
  );
};

export default Months;
