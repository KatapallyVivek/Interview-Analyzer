export function analyzeSpeech(text, startTime) {
  if (!text || !startTime) return null;

  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  const fillers = ["um", "uh", "like", "you know"];
  let fillerCount = 0;

  words.forEach((word) => {
    if (fillers.includes(word.toLowerCase())) {
      fillerCount++;
    }
  });

  const timeTaken = (Date.now() - startTime) / 1000; // seconds
  const wpm = Math.round((wordCount / timeTaken) * 60);

  let score = 100;

  score -= fillerCount * 2;

  if (wpm < 100 || wpm > 180) {
    score -= 10;
  }

  if (score < 0) score = 0;

  return {
    wordCount,
    fillerCount,
    wpm,
    score,
  };
}