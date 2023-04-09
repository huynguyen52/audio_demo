import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayer = ({ src }) => (
  <H5AudioPlayer
    autoPlay
    src={src}
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
);

export default AudioPlayer;
