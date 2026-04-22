function ConfidenceMeter({ score }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          height: "10px",
          width: "100%",
          background: "#334155",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            height: "10px",
            width: `${score}%`,
            background: "#3b82f6",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      <p style={{ marginTop: "5px" }}>Score: {score}</p>
    </div>
  );
}

export default ConfidenceMeter;