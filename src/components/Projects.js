import React from "react";
import { motion } from "framer-motion";
import data from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Some of my analytics and data-driven implementations:
      </motion.p>

      <div className="project-grid">
        {data.projects.map((proj, i) => (
          <motion.div
            className="project-card"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.1 }}>
                View on GitHub
              </motion.button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
