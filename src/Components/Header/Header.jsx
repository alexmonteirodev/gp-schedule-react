import React from "react";
import Months from "./Months";
import Nav from "./Nav";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="flex place-content-between items-center">
      <Months />
      <Nav />
    </header>
  );
};

export default Header;
