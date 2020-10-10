import React from "react";
import "./ImageEmpty.styles.css";
import { ImageAbove } from "../../../../assets/icons/ImageAbove.icon";

export const ImageEmpty = () => {
  return (
    <div className="image-empty--wrapper">
      <ImageAbove />
      <p className="image-empty__title">Upload an Image to start!</p>
      <p className="image-empty__paragraph">Drop your images from above!</p>
    </div>
  );
};
