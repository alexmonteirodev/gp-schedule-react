import React from "react";

const Options = () => {
  return (
    <div className="animate-slideIn flex justify-center absolute bottom-3 left-1/2 -translate-x-1/2 gap-5 divide-x-1 divide-gray-300 px-3 *:flex *:flex-col *:items-center *:pr-4 bg-gray-100 py-3 rounded-2xl">
      <div>
        <div className="bg-yellow-400 size-5 rounded-full  border-2 border-blue-500"></div>
        <div className="text-blue-500">Morning</div>
      </div>
      <div>
        <div className="bg-green-500 size-5 rounded-full"></div>
        <div>Afternoon</div>
      </div>
      <div>
        <div className="bg-blue-600 size-5 rounded-full"></div>
        <div>Night</div>
      </div>
    </div>
  );
};

export default Options;
