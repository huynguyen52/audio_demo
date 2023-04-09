import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const ReactH5PlayerComponent = ({ url }) => {
  const audioPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {
    audioPlayer.current.audio.current.play();
  };

  const handlePause = () => {
    audioPlayer.current.audio.current.pause();
  };

  const handleForward = () => {
    audioPlayer.current.audio.current.currentTime += 5;
  };

  const handleBackward = () => {
    audioPlayer.current.audio.current.currentTime -= 5;
  };

  const handleSeek = (e) => {
    audioPlayer.current.audio.current.currentTime = e.target.value;
    setCurrentTime(audioPlayer.current.audio.current.currentTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioPlayer.current.audio.current.currentTime);
  };

  return (
    <div>
      <AudioPlayer
        ref={audioPlayer}
        src={url}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        onTimeUpdate={handleTimeUpdate}
      />
      <div>
        <button onClick={handleBackward}>Backward 5s</button>
        <button onClick={handleForward}>Forward 5s</button>
        <input
          type="range"
          min="0"
          max={
            audioPlayer.current ? audioPlayer.current.audio.current.duration : 0
          }
          value={currentTime}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default ReactH5PlayerComponent;
