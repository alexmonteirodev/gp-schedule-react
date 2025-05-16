import React from "react";
import { getDaysInMonth, startOfMonth, getDay } from "date-fns";
import { useCalendar } from "../../CalendarContext";

const CalendarBody = () => {
  const { today, currentDate, currentMonth, currentYear } = useCalendar();

  const date = new Date(currentYear, currentMonth);

  const monthDays = getDaysInMonth(date);

  const startDay = getDay(startOfMonth(date));

  const mondayToSunday = startDay === 0 ? 6 : startDay - 1;

  const daysArray = [];

  for (let i = 0; i < mondayToSunday; i++) {
    daysArray.push(null);
  }

  for (let i = 1; i <= monthDays; i++) {
    daysArray.push(i);
  }

  return (
    <div className="grid grid-cols-7 mt-3">
      {daysArray.map((day, i) => {
        const isToday =
          day === currentDate &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear();
        return (
          <div
            key={i}
            className={`h-20 text-center font-bold text-[1.10rem] border-t-1 border-gray-200 relative pt-1 ${
              isToday ? " text-white" : ""
            }`}
          >
            {day}
            {isToday && (
              <div className="size-7 z-[-1] top-[.1875rem] absolute left-1/2 -translate-x-1/2 rounded-full bg-gray-600"></div>
            )}
            {/* {day != null ? (
            <p className="h-4 mt-1 w-11 m-auto bg-yellow-400 rounded-md border-1 border-gray-300 text-[0.6rem] font-medium">
              Morning
            </p>
          ) : (
            ""
          )} */}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarBody;
