function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 18px",
        margin: "10px",
        border: "none",
        borderRadius: "8px",
        background: "#3b82f6",
        color: "#fff",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;