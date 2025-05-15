import React from "react";
import PencilSvg from "../../assets/svg/pencil.svg?react";

const Pencil = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <PencilSvg className="animate-slideIn transition size-9 bg-gray-200 rounded-full p-1.5 absolute bottom-20 right-3" />
    </button>
  );
};

export default Pencil;
