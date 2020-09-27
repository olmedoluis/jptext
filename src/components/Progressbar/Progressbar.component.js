import React from "react";
import "./Progressbar.styles.css";

export const Progressbar = ({ progress = 0 }) => {
  const progressInverted = 100 - progress;

  return (
    <>
      <div className="progressbar--wrapper">
        <span className="progressbar">{progressInverted}%</span>
        <span
          className="progressbar__filler"
          style={{ right: `${progressInverted}%` }}
        />
      </div>
    </>
  );
};
