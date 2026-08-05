import React, { useState, useEffect } from 'react';

export default function UnderDevelopment({ 
  title = 'Under Development', 
  subtitle, 
  moduleName, 
  theme = 'dark' 
}) {
  const isDark = theme === 'dark';

  // PROPER WAY: Kung walang moduleName, gagamitin ang title; kung wala rin, "Page"
  const targetName = moduleName || title || 'Page';
  const fullText = `${targetName} is under development...`;
    
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          setIndex((prev) => prev + 1);
        } else {
          // Pause bago mag-delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText]);

  return (
    <div 
      id="under-development" 
      className={`w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[420px] transition-colors duration-200 ${
        isDark ? 'bg-zinc-950 text-white' : 'bg-white dark:bg-zinc-900 text-gray-900 dark:text-white'
      }`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Background Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${
        isDark ? 'bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]' : 'bg-[radial-gradient(#000_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]'
      } [background-size:24px_24px]`} />

      <div className="relative z-10 text-center max-w-xl space-y-5">
        
        {/* Terminal Box with Dynamic Typing Animation */}
        <div className={`inline-flex items-center font-mono text-xs px-4 py-2 rounded-md border min-w-[280px] justify-start ${
          isDark 
            ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' 
            : 'bg-zinc-100 border-zinc-200 text-zinc-700 dark:bg-zinc-800/80 dark:border-zinc-700 dark:text-zinc-300'
        }`}>
          <span>{displayedText}</span>
          {/* Blinking Block Cursor */}
          <span className={`inline-block w-2 h-4 ml-1 animate-pulse ${isDark ? 'bg-amber-400' : 'bg-blue-600'}`} />
        </div>

        {/* Dynamic Section Title */}
        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
          {title}
        </h2>

        {/* Dynamic Context Description */}
        <p className={`text-sm font-mono max-w-md mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500 dark:text-zinc-400'}`}>
          {subtitle || '[DATA_LOCKED]: Compilation loops and architectural node parameters are currently being deployed.'}
        </p>
        
      </div>
    </div>
  );
}