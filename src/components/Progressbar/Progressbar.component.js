import React from "react";
import "./Progressbar.styles.css";

export const Progressbar = ({ progress, status }) => {
  const progressInverted = 100 - progress;

  return (
    <div className="progressbar--wrapper">
      <p className="progress__status">{status}</p>

      <div className="progress__wrapper">
        <span className="progress">{progress}%</span>
        <span
          className="progress__filler"
          style={{ right: `${progressInverted}%` }}
        />
      </div>
    </div>
  );
};
