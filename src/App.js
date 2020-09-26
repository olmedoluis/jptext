import React, { useCallback, useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";
import { FileUploader } from "./components/FileUploader/FileUploader.component";

function App() {
  const [status, setStatus] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const readImage = useCallback(async () => {
    const worker = createWorker({
      logger: ({ status }) => setStatus(status),
    });

    await worker.load();

    await worker.loadLanguage("eng");

    await worker.initialize("eng");

    const {
      data: { text },
    } = await worker.recognize(
      "https://tesseract.projectnaptha.com/img/eng_bw.png"
    );

    setConvertedText(text);
    setStatus("Completed!");
  }, []);

  useEffect(() => {
    readImage();
  }, [readImage]);

  return (
    <div className="App">
      <FileUploader />

      <p>{convertedText}</p>
      <p>{status}</p>
    </div>
  );
}

export default App;
