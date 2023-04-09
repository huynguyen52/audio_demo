import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const AudioPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleProgress = (progressState) => {
    setPlayed(progressState.played);
  };

  const handleSeek = (newTime) => {
    playerRef.current.seekTo(newTime);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={(e) => setPlayed(parseFloat(e.target.value))}
          onMouseUp={(e) => handleSeek(parseFloat(e.target.value))}
          onTouchEnd={(e) => handleSeek(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => handleSeek(played - 0.05)}>Rewind 5s</button>
        <button onClick={() => handleSeek(played + 0.05)}>Forward 5s</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
