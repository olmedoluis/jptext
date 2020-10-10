import React, { useCallback, useState } from "react";
import { createWorker } from "tesseract.js";
import { FileUploader } from "../../modules/FileUploader/FileUploader.component";
import { FilesViewer } from "../../modules/FilesViewer/FilesViewer.component";
import { JPTextHeader } from "../../modules/JPTextHeader/JPTextHeader.component";
import { Progressbar } from "../../shared-components/Progressbar/Progressbar.component";
import { Cloud } from "../../shared-components/Cloud/Cloud.component";
import { JPTextFooter } from "../../modules/JPTextFooter/JPTextFooter.component";
import "./Home.styles.css";

const elementIdToScroll = "scrolled-element";

export const Home = () => {
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
    const elementToScroll = document.getElementById(elementIdToScroll);

    readImage(file);

    elementToScroll.scrollIntoView({ behavior: "smooth" });

    setFiles([...filesFiltered, file]);
  };

  return (
    <>
      <Cloud alignments={{ top: 38, left: -15 }} variant="normal" />
      <Cloud alignments={{ top: 10, left: 60 }} variant="short-top" />

      <div className="App">
        <JPTextHeader />

        <FileUploader onChange={onFileUpload} />

        <Progressbar id={elementIdToScroll} {...status} />

        <FilesViewer convertedText={convertedText} files={files} />
      </div>

      <JPTextFooter />
    </>
  );
};
