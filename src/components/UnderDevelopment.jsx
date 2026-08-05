import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';

export default function UnderDevelopment({ 
  title = 'Under Development', 
  subtitle, 
  moduleName, 
  theme = 'dark' 
}) {
  const isDark = theme === 'dark';

  const targetName = moduleName || title || 'Page';
  const fullText = `${targetName} is under development...`;
    
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      if (index < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          setIndex((prev) => prev + 1);
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (index > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, 40);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText]);

  return (
    <div 
      id="under-development" 
      className={`w-full py-12 px-6 sm:px-8 lg:px-12 relative overflow-hidden flex flex-col min-h-[70vh] transition-colors duration-200 ${
        isDark ? 'bg-zinc-950 text-white' : 'bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50'
      }`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${
        isDark 
          ? 'bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]' 
          : 'bg-[radial-gradient(#000_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]'
      } [background-size:24px_24px]`} />

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col relative z-10">
        
        {/* BACK BUTTON CONTAINER */}
        <div className="-mt-2 mb-6 md:-mt-6 md:mb-8">
          <BackButton />
        </div>

        {/* CENTERED & RAISED CONTENT BOX */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-4 pb-20 sm:pb-28">
          
          <div className="max-w-lg w-full space-y-6 flex flex-col items-center">
            
            {/* Terminal Box with Dynamic Typing Animation */}
            <div className={`inline-flex items-center font-mono text-xs px-4 py-2.5 rounded-lg border shadow-sm ${
              isDark 
                ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' 
                : 'bg-zinc-100 border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300'
            }`}>
              <span>{displayedText}</span>
              {/* Blinking Block Cursor */}
              <span className={`inline-block w-2 h-4 ml-1.5 animate-pulse ${isDark ? 'bg-blue-500' : 'bg-zinc-900 dark:bg-blue-400'}`} />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {title}
              </h2>

              <p className={`text-xs sm:text-sm font-mono max-w-md mx-auto leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'
              }`}>
                {subtitle || '[DATA_LOCKED]: Compilation loops and architectural node parameters are currently being deployed.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}