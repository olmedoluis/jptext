import React from "react";
import "./FilesViewer.styles.css";

export const FilesViewer = ({ convertedText, file }) => {
  const hasFile = file instanceof File;
  const imageSource = hasFile
    ? URL.createObjectURL(file)
    : "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

  return (
    <div className="files-viewer--wrapper">
      <textarea
        className="files-viewer__text-input files-viewer__content"
        value={convertedText}
        onChange={() => {}}
      />

      <div className="files-viewer__preview--wrapper files-viewer__content">
        <img
          className="files-viewer__preview"
          key={file.name}
          src={imageSource}
          alt="preview"
        />
      </div>
    </div>
  );
};
