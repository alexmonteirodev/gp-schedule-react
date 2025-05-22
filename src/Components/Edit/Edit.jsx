import React from "react";
import Pencil from "./Pencil.jsx";
import Options from "./Options.jsx";
import Close from "./Close";
import { useCalendar } from "../../CalendarContext";
import Hours from "../Calendar/Hours.jsx";

const Edit = () => {
  const [optionsAppear, setOptionsAppear] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const { selectedOption, setSelectedOption } = useCalendar();

  const handleClickPencil = () => {
    setIsVisible(true);
    setOptionsAppear(true);
  };

  const handleClose = () => {
    setOptionsAppear(false);
    // Espera a animação terminar antes de desmontar
    setTimeout(() => {
      setIsVisible(false);
    }, 150); // Tempo da animação
  };

  return (
    <>
      {isVisible ? (
        <div>
          <Close onClick={handleClose} selectedOption={selectedOption} />
          <Options
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            optionsAppear={optionsAppear}
          />
        </div>
      ) : (
        <Pencil onClick={handleClickPencil} optionsAppear={optionsAppear} />
      )}
      <Hours optionsAppear={optionsAppear} />
    </>
  );
};

export default Edit;
