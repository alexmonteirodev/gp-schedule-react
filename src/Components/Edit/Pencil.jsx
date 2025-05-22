import React from "react";
import CloseX from "../../assets/svg/close.svg?react";

const Pencil = ({ onClick, optionsAppear }) => {
  return (
    <button onClick={onClick} id="pencil">
      <CloseX
        className={` size-9 bg-gray-200 rounded-full p-1.5 absolute bottom-20 right-5 ${
          !optionsAppear ? "rotate-45" : "rotate-45"
        } transition-transform duration-500 ease-in-out`}
      />
    </button>
  );
};

export default Pencil;
