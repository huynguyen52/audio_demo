import React, { useState } from "react";
import RecordRTC from "recordrtc";
import ReactH5PlayerComponent from "../ReactH5Player";
import ReactPlayerComponent from "../ReactPlayer";

const RecordRTCComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const audioRecorder = RecordRTC(stream, {
        type: "audio",
        mimeType: "audio/webm",
      });
      audioRecorder.startRecording();
      setIsRecording(true);
      setRecorder(audioRecorder);
    });
  };

  const pauseRecording = () => {
    recorder.pauseRecording();
  };

  const resumeRecording = () => {
    recorder.resumeRecording();
  };

  const stopRecording = () => {
    recorder.stopRecording(() => {
      setIsRecording(false);
      setAudioUrl(URL.createObjectURL(recorder.getBlob()));
    });
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={pauseRecording} disabled={!isRecording}>
        Pause Recording
      </button>
      <button onClick={resumeRecording} disabled={!isRecording}>
        Resume Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      {audioUrl && <audio src={audioUrl} controls />}
      {audioUrl && <ReactPlayerComponent url={audioUrl} />}
      {audioUrl && <ReactH5PlayerComponent url={audioUrl} />}
    </div>
  );
};

export default RecordRTCComponent;
