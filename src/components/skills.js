import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="header-accent"></div>
          <h2>Skills & Tools</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data.skills.map((skill, i) => (
            <motion.div
              className="skill-item"
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 24px rgba(168, 85, 247, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

const styles = `
  .skills-section {
    background: #0a0a0a;
    padding: 80px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }

  body.light .skills-section {
    background: #ffffff;
  }

  .skills-container {
    max-width: 1000px;
    width: 100%;
  }

  .skills-header {
    text-align: center;
    margin-bottom: 70px;
  }

  .header-accent {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #a855f7, #9333ea);
    border-radius: 2px;
    margin: 0 auto 20px;
  }

  .skills-section h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: #e5e7eb;
    margin-bottom: 12px;
  }

  body.light .skills-section h2 {
    color: #1f2937;
  }

  .skills-header p {
    font-size: 1.05rem;
    color: #9ca3af;
    margin-top: 12px;
  }

  body.light .skills-header p {
    color: #6b7280;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .skill-item {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(147, 51, 234, 0.1));
    border: 1.5px solid rgba(168, 85, 247, 0.3);
    color: #e5e7eb;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    white-space: nowrap;
  }

  body.light .skill-item {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.05));
    border-color: rgba(147, 51, 234, 0.35);
    color: #1f2937;
  }

  .skill-item:hover {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(147, 51, 234, 0.2));
    border-color: rgba(168, 85, 247, 0.6);
    color: #a855f7;
  }

  body.light .skill-item:hover {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.15));
    border-color: rgba(147, 51, 234, 0.7);
    color: #9333ea;
  }

  .skill-item span {
    display: block;
  }

  @media (max-width: 768px) {
    .skills-section {
      padding: 80px 5%;
    }

    .skills-header {
      margin-bottom: 50px;
    }

    .skills-section h2 {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .skills-header p {
      font-size: 1rem;
    }

    .skills-grid {
      gap: 14px;
    }

    .skill-item {
      padding: 11px 22px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .skills-section {
      padding: 60px 4%;
    }

    .skills-header {
      margin-bottom: 40px;
    }

    .skills-section h2 {
      font-size: 1.5rem;
    }

    .skills-header p {
      font-size: 0.95rem;
    }

    .skills-grid {
      gap: 12px;
    }

    .skill-item {
      padding: 10px 20px;
      font-size: 0.85rem;
      border-radius: 6px;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}