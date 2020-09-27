import React, { useEffect, useState } from "react";
import { SelectInput } from "../SelectInput/SelectInput.component";
import "./FilesViewer.styles.css";

const defaultImageUrl =
  "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

export const FilesViewer = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState({});

  const hasFile = selectedFile instanceof File;

  const fileNames = files.map(({ name }) => name);
  const imageSource = hasFile
    ? URL.createObjectURL(selectedFile)
    : defaultImageUrl;

  const changeSelectedFile = (fileName) => {
    const fileSelected = files.find(({ name }) => name === fileName);

    if (fileSelected) {
      setSelectedFile(fileSelected);
    }
  };

  useEffect(() => {
    const lastFileUploaded = files[files.length - 1];

    if (lastFileUploaded) {
      setSelectedFile(lastFileUploaded);
    }
  }, [files]);

  return (
    <div className="files-viewer--wrapper">
      <div className="files-viewer__content files-viewer__text-input--wrapper">
        <SelectInput
          options={fileNames}
          onChange={changeSelectedFile}
          defaultValue={selectedFile.name}
        />
        <textarea
          className="files-viewer__text-input"
          value={selectedFile.convertedText || ""}
          onChange={() => {}}
          placeholder="Converted data is shown here!"
        />
      </div>

      <div className="files-viewer__preview--wrapper files-viewer__content">
        <p className="files-viewer__title">Preview</p>
        <img
          className="files-viewer__preview"
          src={imageSource}
          alt="preview"
        />
      </div>
    </div>
  );
};
