import React from "react";

const CalendarHeader = () => {
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="  absolute top-0 left-0 right-0 mx-auto max-w-xl pt-32 z-10 bg-gray-200">
      <div className="grid grid-cols-7 text-center mt-4 ">
        {weekDays.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeader;
