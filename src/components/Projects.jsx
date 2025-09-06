import { motion } from "framer-motion";

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

export const Projects = () => {
  const projects = [
    {
      title: "React Review Page",
      image: "/projects/React-Review-page.png",
      description:
        "A simple review page built with React 19 to display user testimonials and ratings.",
      tech: ["React 19", "React Router", "TailwindCSS"],
      link: "https://github.com/AGtheking326/review-page",
    },
    {
      title: "BuddyAI",
      image: "/projects/BuddyAI.png",
      description:
        "A Gemini-like chat assistant built with AI capabilities for natural language conversation.",
      tech: ["React", "Gemini API", "TailwindCSS"],
      link: "https://github.com/AGtheking326/BuddyAI",
    },
    {
      title: "GitHub Account Finder",
      image: "/projects/Githubfinder.png",
      description:
        "Search and view detailed GitHub profiles using the GitHub REST API.",
      tech: ["React", "GitHub API", "Axios"],
      link: "https://github.com/AGtheking326/githubfinder",
    },
    {
      title: "Animated Website (GSAP)",
      image: "/projects/GSAP-Animated.png",
      description:
        "A scroll-animated website built with GSAP, focusing on engaging transitions and visuals.",
      tech: ["GSAP", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/AGtheking326/animated-website",
    },
    {
      title: "Cybervisor Landing Page",
      image: "/projects/CyberVisor.png",
      description:
        "A 3D landing page for a tech product, built with Three.js for immersive experience.",
      tech: ["Three.js", "React", "TailwindCSS"],
      link: "https://github.com/AGtheking326/cyber-visor",
    },
    {
      title: "Image Enhancer",
      image: "/projects/ImageEnhancer.png", 
      description:
        "An AI-powered web app that lets users upload an image and enhance it using an external API. Features dark mode, real-time previews, and a smooth UI.",
      tech: ["React (Vite)", "TailwindCSS", "Axios", "Framer Motion"],
      link: "https://github.com/AGtheking326/ImageEnhancer",
      liveLink: "https://image-enhancer-opal.vercel.app/" 
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            style={{ textDecoration: "none" }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: `url('${project.image}')` }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((techItem, i) => (
                <span key={i}>{techItem}</span>
              ))}
            </div>
            <div style={{ padding: "1.5rem" }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary"
                style={{ marginTop: "1rem", display: "inline-block" }}
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
              {/* Optional: live demo button */}
              {/* <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
                style={{ marginLeft: "1rem", display: "inline-block" }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a> */}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};
