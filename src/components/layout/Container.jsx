function Container({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a", // dark blue
        color: "#fff",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;