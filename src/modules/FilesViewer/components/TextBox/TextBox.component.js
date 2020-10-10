import React from "react";
import { Loader } from "../../../../shared-components/Loader/Loader.component";
import "./TextBox.styles.css";

export const TextBox = ({ text, isLoading, boxRef = null }) => {
  const value = isLoading || !text ? " " : text;

  return (
    <div className="text-box--wrapper">
      <textarea
        className="text-box__input"
        ref={boxRef}
        value={value}
        onChange={() => {}}
      />
      {isLoading && <Loader text="Your file is loading!" />}
      {!isLoading && !text && (
        <p className="text-box__message">No images has been converted yet!</p>
      )}
    </div>
  );
};
