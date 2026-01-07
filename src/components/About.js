import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="about-container">
        <motion.div
          className="about-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="header-accent" variants={itemVariants}></motion.div>
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants}>
            I'm a passionate <span>Data Analyst</span> and aspiring <span>Data Scientist</span> 
            dedicated to transforming raw data into strategic, actionable insights. I specialize in 
            analyzing, cleaning, and visualizing complex datasets to uncover meaningful trends and 
            drive informed decision-making.
          </motion.p>

          <motion.p variants={itemVariants}>
            My toolkit includes <span>Python</span>, <span>SQL</span>, and <span>Power BI</span> — 
            tools I use to build analytical dashboards and predictive models that enhance business 
            processes. But beyond the technical side, I believe in <span>storytelling through data</span> — 
            translating numbers into narratives that are intuitive, visual, and impactful.
          </motion.p>

          <motion.p variants={itemVariants}>
            Every project reflects my blend of precision, curiosity, and creativity, all channeled 
            toward solving real-world challenges. I'm constantly learning, exploring new methodologies, 
            and pushing the boundaries of what data can reveal.
          </motion.p>
        </motion.div>


      </div>
    </motion.section>
  );
}

const styles = `
  .about-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 5%;
  }

  .about-container {
    max-width: 900px;
    width: 100%;
  }

  .about-header {
    margin-bottom: 60px;
    position: relative;
  }

  .header-accent {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #a855f7, #9333ea);
    border-radius: 2px;
    margin-bottom: 16px;
  }

  .about-section h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: #e5e7eb;
    margin-bottom: 40px;
    line-height: 1.2;
  }

  .about-section h2::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #a855f7;
    margin-top: 12px;
    border-radius: 2px;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 60px;
  }

  .about-content p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #d1d5db;
    font-weight: 400;
  }

  .about-content span {
    color: #a855f7;
    font-weight: 600;
  }



  @media (max-width: 768px) {
    .about-section {
      padding: 80px 5%;
      min-height: auto;
    }

    .about-section h2 {
      font-size: 2rem;
    }

    .about-content p {
      font-size: 1rem;
    }


  }

  @media (max-width: 480px) {
    .about-section {
      padding: 60px 4%;
    }

    .about-header {
      margin-bottom: 40px;
    }

    .about-section h2 {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }

    .about-section h2::after {
      width: 80px;
      height: 3px;
      margin-top: 8px;
    }

    .about-content {
      gap: 18px;
      margin-bottom: 40px;
    }

    .about-content p {
      font-size: 0.95rem;
      line-height: 1.7;
    }


  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}