import React from "react";

const Options = ({ selectedOption, setSelectedOption, optionsAppear }) => {
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className={`flex justify-center absolute bottom-3 left-1/2 -translate-x-1/2 gap-5 divide-x-1 divide-gray-300 px-3 *:flex *:flex-col *:items-center *:pr-4 bg-gray-100 py-3 rounded-2xl ${
        optionsAppear ? "animate-slideIn" : "animate-slideOut"
      }`}
    >
      <div onClick={() => handleSelect("morning")}>
        <div
          className={`bg-yellow-400 size-5 rounded-full ${
            selectedOption === "morning" ? `border-2 border-blue-500` : ""
          }`}
        ></div>
        <div
          className={`${
            selectedOption === "morning" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Morning
        </div>
      </div>
      <div onClick={() => handleSelect("afternoon")}>
        <div
          className={`bg-green-500 size-5 rounded-full ${
            selectedOption === "afternoon" ? `border-2 border-blue-500` : ""
          }`}
        ></div>
        <div
          className={`${
            selectedOption === "afternoon" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          afternoon
        </div>
      </div>
      <div onClick={() => handleSelect("night")}>
        <div
          className={`bg-blue-600 size-5 rounded-full ${
            selectedOption === "night" ? `border-2 border-blue-500` : ""
          }`}
        ></div>
        <div
          className={`${
            selectedOption === "night" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          night
        </div>
      </div>
    </div>
  );
};

export default Options;
