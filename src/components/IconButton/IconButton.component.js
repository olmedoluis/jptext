import React, { useState } from "react";
import "./IconButton.styles.css";

export const IconButton = ({ text, icon, onClick, className, toolTipText }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const hasTooltip = Boolean(toolTipText);

  const onButtonClick = () => {
    setIsTooltipOpen(true);

    setTimeout(() => setIsTooltipOpen(false), 1000);

    onClick();
  };

  return (
    <button className={`button ${className}`} onClick={onButtonClick}>
      {hasTooltip && (
        <span className={`tool-tip ${isTooltipOpen ? "open" : ""}`}>
          {toolTipText}
        </span>
      )}

      <span>{text}</span>

      {icon}
    </button>
  );
};
