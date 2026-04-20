import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current.stop();
    setListening(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Interview Confidence Analyzer</h1>

      <button onClick={startListening}>🎤 Start</button>
      <button onClick={stopListening}>⛔ Stop</button>

      <h3>Transcript:</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;