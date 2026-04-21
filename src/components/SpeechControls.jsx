import { useRef } from "react";
import Button from "./ui/Button";

function SpeechControls({ setText, setStartTime, onStop }) {
  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("Not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript);
    };

    recognition.start();
    recognitionRef.current = recognition;

    setStartTime(Date.now()); // start timer
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    onStop(); // trigger analysis
  };

  return (
    <div>
      <Button onClick={startListening}> Start</Button>
      <Button onClick={stopListening}> Stop & Analyze</Button>
    </div>
  );
}

export default SpeechControls;