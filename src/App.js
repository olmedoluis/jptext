import React, { useCallback, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";
import { FileUploader } from "./components/FileUploader/FileUploader.component";
import { FilesViewer } from "./components/FilesViewer/FilesViewer.component";
import { JPTextHeader } from "./modules/JPTextHeader/JPTextHeader.component";
import { Progressbar } from "./components/Progressbar/Progressbar.component";
import { Cloud } from "./components/Cloud/Cloud.component";
import { JPTextFooter } from "./modules/JPTextFooter/JPTextFooter.component";

function App() {
  const [status, setStatus] = useState({
    progress: 0,
    status: "Upload your file to start!",
  });
  const [convertedText, setConvertedText] = useState("");
  const [files, setFiles] = useState([]);

  const readImage = useCallback(async (file) => {
    const worker = createWorker({
      logger: ({ status, progress }) =>
        setStatus({ status, progress: progress.toFixed() * 100 }),
    });

    await worker.load();

    await worker.loadLanguage("eng");

    await worker.initialize("eng");

    const {
      data: { text },
    } = await worker.recognize(file);

    setConvertedText(text);
    setStatus({ status: "Completed!", progress: 100 });

    setFiles((oldFiles) => {
      return oldFiles.map((oldFile) => {
        const isConvertedFile = oldFile.name === file.name;

        if (isConvertedFile) {
          file.convertedText = text;
        }

        return isConvertedFile ? file : oldFile;
      });
    });
  }, []);

  const onFileUpload = (file) => {
    const filesFiltered = files.filter(({ name }) => name !== file.name);

    readImage(file);

    setFiles([...filesFiltered, file]);
  };

  return (
    <>
      <Cloud alignments={{ top: 38, left: -15 }} variant="normal" />
      <Cloud alignments={{ top: 10, left: 60 }} variant="short-top" />

      <div className="App">
        <JPTextHeader />

        <FileUploader onChange={onFileUpload} />

        <Progressbar {...status} />

        <FilesViewer convertedText={convertedText} files={files} />
      </div>

      <JPTextFooter />
    </>
  );
}

export default App;
