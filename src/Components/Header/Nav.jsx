import React from "react";
import RightArrow from "../../assets/svg/right-arrow.svg?react";
import LeftArrow from "../../assets/svg/left-arrow.svg?react";

const Nav = ({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}) => {
  function handlePrev() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }
  function handleNext() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  return (
    <div>
      <button onClick={handlePrev}>
        <LeftArrow className="size-13" />
      </button>
      <button onClick={handleNext}>
        <RightArrow className="size-13" />
      </button>
    </div>
  );
};

export default Nav;
