import React, { useState, useRef } from "react";
import AudioPlayer from "react-audio-player";

const ReactAudioPlayerComponent = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleSeek = (event) => {
    const seekTime = parseFloat(event.target.value);
    audioRef.current.currentTime = seekTime;
  };

  return (
    <>
      <AudioPlayer
        src={audioUrl}
        ref={audioRef}
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
        onTimeUpdate={handleTimeUpdate}
      />
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleForward}>Forward 5s</button>
        <input
          type="range"
          min={0}
          max={audioRef.current && audioRef.current.duration}
          value={currentTime}
          onChange={handleSeek}
        />
      </div>
    </>
  );
};

export default ReactAudioPlayerComponent;
