import React from "react";
import "./Progressbar.styles.css";

export const Progressbar = ({ progress = 0 }) => {
  const progressInverted = 100 - progress;

  return (
    <div>
      <p>status</p>

      <div className="progress--wrapper">
        <span className="progress">{progressInverted}%</span>
        <span
          className="progress__filler"
          style={{ right: `${progressInverted}%` }}
        />
      </div>
    </div>
  );
};
