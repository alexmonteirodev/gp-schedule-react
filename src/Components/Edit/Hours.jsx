import React from "react";

const Hours = () => {
  return (
    <p
      className={`text-gray-400 text-[1rem] italic absolute top-15 right-5 z-10 transition 
        `}
    >
      Total: 120 hrs
    </p>
  );
};

export default Hours;

// ${optionsAppear && "hidden"}
// ${!optionsAppear && "animate-slideIn"}
// lembrar de puxar props
