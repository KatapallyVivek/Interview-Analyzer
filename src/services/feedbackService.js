export function getFeedback(score) {
  if (score >= 80) {
    return {
      message: "Excellent communication! Very confident.",
      color: "#22c55e", 
    };
  } else if (score >= 60) {
    return {
      message: "Good, but you can improve fluency.",
      color: "#eab308", 
    };
  } else {
    return {
      message: "Needs improvement. Practice speaking clearly.",
      color: "#ef4444", 
    };
  }
}