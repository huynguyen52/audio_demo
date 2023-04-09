import logo from "./logo.svg";
import "./App.css";
import ReactAudioRecoder from "./components/ReactAudioRecorder";
import VmsgRecoder from "./components/Vmsg";
import RecorderJsComponent from "./components/RecorderJs";
import RecordRTCComponent from "./components/RecordRTC";
// import AudioRecoderComponent from "./components/ReactAudioVoiceRecorder/AudioRecoder";

function App() {
  return (
    <div className="App">
      {/* <AudioRecoderComponent /> */}
      {/* Cannot start in local */}
      {/* <ReactAudioRecoder /> */}
      {/* dont have pause and resume func */}
      {/* <VmsgRecoder /> */}
      {/* repo has been archived */}
      {/* <RecorderJsComponent />  */}
      <RecordRTCComponent />
    </div>
  );
}

export default App;
