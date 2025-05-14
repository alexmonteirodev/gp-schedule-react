import React from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());

  return (
    <section>
      <CalendarHeader />
      <CalendarBody />
    </section>
  );
};

export default Calendar;
