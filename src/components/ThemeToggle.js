import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

const styles = `
  .theme-toggle-btn {
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: #e5e7eb;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    white-space: nowrap;
  }

  .theme-toggle-btn:hover {
    background: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.5);
    color: #a855f7;
  }

  body.light .theme-toggle-btn {
    background: rgba(147, 51, 234, 0.12);
    border-color: rgba(147, 51, 234, 0.35);
    color: #1f2937;
  }

  body.light .theme-toggle-btn:hover {
    background: rgba(147, 51, 234, 0.2);
    border-color: rgba(147, 51, 234, 0.6);
    color: #7e22ce;
  }

  @media (max-width: 768px) {
    .theme-toggle-btn {
      width: 100%;
      padding: 0.75rem 5%;
      border-radius: 0;
      border: none;
      background: none;
      border-top: 1px solid rgba(168, 85, 247, 0.1);
      text-align: left;
    }

    body.light .theme-toggle-btn {
      border-top-color: rgba(147, 51, 234, 0.15);
    }

    .theme-toggle-btn:hover {
      background: rgba(168, 85, 247, 0.1);
    }

    body.light .theme-toggle-btn:hover {
      background: rgba(147, 51, 234, 0.1);
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}