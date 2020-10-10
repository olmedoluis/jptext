import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "../../shared-components/IconButton/IconButton.component";
import { SelectInput } from "../../shared-components/SelectInput/SelectInput.component";
import { Copy } from "../../assets/icons/Copy.icon";
import "./FilesViewer.styles.css";
import { TextBox } from "./components/TextBox/TextBox.component";

const defaultImageUrl =
  "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

export const FilesViewer = ({ files, isLoading }) => {
  const [selectedFile, setSelectedFile] = useState({});
  const inputWithConvertedData = useRef(null);

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
    const input = inputWithConvertedData && inputWithConvertedData.current;

    if (input) {
      input.select();

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

          <IconButton
            icon={<Copy />}
            onClick={copyConvertedText}
            toolTipText="Copied!"
          />
        </div>

        <TextBox
          boxRef={inputWithConvertedData}
          text={selectedFile.convertedText}
          isLoading={isLoading}
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
