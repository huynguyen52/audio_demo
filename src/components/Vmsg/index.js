import React, { useState } from "react";
import vmsg from "vmsg";

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
});

const VmsgRecoder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);

  const record = async () => {
    setIsLoading(true);

    if (isRecording) {
      const blob = await recorder.stopRecording();
      setIsLoading(false);
      setIsRecording(false);
      setRecordings([...recordings, URL.createObjectURL(blob)]);
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();
        setIsLoading(false);
        setIsRecording(true);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <button disabled={isLoading} onClick={record}>
        {isRecording ? "Stop" : "Record"}
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {recordings.map((url) => (
          <li key={url}>
            <audio src={url} controls />
          </li>
        ))}
      </ul>
    </>
  );
};

export default VmsgRecoder;
