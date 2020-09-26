import React from "react";
import { Chevron } from "../../assets/icons/Chevron.icon";

export const SelectInput = () => {
  const options = ["wea", "wea1"];

  return (
    <div className="select--wrapper">
      <button className="select__button">
        Select file <Chevron />
      </button>

      <div className="select__option--wrapper">
        {options.map((option) => (
          <div key={option} className="select__option">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
