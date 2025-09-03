import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaDownload } from "react-icons/fa"; // Optional: install with npm install react-icons

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Ansh Gupta
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Frontend Developer
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I’m a final-year Computer Science Engineering student at AKGEC with
            a passion for technology, programming, and continuous learning. I
            actively engage in competitive programming on platforms like
            CodeChef and Codeforces, and have strengthened my grasp of
            algorithms and data structures through extensive problem-solving on
            LeetCode.
            <br />
            <br />
            As a budding frontend developer, I enjoy crafting intuitive and
            visually appealing user interfaces using HTML, CSS, JavaScript, and
            React.js. I'm eager to apply my skills in real-world projects,
            collaborate with like-minded individuals, and keep exploring the
            dynamic world of computer science.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="/Ansh-Gupta.pdf"
              className="cta-secondary"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://github.com/AGtheking326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ansh-gupta-014a262ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/Ansh_Gupta326/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/leetcode.svg"
                alt="LeetCode"
                className="social-icon"
              />
            </motion.a>

            <motion.a
              href="https://codeforces.com/profile/anshgutpa326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/codeforces.svg"
                alt="Codeforces"
                className="social-icon"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                minHeight: "300px",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Ansh Gupta",
  role: "Frontend Developer",
  stack: {
    languages: ["JavaScript", "Html", "CSS", "C", "C++"],
    frameworks: ["React", "TailwindCSS"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement: "Turning ideas into interfaces and bugs into features",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
