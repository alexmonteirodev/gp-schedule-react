import React from "react";
import Pencil from "./Pencil.jsx";
import Options from "./options.jsx";
import Close from "./Close";

const Edit = () => {
  const [optionsAppear, setOptionsAppear] = React.useState(false);

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
          <Options />
        </div>
      ) : (
        <Pencil onClick={handleClickPencil} />
      )}
    </>
  );
};

export default Edit;
