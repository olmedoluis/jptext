import React, { useState } from "react";
import { Chevron } from "../../assets/icons/Chevron.icon";
import "./SelectInput.styles.css";

export const SelectInput = ({ options, defaultValue, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasOptions = Boolean(options.length);
  const parsedOptions = hasOptions ? options : ["Empty"];

  const onOptionClick = (option) => {
    if (hasOptions) {
      onChange(option);
    }

    setIsOpen(false);
  };

  return (
    <div className={`select--wrapper ${className}`}>
      <button
        className={`select__button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span>{defaultValue || "Select file"}</span> <Chevron />
      </button>

      {isOpen && (
        <div className="select__option--wrapper">
          {parsedOptions.map((option) => (
            <div
              key={option}
              className="select__option"
              onClick={() => onOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
