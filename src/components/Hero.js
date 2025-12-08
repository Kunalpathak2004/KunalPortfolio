import React from "react";
import { motion } from "framer-motion";
import data from "../data";
import "./Hero.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className="hero-flex">
                    <motion.img
                        src={profile}
                        alt="Kunal Pathak"
                        className="hero-img"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <div className="hero-text">
                        <h1>
                            Hi, I'm <span>{data.name}</span>
                        </h1>
                        <h2>{data.title}</h2>
                        <p>{data.tagline}</p>
                        <div className="hero-buttons">
                        <a href="#contact">
                            <button>Contact Me</button>
                        </a>
                        <a
                            href="/Kunal_Pathak_Resume.pdf"
                            download="Kunal_Pathak_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="resume-btn">Download Resume</button>
                        </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                >
                    <div className="scroll-wheel"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}
