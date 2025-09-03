import React from 'react';
import { motion } from 'framer-motion';

export const Achievements = () => {
  const achievementList = [
    { icon: '💻', text: 'Solved 660+ questions on LeetCode, 627 problems on Codeforces and 500+ problems on CodeChef' },
    { icon: '🏆', text: 'Pupil @ Codeforces – Max Rating: 1318 (2025)' },
    { icon: '🥉', text: '3★ @ CodeChef – Max Rating: 1665 (2025)' },
    { icon: '📈', text: 'LeetCode – Max Rating: 1660 (2025)' },
    { icon: '🤝', text: 'Student Volunteer, IEEE Conference 2024 – AKGEC' },
    { icon: '🚀', text: 'Rank 4850 – LeetCode Biweekly Contest 151 (2024)' },
    { icon: '🔥', text: 'Rank 2829 – Codeforces Round 1021 (Div 2) (2024)' },
    { icon: '🏅', text: 'Rank 399 – CodeChef Starters 184 (Div 2) (2024)' },
    { icon: '✅', text: 'Qualified Round 2 – AlgoUnlock x GfG (IIT Ropar, Advitiya’24-25) (2024)' },
    { icon: '🌍', text: 'Participated – Meta HackerCup by Facebook, CodeConquest by IISc Bangalore (2023)' },
  ];

  return (
    <motion.section
      id="achievements"
      className="achievements-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="achievements-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Achievements
      </motion.h2>

      <div className="achievements-list">
        {achievementList.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <span className="achievement-icon">{item.icon}</span>
            <p className="achievement-text">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
