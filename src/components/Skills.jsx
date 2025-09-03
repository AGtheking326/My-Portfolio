import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaLayerGroup, FaCogs } from "react-icons/fa";

const categories = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: ["C", "C++", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaLayerGroup />,
    skills: ["React.js", "Vite", "TailwindCSS"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: ["MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    skills: ["Git", "GitHub", "GitHub Desktop", "Vercel", "Netlify"],
  },
  {
    title: "Other Skills",
    icon: <FaCogs />,
    skills: [
      "Data Structures & Algorithms",
      "Responsive Web Design",
      "Object-Oriented Programming",
      "Deployment",
      "Competitive Programming",
    ],
  },
];

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {categories.map((category, idx) => (
          <motion.div
            className="skill-card"
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-header">
              <span className="card-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="card-skills">
              {category.skills.map((skill, index) => (
                <span className="skill-badge" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
