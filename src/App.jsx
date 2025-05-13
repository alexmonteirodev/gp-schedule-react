import React from "react";
import Calendar from "./Components/Calendar/Calendar";
import Edit from "./Components/Edit/Edit";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="m-5">
      <Header />
      <Calendar />
      <Edit />
    </div>
  );
};

export default App;
