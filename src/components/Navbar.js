import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Kunal Pathak | Data Analyst</div>
        
        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(8px);
    z-index: 999;
    border-bottom: 1px solid rgba(168, 85, 247, 0.1);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .nav-logo {
    font-weight: 700;
    color: #a855f7;
    font-size: 1.25rem;
    white-space: nowrap;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: #e5e7eb;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-links a:hover {
    color: #a855f7;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #a855f7;
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background: none;
    border: none;
    gap: 6px;
    padding: 8px;
  }

  .hamburger span {
    width: 28px;
    height: 3px;
    background: #a855f7;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .nav-container {
      padding: 1rem 4%;
    }

    .nav-logo {
      font-size: 1.1rem;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(10, 10, 10, 0.98);
      flex-direction: column;
      gap: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      border-bottom: 1px solid rgba(168, 85, 247, 0.1);
    }

    .nav-links.active {
      max-height: 300px;
    }

    .nav-links li {
      padding: 1rem 0;
      border-top: 1px solid rgba(168, 85, 247, 0.1);
    }

    .nav-links a {
      display: block;
      padding: 0 5%;
      font-size: 1rem;
    }

    .nav-links a::after {
      display: none;
    }

    .nav-links a:active {
      color: #a855f7;
    }
  }

  @media (max-width: 480px) {
    .nav-container {
      padding: 0.75rem 4%;
    }

    .nav-logo {
      font-size: 0.95rem;
    }

    .hamburger span {
      width: 24px;
    }

    .nav-links li {
      padding: 0.75rem 0;
    }
  }

  body {
    padding-top: 60px;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}