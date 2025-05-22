import React from "react";
import CloseX from "../../assets/svg/close.svg?react";

const Close = ({ onClick }) => {
  return (
    <button onClick={onClick} id="closeBtn">
      <CloseX className="transition size-9 bg-gray-200 rounded-full p-1.5 absolute bottom-20 right-5" />
    </button>
  );
};

export default Close;
