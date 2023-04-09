import React, { useState } from "react";
import AudioRecorder from "react-audio-recorder";

const ReactAudioRecoder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState(null);

  const handleStart = () => {
    setIsRecording(true);
  };

  const handleStop = (data) => {
    setIsRecording(false);
    setBlobURL(data.url);
  };

  return (
    <div>
      <AudioRecorder
        onStart={handleStart}
        onStop={handleStop}
        mimeType="audio/webm"
        audioBitsPerSecond={128000}
        constraints={{ audio: true }}
      />
      {isRecording && <p>Recording...</p>}
      {blobURL && <audio src={blobURL} controls />}
    </div>
  );
};

export default ReactAudioRecoder;
