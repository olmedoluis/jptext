import React from "react";

export const FilesViewer = ({ convertedText, file }) => {
  const hasFile = file instanceof File;

  return (
    <div>
      <textarea value={convertedText} onChange={() => {}} />

      {hasFile && (
        <img key={file.name} src={URL.createObjectURL(file)} alt="preview" />
      )}
    </div>
  );
};
