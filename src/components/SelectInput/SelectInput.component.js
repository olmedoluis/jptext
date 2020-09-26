import React, { useState } from "react";
import { Chevron } from "../../assets/icons/Chevron.icon";
import "./SelectInput.styles.css";

export const SelectInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["wea", "wea1"];

  return (
    <div className="select--wrapper">
      <button
        className={`select__button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span>Select file</span> <Chevron />
      </button>

      {isOpen && (
        <div className="select__option--wrapper">
          {options.map((option) => (
            <div key={option} className="select__option">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
