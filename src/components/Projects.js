import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="header-accent"></div>
          <h2>Projects</h2>
          <p>Exploring data-driven solutions through analytics and insights</p>
        </motion.div>

        <motion.div
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data.projects.map((proj, i) => (
            <motion.div
              className="project-card"
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
                <div className="image-overlay"></div>
              </div>

              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <motion.button
                    className="github-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                    <span className="arrow">→</span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const styles = `
  .projects-section {
    min-height: 100vh;
    padding: 100px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }

  body.light .projects-section {
    background-color: #ffffff;
  }

  .projects-container {
    max-width: 1200px;
    width: 100%;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .header-accent {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #a855f7, #9333ea);
    border-radius: 2px;
    margin: 0 auto 20px;
  }

  .projects-section h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: #e5e7eb;
    margin-bottom: 16px;
  }

  body.light .projects-section h2 {
    color: #1f2937;
  }

  .projects-header p {
    font-size: 1.1rem;
    color: #9ca3af;
    margin-top: 12px;
  }

  body.light .projects-header p {
    color: #6b7280;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
  }

  .project-card {
    background: rgba(168, 85, 247, 0.05);
    border: 1px solid rgba(168, 85, 247, 0.15);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body.light .project-card {
    background: rgba(147, 51, 234, 0.06);
    border-color: rgba(147, 51, 234, 0.18);
  }

  .project-card:hover {
    border-color: rgba(168, 85, 247, 0.4);
    background: rgba(168, 85, 247, 0.08);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15);
  }

  body.light .project-card:hover {
    border-color: rgba(147, 51, 234, 0.45);
    background: rgba(147, 51, 234, 0.1);
    box-shadow: 0 12px 40px rgba(147, 51, 234, 0.18);
  }

  .project-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.4s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.08);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.4) 100%);
    pointer-events: none;
  }

  body.light .image-overlay {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  }

  .project-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #e5e7eb;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  body.light .project-card h3 {
    color: #1f2937;
  }

  .project-card p {
    font-size: 0.95rem;
    color: #d1d5db;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  body.light .project-card p {
    color: #4b5563;
  }

  .project-link {
    text-decoration: none;
    display: inline-block;
  }

  .github-btn {
    background: linear-gradient(135deg, #a855f7, #9333ea);
    color: white;
    border: none;
    padding: 11px 20px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  body.light .github-btn {
    background: linear-gradient(135deg, #9333ea, #7e22ce);
  }

  .github-btn:hover {
    box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
  }

  body.light .github-btn:hover {
    box-shadow: 0 8px 20px rgba(147, 51, 234, 0.35);
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .github-btn:hover .arrow {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    .projects-section {
      padding: 80px 5%;
    }

    .projects-header {
      margin-bottom: 60px;
    }

    .projects-section h2 {
      font-size: 2rem;
      margin-bottom: 12px;
    }

    .projects-header p {
      font-size: 1rem;
    }

    .project-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .project-image {
      height: 180px;
    }

    .project-content {
      padding: 20px;
    }

    .project-card h3 {
      font-size: 1.1rem;
    }

    .project-card p {
      font-size: 0.9rem;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 480px) {
    .projects-section {
      padding: 60px 4%;
    }

    .projects-header {
      margin-bottom: 40px;
    }

    .projects-section h2 {
      font-size: 1.5rem;
    }

    .projects-header p {
      font-size: 0.95rem;
    }

    .project-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .project-image {
      height: 160px;
    }

    .project-content {
      padding: 16px;
    }

    .project-card h3 {
      font-size: 1rem;
      margin-bottom: 8px;
    }

    .project-card p {
      font-size: 0.85rem;
      margin-bottom: 12px;
    }

    .github-btn {
      padding: 9px 16px;
      font-size: 0.85rem;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}