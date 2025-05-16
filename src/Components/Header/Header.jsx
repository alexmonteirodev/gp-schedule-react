import React from "react";
import Months from "./Months";
import Nav from "./Nav";
import { useCalendar } from "../../CalendarContext";

const Header = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { currentMonth, setCurrentMonth, currentYear, setCurrentYear } =
    useCalendar();

  return (
    <header className="flex place-content-between items-center mt-8">
      <Months
        currentYear={currentYear}
        currentMonth={currentMonth}
        months={months}
      />
      <Nav
        months={months}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
    </header>
  );
};

export default Header;
