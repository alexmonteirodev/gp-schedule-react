import React from "react";
import Pencil from "./Pencil.jsx";
import Options from "./Options.jsx";
import Close from "./Close";
import { useCalendar } from "../../CalendarContext";

const Edit = () => {
  const [optionsAppear, setOptionsAppear] = React.useState(false);
  const { selectedOption, setSelectedOption } = useCalendar();

  const handleClickPencil = () => {
    setOptionsAppear(true);
  };
  const handleClose = () => {
    setOptionsAppear(false);
  };

  return (
    <>
      {optionsAppear ? (
        <div>
          <Close onClick={handleClose} />
          <Options
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      ) : (
        <Pencil onClick={handleClickPencil} />
      )}
    </>
  );
};

export default Edit;
