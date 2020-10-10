import React from "react";
import { Loader } from "../../../shared-components/Loader/Loader.component";
import "./TextBox.styles.css";

export const TextBox = ({ text, isLoading, boxRef = null }) => {
  return (
    <div className="text-box--wrapper">
      <textarea
        className="text-box__input"
        ref={boxRef}
        value={text || " "}
        onChange={() => {}}
      />
      {isLoading ? <Loader /> : ""}
    </div>
  );
};
