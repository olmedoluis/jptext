import React, { useState } from "react";
import "./IconButton.styles.css";

export const IconButton = ({ text, icon, onClick, className, toolTipText }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const hasTooltip = Boolean(toolTipText);
  toolTipText = "wea";

  return (
    <button className={`button ${className}`} onClick={onClick}>
      {hasTooltip && (
        <span className={`toolTip ${isTooltipOpen ? "open" : ""}`}>
          {toolTipText}
        </span>
      )}

      <span>{text}</span>

      {icon}
    </button>
  );
};
