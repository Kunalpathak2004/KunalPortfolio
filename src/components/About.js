import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Overview</h2>
      <p>
        I am a passionate <strong>Data Analyst</strong> and aspiring <strong>Data Scientist</strong> 
        focused on turning raw data into strategic insights. I specialize in analyzing, cleaning, 
        and visualizing large datasets to uncover trends and drive decision-making. I enjoy 
        leveraging tools like <strong>Python</strong>, <strong>SQL</strong>, and <strong>Power BI</strong> 
        to build analytical dashboards and predictive models that make business processes smarter.
      </p>
      <p>
        Beyond technical skills, I believe in storytelling through data — communicating results in 
        ways that are intuitive, visual, and impactful. My work reflects a blend of precision, 
        curiosity, and creativity, aligned toward solving real-world data challenges.
      </p>
    </motion.section>
  );
}
