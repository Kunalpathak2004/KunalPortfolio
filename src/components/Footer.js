import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-divider"></div>
        
        <div className="footer-text">
          <p>
            © {currentYear} <span className="footer-name">Kunal Pathak</span>. Built with <span className="heart">❤️</span> using <span className="tech">React</span>.
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <span className="divider">•</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <span className="divider">•</span>
          <a href="mailto:your-email@example.com" aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = `
  .footer {
    background: #0a0a0a;
    border-top: 1px solid rgba(168, 85, 247, 0.1);
    padding: 60px 5%;
    margin-top: 80px;
    transition: all 0.3s ease;
  }

  body.light .footer {
    background: #f9fafb;
    border-top-color: rgba(147, 51, 234, 0.15);
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .footer-divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #a855f7, #9333ea);
    margin: 0 auto;
    border-radius: 1px;
  }

  .footer-text {
    text-align: center;
  }

  .footer-text p {
    font-size: 0.95rem;
    color: #9ca3af;
    line-height: 1.6;
    margin: 0;
  }

  body.light .footer-text p {
    color: #6b7280;
  }

  .footer-name {
    color: #a855f7;
    font-weight: 600;
  }

  body.light .footer-name {
    color: #9333ea;
  }

  .heart {
    animation: heartbeat 1.5s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  .tech {
    color: #a855f7;
    font-weight: 600;
  }

  body.light .tech {
    color: #9333ea;
  }

  .footer-socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .footer-socials a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
  }

  body.light .footer-socials a {
    color: #4b5563;
  }

  .footer-socials a:hover {
    color: #a855f7;
  }

  body.light .footer-socials a:hover {
    color: #9333ea;
  }

  .footer-socials a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #a855f7;
    transition: width 0.3s ease;
  }

  body.light .footer-socials a::after {
    background: #9333ea;
  }

  .footer-socials a:hover::after {
    width: 100%;
  }

  .divider {
    color: rgba(168, 85, 247, 0.3);
    font-weight: 300;
  }

  body.light .divider {
    color: rgba(147, 51, 234, 0.3);
  }

  @media (max-width: 768px) {
    .footer {
      padding: 50px 5%;
      margin-top: 60px;
    }

    .footer-content {
      gap: 24px;
    }

    .footer-text p {
      font-size: 0.9rem;
    }

    .footer-socials {
      gap: 16px;
    }

    .footer-socials a {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .footer {
      padding: 40px 4%;
      margin-top: 40px;
    }

    .footer-content {
      gap: 20px;
    }

    .footer-text p {
      font-size: 0.85rem;
    }

    .footer-divider {
      width: 50px;
    }

    .footer-socials {
      gap: 12px;
      flex-direction: column;
    }

    .divider {
      display: none;
    }

    .footer-socials a {
      font-size: 0.8rem;
      display: inline-block;
    }

    .footer-socials a:not(:last-child)::before {
      content: '•';
      margin-right: 12px;
      color: rgba(168, 85, 247, 0.3);
    }

    body.light .footer-socials a:not(:last-child)::before {
      color: rgba(147, 51, 234, 0.3);
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}