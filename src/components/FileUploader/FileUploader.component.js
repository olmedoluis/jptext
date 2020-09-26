import React from "react";

export const FileUploader = ({ onChange }) => {
  const handleFileSelected = (event) => {
    const files = Array.from(event.target.files);

    onChange(files);
  };

  return <input type="file" onChange={handleFileSelected} />;
};
