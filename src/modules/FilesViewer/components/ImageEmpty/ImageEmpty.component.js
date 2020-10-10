import React from "react";
import "./ImageEmpty.styles.css";
import { ImageAbove } from "../../../../assets/icons/ImageAbove.icon";

export const ImageEmpty = () => {
  return (
    <div className="image-empty--wrapper">
      <ImageAbove />
      <h2>Upload an Image to start!</h2>
      <p>Drop your images from above!</p>
    </div>
  );
};
