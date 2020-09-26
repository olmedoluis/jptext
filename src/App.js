import React, { useCallback, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";
import { FileUploader } from "./components/FileUploader/FileUploader.component";

function App() {
  const [status, setStatus] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const readImage = useCallback(async (file) => {
    setStatus("reading..");

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

  return (
    <div className="App">
      <FileUploader
        onChange={(files) => files.forEach((file) => readImage(file))}
      />

      <p>{convertedText}</p>
      <p>{status}</p>
    </div>
  );
}

export default App;
