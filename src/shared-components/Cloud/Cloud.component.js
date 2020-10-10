import React from "react";
import "./Cloud.styles.css";

export const Cloud = ({ alignments = {}, variant }) => {
  const alignmentsParsed = Object.keys(alignments).reduce(
    (alignmentsParsed, alignmentId) => {
      const alignmentValue = alignments[alignmentId];
      const isHorizontalAlignment =
        alignmentId === "left" || alignmentId === "right";

      return {
        ...alignmentsParsed,
        [alignmentId]: isHorizontalAlignment
          ? `${alignmentValue}vw`
          : `${alignmentValue}vh`,
      };
    },
    {}
  );

  return (
    <div className="cloud--wrapper" style={alignmentsParsed}>
      <span className={`cloud ${variant || "normal"}`} />
    </div>
  );
};
