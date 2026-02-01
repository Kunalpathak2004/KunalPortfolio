import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="contact-container">
        <div className="header-accent"></div>
        <h2>Contact Me</h2>
        <p className="contact-subtitle">Let's work together</p>
        
        <form
          action="https://formspree.io/f/xnnebzaw"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.section>
  );
}

const styles = `
  .contact-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 5%;
    transition: background-color 0.3s ease;
  }

  body.light .contact-section {
    background-color: #ffffff;
  }

  .contact-container {
    max-width: 600px;
    width: 100%;
    text-align: center;
  }

  .header-accent {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #a855f7, #9333ea);
    border-radius: 2px;
    margin: 0 auto 20px;
  }

  .contact-section h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: #e5e7eb;
    margin-bottom: 12px;
  }

  body.light .contact-section h2 {
    color: #1f2937;
  }

  .contact-subtitle {
    font-size: 1.1rem;
    color: #9ca3af;
    margin-bottom: 50px;
  }

  body.light .contact-subtitle {
    color: #6b7280;
  }

  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 14px 16px;
    border-radius: 8px;
    border: 1.5px solid rgba(168, 85, 247, 0.3);
    background-color: rgba(168, 85, 247, 0.05);
    color: #e5e7eb;
    outline: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  body.light .contact-form input,
  body.light .contact-form textarea {
    background-color: rgba(147, 51, 234, 0.07);
    border-color: rgba(147, 51, 234, 0.35);
    color: #1f2937;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: #6b7280;
  }

  body.light .contact-form input::placeholder,
  body.light .contact-form textarea::placeholder {
    color: #9ca3af;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: rgba(168, 85, 247, 0.6);
    background-color: rgba(168, 85, 247, 0.1);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  }

  body.light .contact-form input:focus,
  body.light .contact-form textarea:focus {
    border-color: rgba(147, 51, 234, 0.7);
    background-color: rgba(147, 51, 234, 0.12);
    box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
  }

  .contact-form button {
    background: linear-gradient(135deg, #a855f7, #9333ea);
    color: #fff;
    padding: 14px 28px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  body.light .contact-form button {
    background: linear-gradient(135deg, #9333ea, #7e22ce);
  }

  .contact-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(168, 85, 247, 0.3);
  }

  body.light .contact-form button:hover {
    box-shadow: 0 8px 24px rgba(147, 51, 234, 0.35);
  }

  .contact-form button:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .contact-section {
      padding: 80px 5%;
      min-height: auto;
    }

    .contact-section h2 {
      font-size: 2rem;
    }

    .contact-subtitle {
      font-size: 1rem;
      margin-bottom: 40px;
    }

    .contact-form {
      gap: 12px;
    }

    .contact-form input,
    .contact-form textarea {
      padding: 12px 14px;
      font-size: 0.9rem;
    }

    .contact-form button {
      padding: 12px 24px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .contact-section {
      padding: 60px 4%;
    }

    .contact-section h2 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .contact-subtitle {
      font-size: 0.95rem;
      margin-bottom: 30px;
    }

    .contact-form {
      gap: 10px;
    }

    .contact-form input,
    .contact-form textarea {
      padding: 11px 12px;
      font-size: 0.85rem;
      border-radius: 6px;
    }

    .contact-form button {
      padding: 11px 20px;
      font-size: 0.85rem;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}