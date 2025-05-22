import React from "react";
import CloseX from "../../assets/svg/close.svg?react";

const Close = ({ onClick, optionsAppear }) => {
  return (
    <button onClick={onClick} id="closeBtn">
      <CloseX
        className={`transition size-9 bg-gray-200 rounded-full p-1.5 absolute bottom-20 right-5 ${
          !optionsAppear ? "rotate-90" : "rotate-90"
        } transition-transform duration-500 ease-in-out`}
      />
    </button>
  );
};

export default Close;
