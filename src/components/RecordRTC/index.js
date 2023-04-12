import React, { useEffect, useRef, useState } from "react";
import RecordRTC from "recordrtc";
import ReactH5PlayerComponent from "../ReactH5Player";
import ReactPlayerComponent from "../ReactPlayer";

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const RecordRTCComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const audioRecorder = RecordRTC(stream, {
        type: "audio",
        mimeType: "audio/webm",
        recorderType: RecordRTC.StereoAudioRecorder,
        // by deafuault 128 kbps (128000 bits per second)
        audioBitsPerSecond: 256000,
        // the range 22050 to 96000.
        // by default 44100Hz
        desiredSampRate: 48000,
      });
      audioRecorder.startRecording();

      setIsRecording(true);
      setIsPaused(false);
      setRecorder(audioRecorder);
    });
  };

  const pauseRecording = () => {
    recorder.pauseRecording();
    setIsPaused(true);
  };

  const resumeRecording = () => {
    recorder.resumeRecording();
    setIsPaused(false);
  };
  const randomStr = () => (Math.random() + 1).toString(36).substring(7);

  const stopRecordingCallback = () => {
    console.log(111, "recoder", recorder);
    console.log(111, "blob", recorder.getBlob());
    recorder.save(`recorded_audio_${randomStr()}.mp3`);
    setIsRecording(false);
    setAudioUrl(URL.createObjectURL(recorder.getBlob()));
    setIsPaused(false);
  };

  const stopRecording = () => {
    recorder.stopRecording(() => {
      console.log(111, "recoder", recorder);
      console.log(111, "blob", recorder.getBlob());
      recorder.save(`recorded_audio_${randomStr()}.mp3`);
      setIsRecording(false);
      setAudioUrl(URL.createObjectURL(recorder.getBlob()));
      setIsPaused(false);
    });
  };

  // useEffect(() => {
  //   if (recorder) {
  //     const x = 10;
  //     const recordingDuration = 1000 * 60 * x; // 5 seconds

  //     recorder
  //       .setRecordingDuration(recordingDuration)
  //       .onRecordingStopped(stopRecordingCallback);
  //   }
  // }, [recorder]);

  return (
    <div>
      {!isRecording && (
        <button onClick={startRecording}>Start Recording</button>
      )}
      {isRecording && !isPaused && (
        <button onClick={pauseRecording}>Pause Recording</button>
      )}
      {isRecording && isPaused && (
        <button onClick={resumeRecording}>Resume Recording</button>
      )}
      {isRecording && <button onClick={stopRecording}>Stop Recording</button>}
      {/* <div>{formatTime(time)}</div> */}
      {audioUrl && <audio src={audioUrl} controls />}
      {audioUrl && <ReactPlayerComponent url={audioUrl} />}
      {audioUrl && <ReactH5PlayerComponent url={audioUrl} />}
    </div>
  );
};

export default RecordRTCComponent;
