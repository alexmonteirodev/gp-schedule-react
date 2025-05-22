import React from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import HeaderNav from "./HeaderNav";

const Calendar = () => {
  return (
    <section>
      <HeaderNav />
      <CalendarHeader />
      <CalendarBody />
    </section>
  );
};

export default Calendar;
