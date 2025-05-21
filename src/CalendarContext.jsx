import React from "react";
import { getDaysInMonth, startOfMonth, getDay } from "date-fns";

const CalendarContext = React.createContext();

export const useCalendar = () => {
  return React.useContext(CalendarContext);
};

export const CalendarProvider = ({ children }) => {
  const today = new Date();
  const currentDate = today.getDate();
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());
  const [selectedOption, setSelectedOption] = React.useState(null);

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

  // logica array calendario com todos os meses
  const yearArr = [];

  for (let i = 0; i <= 11; i++) {
    const date = new Date(currentYear, i);
    const monthDays = getDaysInMonth(date);
    const startDay = getDay(startOfMonth(date));

    const mondayToSunday = startDay === 0 ? 6 : startDay - 1;

    const daysMonthArr = [];

    for (let n = 0; n < mondayToSunday; n++) {
      daysMonthArr.push(null);
    }
    for (let d = 1; d <= monthDays; d++) {
      daysMonthArr.push(d);
    }

    yearArr.push({
      name: months[i],
      monthIndex: i,
      days: daysMonthArr,
    });
  }
  return (
    <CalendarContext.Provider
      value={{
        today,
        currentDate,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        selectedOption,
        setSelectedOption,
        months,
        yearArr,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
