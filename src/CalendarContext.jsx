import React from "react";

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

  //   console.log(today);
  //   console.log(currentDate);
  //   console.log(currentMonth);
  //   console.log(currentYear);

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
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
