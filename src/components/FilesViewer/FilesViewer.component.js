import React from "react";
import { SelectInput } from "../SelectInput/SelectInput.component";
import "./FilesViewer.styles.css";

export const FilesViewer = ({ convertedText, file }) => {
  const hasFile = file instanceof File;
  const imageSource = hasFile
    ? URL.createObjectURL(file)
    : "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

  return (
    <div className="files-viewer--wrapper">
      <div className="files-viewer__content files-viewer__text-input--wrapper">
        <SelectInput />
        <textarea
          className="files-viewer__text-input"
          value={convertedText}
          onChange={() => {}}
          placeholder="Converted data is shown here!"
        />
      </div>

      <div className="files-viewer__preview--wrapper files-viewer__content">
        <img
          className="files-viewer__preview"
          src={imageSource}
          alt="preview"
        />
      </div>
    </div>
  );
};
