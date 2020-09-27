import React from "react";
import "./FileUploader.styles.css";

export const FileUploader = ({ onChange }) => {
  const handleFileSelected = (event) => {
    const [file] = Array.from(event.target.files);

    if (file) {
      onChange(file);
    }
  };

  return (
    <div className="file-uploader--wrapper">
      <input
        className="file-uploader__input"
        type="file"
        onChange={handleFileSelected}
      />

      <p className="file-uploader__title">Drag your images here!</p>

      <p className="file-uploader__sub-title">or click here</p>
    </div>
  );
};
