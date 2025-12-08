import React from "react";
import { motion } from "framer-motion";
import data from "../data";
import "./skills.css";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      <div className="skills-grid">
        {data.skills.map((skill, i) => (
          <motion.div
            className="skill-item"
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
