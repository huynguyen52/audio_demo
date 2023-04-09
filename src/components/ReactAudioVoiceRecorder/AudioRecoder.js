import * as React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import AudioPlayer from "./AudioPlayer";

export default function AudioRecoderComponent() {
  const recorderControls = useAudioRecorder();
  const [src, setSrc] = React.useState("");
  const addAudioElement = (blob) => {
    console.log("blob", blob);
    const url = URL.createObjectURL(blob);
    setSrc(url);
  };

  return (
    <div>
      <AudioRecorder
        audioType="audio/mp3"
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <br />
      <AudioPlayer src={src} />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <br />
    </div>
  );
}
