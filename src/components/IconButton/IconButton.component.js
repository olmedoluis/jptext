import React from "react";
import "./IconButton.styles.css"

export const IconButton = ({ text, icon, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span>{text}</span>
      {icon}
    </button>
  );
};
