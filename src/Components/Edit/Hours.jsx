import React from "react";

const Hours = ({ optionsAppear }) => {
  return (
    <p
      className={`text-gray-400 text-[0.9rem] italic absolute bottom-3 transition 
        ${optionsAppear && "hidden"}
        ${!optionsAppear && "animate-slideIn"}`}
    >
      Total: 120 hrs
    </p>
  );
};

export default Hours;
