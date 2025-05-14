import React from "react";
import Months from "./Months";
import Nav from "./Nav";
import Styles from "./Header.module.css";

const Header = () => {
  const today = new Date();

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

  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());

  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());

  return (
    <header className="flex place-content-between items-center mt-8">
      <Months
        currentYear={currentYear}
        currentMonth={currentMonth}
        months={months}
      />
      <Nav
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        months={months}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
    </header>
  );
};

export default Header;
