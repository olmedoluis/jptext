import React, { useCallback, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";
import { FileUploader } from "./components/FileUploader/FileUploader.component";
import { FilesViewer } from "./components/FilesViewer/FilesViewer.component";
import { JPTextHeader } from "./modules/JPTextHeader/JPTextHeader.component";

function App() {
  const [status, setStatus] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [file, setFile] = useState({});

  const readImage = useCallback(async (file) => {
    const worker = createWorker({
      logger: ({ status }) => setStatus(status),
    });

    await worker.load();

    await worker.loadLanguage("eng");

    await worker.initialize("eng");

    const {
      data: { text },
    } = await worker.recognize(file);

    setConvertedText(text);
    setStatus("Completed!");
  }, []);

  const onFileUpload = (file) => {
    readImage(file);

    setFile(file);
  };

  return (
    <div className="App">
      <JPTextHeader />

      <FileUploader onChange={onFileUpload} />

      <FilesViewer convertedText={convertedText} file={file} />

      <p>{status}</p>
    </div>
  );
}

export default App;
