import React from "react";
import { useCalendar } from "../../CalendarContext";
import Hours from "./Hours";

const HeaderNav = () => {
  const { visibleMonth, months } = useCalendar();

  return (
    <div className="flex items-end justify-between my-10">
      <h2 className="font-bold text-3xl ">{months[visibleMonth]}</h2>
      <Hours />
    </div>
  );
};

export default HeaderNav;
