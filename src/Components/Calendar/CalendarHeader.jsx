import React from "react";

const CalendarHeader = () => {
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="">
      <div className="grid grid-cols-7 text-center mt-4 ">
        {weekDays.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeader;
