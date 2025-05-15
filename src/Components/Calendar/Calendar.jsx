import React from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import Hours from "./Hours";

const Calendar = () => {
  return (
    <section>
      <CalendarHeader />
      <CalendarBody />
      <Hours />
    </section>
  );
};

export default Calendar;
