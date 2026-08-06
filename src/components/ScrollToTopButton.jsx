import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      /* 🎯 Mobile: right-6 (dati nitong puwesto), Desktop: md:right-16 (inusad sa kaliwa) */
      className="fixed bottom-6 right-6 md:bottom-8 md:right-16 bg-[#2D2D2D] dark:bg-zinc-100 text-white dark:text-zinc-950 p-3 rounded-full shadow-xl hover:bg-black dark:hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 group z-50 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}