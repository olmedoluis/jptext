import React, { useEffect, useState } from "react";
import { IconButton } from "../IconButton/IconButton.component";
import { SelectInput } from "../SelectInput/SelectInput.component";
import "./FilesViewer.styles.css";
import { Copy } from "../../assets/icons/Copy.icon";

const defaultImageUrl =
  "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

const inputWithConvertedDataId = "converted-data-viewer";

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

  const copyConvertedText = () => {
    const inputWithConvertedData = document.getElementById(
      inputWithConvertedDataId
    );

    if (inputWithConvertedData) {
      inputWithConvertedData.select();

      document.execCommand("copy");
    }
  };

  return (
    <div className="files-viewer--wrapper">
      <div className="files-viewer__content files-viewer__text-input--wrapper">
        <div className="files-viewer__text-input__options">
          <SelectInput
            className="files-select"
            options={fileNames}
            onChange={changeSelectedFile}
            defaultValue={selectedFile.name}
          />

          <IconButton icon={<Copy />} onClick={copyConvertedText} />
        </div>

        <textarea
          id={inputWithConvertedDataId}
          className="files-viewer__text-input"
          value={selectedFile.convertedText || ""}
          onChange={() => {}}
          placeholder="Converted data is shown here!"
          disabled
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
