import React from "react";
import { getDaysInMonth, startOfMonth, getDay } from "date-fns";

const CalendarBody = () => {
  const today = new Date();
  const currentDate = today.getDate();

  const monthDays = getDaysInMonth(
    new Date(today.getFullYear(), today.getMonth())
  );
  const startDay = getDay(
    startOfMonth(new Date(today.getFullYear(), today.getMonth()))
  );
  const mondayToSunday = startDay === 0 ? 6 : startDay - 1;

  const daysArray = [];

  for (let i = 0; i < mondayToSunday; i++) {
    daysArray.push(null);
  }

  for (let i = 1; i <= monthDays; i++) {
    daysArray.push(i);
  }
  console.log(daysArray);
  return (
    <div className="grid grid-cols-7 mt-3">
      {daysArray.map((day, i) => (
        <div
          key={i}
          className={`h-21 text-center font-bold text-[1.10rem] border-t-1 border-gray-200 relative pt-1 ${
            day === currentDate ? " text-white" : ""
          }`}
        >
          {day}
          {day === currentDate && (
            <div className="size-7 z-[-1] top-[.1875rem] absolute left-1/2 -translate-x-1/2 rounded-full bg-gray-600"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
