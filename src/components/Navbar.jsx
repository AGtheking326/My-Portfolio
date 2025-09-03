import { motion } from "framer-motion";
import { useState } from "react";

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

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo-with-profile"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/profile.jpeg" alt="Profile" className="profile-avatar" />
        <span className="logo-text">Ansh Gupta</span>
      </motion.div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {["home", "projects", "skills", "experience", "achievements", "contact"].map((item) => (
          <motion.li
            key={item}
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(false)}
          >
            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
