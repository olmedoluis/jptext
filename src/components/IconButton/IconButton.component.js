import React from "react";
import "./IconButton.styles.css";

export const IconButton = ({ text, icon, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span>{text}</span>
      {icon}
    </button>
  );
};
