import React from "react";
import RightArrow from "../../assets/svg/right-arrow.svg?react";
import LeftArrow from "../../assets/svg/left-arrow.svg?react";

const Nav = () => {
  return (
    <div>
      <button>
        <LeftArrow className="size-13" />
      </button>
      <button>
        <RightArrow className="size-13" />
      </button>
    </div>
  );
};

export default Nav;
