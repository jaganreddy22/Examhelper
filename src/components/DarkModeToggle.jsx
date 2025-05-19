import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className="dark-mode-toggle-btn"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      <span className="icon">{darkMode ? '☀️' : '⚫️'}</span>
      <span className="btn-text">{darkMode ? ' Light' : ' Dark'}</span>
    </button>
  );
};

export default DarkModeToggle;
