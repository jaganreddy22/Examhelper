import React, { useEffect, useState } from 'react';
import './ScrollToTop.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
