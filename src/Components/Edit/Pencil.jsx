import React from "react";
import PencilSvg from "../../assets/svg/pencil.svg?react";

const Pencil = () => {
  return (
    <div>
      <PencilSvg className="size-10 bg-gray-200 rounded-full p-1.5 absolute bottom-8 right-3" />
    </div>
  );
};

export default Pencil;
