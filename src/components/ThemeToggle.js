import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div style={{ position: "fixed", top: "20px", right: "20px" }}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}
