import React, { useState, useEffect } from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Hero } from './components/Hero';
import Experience from './components/Experience';
import {Achievements} from './components/Achievements';

import { Skills } from './components/Skills';

import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements/>
      <Contact />
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 Ansh Gupta. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
