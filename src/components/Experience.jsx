import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 12px 30px rgba(56, 189, 248, 0.5)" }
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-section"
      style={{
        padding: "3rem 1rem",
        backgroundColor: "#1e293b",
        color: "#e2e8f0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.h2
        className="experience-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "2rem",
          color: "white",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience-card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        style={{
          display: "flex",
          alignItems: "center",
          background: "#0f172a",
          borderRadius: "15px",
          padding: "1.5rem",
          boxShadow: "0 8px 20px rgba(56, 189, 248, 0.3)",
          maxWidth: "700px",
          gap: "1.5rem",
          cursor: "default",
        }}
      >
        <div
          className="experience-logo-container"
          style={{
            flexShrink: 0,
            background: "white",
            borderRadius: "12px",
            padding: "0.5rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="/icons/logoelevate.jpg"
            alt="Elevate Labs Logo"
            className="experience-logo"
            style={{
              width: "72px",
              height: "72px",
              objectFit: "contain",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </div>

        <div className="experience-content" style={{ flex: 1 }}>
          <h3
            className="experience-company"
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "0.3rem",
              color: "#38bdf8",
              userSelect: "none",
            }}
          >
            Elevate Labs
          </h3>
          <p
            className="experience-role"
            style={{ fontSize: "1.125rem", marginBottom: "0.3rem", color: "#94a3b8" }}
          >
            Frontend Developer Intern
          </p>
          <span
            className="experience-duration"
            style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "1rem", display: "block" }}
          >
            Aug 2025 – Sep 2025
          </span>

          <ul
            className="experience-points"
            style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#cbd5e1" }}
          >
            <li style={{ marginBottom: "0.5rem", lineHeight: 1.4 }}>
              Developed modern and responsive UIs using React.js ,TailwindCSS,HTML and CSS.
            </li>
            <li style={{ marginBottom: "0.5rem", lineHeight: 1.4 }}>
              Optimized web components for performance and accessibility.
            </li>
            <li style={{ marginBottom: "0.5rem", lineHeight: 1.4 }}>
              Collaborated with cross-functional teams to deliver features faster.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
