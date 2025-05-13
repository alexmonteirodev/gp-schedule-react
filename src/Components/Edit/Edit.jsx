import React from "react";
import styles from "./Edit.module.css";
import Pencil from "../../assets/svg/pencil.svg?react";

const Edit = () => {
  return (
    <div className="size-10 bg-red-200 rounded-full p-1.5 right-px">
      <Pencil />
    </div>
  );
};

export default Edit;
