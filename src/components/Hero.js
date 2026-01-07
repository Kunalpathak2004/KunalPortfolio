import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const data = {
    name: "Kunal Pathak",
    title: "Data Analyst",
    tagline: "Turning data into actionable insights"
  };

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-flex">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/profile.jpg"
              alt="Kunal Pathak"
              className="hero-img"
            />
          </motion.div>

          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1>
                Hello, I'm <span>{data.name}</span>
              </h1>
              <div className="title-divider"></div>
              <h2>{data.title}</h2>
              <p>{data.tagline}</p>
            </motion.div>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a
                href="/Kunal_Pathak_Resume.pdf"
                download="Kunal_Pathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = `
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 40px;
    overflow: hidden;
  }

  .hero-content {
    width: 100%;
    max-width: 1200px;
    padding: 0 5%;
  }

  .hero-flex {
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    gap: 60px;
    margin-bottom: 80px;
  }

  .hero-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-img {
    width: 180px;
    height: 180px;
    border-radius: 12px;
    border: 2px solid #a855f7;
    object-fit: cover;
    box-shadow: 0 8px 32px rgba(168, 85, 247, 0.15);
    transition: all 0.3s ease;
  }

  .hero-img:hover {
    border-color: #9333ea;
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.25);
  }

  .hero-text h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    color: #e5e7eb;
    margin-bottom: 12px;
  }

  .hero-text h1 span {
    color: #a855f7;
    font-weight: 800;
  }

  .title-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #a855f7, #9333ea);
    margin: 16px 0 20px 0;
    border-radius: 2px;
  }

  .hero-text h2 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    color: #a855f7;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .hero-text p {
    font-size: 1.05rem;
    color: #d1d5db;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 500px;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn {
    padding: 12px 28px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    border: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-block;
  }

  .btn-primary {
    background: #a855f7;
    color: white;
  }

  .btn-primary:hover {
    background: #9333ea;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
  }

  .btn-secondary {
    background: transparent;
    border: 2px solid #a855f7;
    color: #a855f7;
  }

  .btn-secondary:hover {
    background: #a855f7;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
  }

  .scroll-indicator {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 50px;
    border: 2px solid #a855f7;
    border-radius: 20px;
    margin: 0 auto;
    position: relative;
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  .scroll-indicator:hover {
    opacity: 1;
  }

  .scroll-wheel {
    width: 6px;
    height: 12px;
    background: #a855f7;
    border-radius: 3px;
    margin: auto;
  }

  @media (max-width: 768px) {
    .hero-flex {
      grid-template-columns: 1fr;
      gap: 40px;
      margin-bottom: 60px;
    }

    .hero-image-wrapper {
      order: -1;
    }

    .hero-img {
      width: 150px;
      height: 150px;
    }

    .hero-text h1 {
      font-size: 2rem;
    }

    .hero-text h2 {
      font-size: 1.3rem;
    }

    .hero-text p {
      font-size: 1rem;
      margin-bottom: 24px;
    }

    .title-divider {
      margin: 12px 0 16px 0;
    }

    .btn {
      padding: 10px 24px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding-top: 60px;
      padding-bottom: 30px;
    }

    .hero-flex {
      gap: 30px;
      margin-bottom: 40px;
    }

    .hero-img {
      width: 130px;
      height: 130px;
    }

    .hero-text h1 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .hero-text h2 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    .hero-text p {
      font-size: 0.95rem;
      margin-bottom: 20px;
    }

    .hero-buttons {
      gap: 12px;
      justify-content: flex-start;
    }

    .btn {
      padding: 9px 20px;
      font-size: 0.85rem;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}