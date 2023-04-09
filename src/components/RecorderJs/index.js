// import { useState } from "react";
// import { Recorder } from "recorder-js";

// const RecorderJsComponent = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioData, setAudioData] = useState([]);

//   const recorder = new Recorder(window.AudioContext);

//   const startRecording = async () => {
//     await recorder.start();
//     setIsRecording(true);
//   };

//   const stopRecording = async () => {
//     const audio = await recorder.stop();
//     setIsRecording(false);
//     setAudioData(audio);
//   };

//   return (
//     <div>
//       <button onClick={startRecording} disabled={isRecording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         Stop Recording
//       </button>
//       <audio src={audioData} controls />
//     </div>
//   );
// };

// export default RecorderJsComponent;
