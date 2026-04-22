import { useState } from "react";
import SpeechControls from "../components/SpeechControls";
import Container from "../components/layout/Container";
import { analyzeSpeech } from "../services/analysisService";
import Card from "../components/ui/Card";
import ConfidenceMeter from "../components/ui/ConfidenceMeter";
import { getFeedback } from "../services/feedbackService";

function Home() {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const res = analyzeSpeech(text, startTime);
    setResult(res);
  };

  const feedback = getFeedback(result.score);
  return (
    <Container>
    <h1 style={{ textAlign: "center" }}>
         Interview Confidence Analyzer
    </h1>

    <SpeechControls
        setText={setText}
        setStartTime={setStartTime}
        onStop={handleAnalyze}
    />

    <Card>
        <h3>Transcript</h3>
        <p>{text || "Start speaking..."}</p>
    </Card>

    {result && (
        <Card>
        <h3>Analysis Result</h3>
        <ConfidenceMeter score={result.score} />
        <p>Words: {result.wordCount}</p>
        <p>WPM: {result.wpm}</p>
        <p>Fillers: {result.fillerCount}</p>

        <p style={{ color: feedback.color }}>
            {feedback.message}
        </p>
        </Card>
    )}
    </Container>
  );
}

export default Home;