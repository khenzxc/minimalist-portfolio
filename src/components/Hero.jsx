import React from 'react';
import HologramCanvas from './HologramCanvas';

export default function Hero() {
  const affiliations = [
    "TECNO PARAGONS LEAGUE",
    "IS SYNERGY",
    "PSITE RAITE"
  ];

  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >

      {/* KALIWANG SIDE: Hologram Viewport View */}
      <div className="order-2 lg:order-1 lg:col-span-6 border-t lg:border-t-0 lg:border-r border-gray-200 dark:border-zinc-800 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-full transition-colors duration-200">
        <HologramCanvas />
      </div>

      {/* KANANG SIDE: Typography & Metadata Block */}
      <div className="order-1 lg:order-2 lg:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full bg-white dark:bg-zinc-900 transition-colors duration-200">
        <div>
          {/* Header Title Metadata Block */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-zinc-400 mb-6 md:mb-8 uppercase tracking-tight transition-colors duration-200">
            Profile Overview
          </h3>

          <div className="space-y-4 md:space-y-6 max-w-xl">
            {/* The Brand Identity Text Layout */}
            <div className="text-gray-900 dark:text-white space-y-1.5 md:space-y-2 tracking-tight transition-colors duration-200">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-zinc-600 block transition-colors duration-200">
                I'm
              </h1>

              <h1 className="text-4xl md:text-5xl font-bold inline-flex flex-wrap items-center gap-2 md:gap-3 text-gray-900 dark:text-white leading-none uppercase transition-colors duration-200">
                <span>Khen Gabriel</span>

                {/* Minimalist Solid Blue Verified Badge */}
                <span className="inline-flex items-center justify-center text-[#1D9BF0] w-7 h-7 md:w-9 md:h-9 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9.5 14.25l-2.5-2.5-1.06 1.06 3.56 3.56 7.5-7.5-1.06-1.06z"
                      fill="white"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Context/Bio Description Paragraph */}
            <p className="text-base md:text-[18px] text-gray-500 dark:text-zinc-400 font-normal leading-relaxed tracking-tight pt-1 md:pt-2 transition-colors duration-200">
              A web and system developer building modern, scalable, and secure web applications.
            </p>
          </div>
        </div>

        {/* Associated Footer System Block */}
        <div className="pt-6 md:pt-8 mt-10 md:mt-12 border-t border-gray-100 dark:border-zinc-800 transition-colors duration-200">
          <span className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest block mb-3 md:mb-4 transition-colors duration-200">
            AFFILIATIONS // RECOGNITION
          </span>

          {/* 💡 CAROUSEL LOOP CONTAINER */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            {/* Ginamit ang `animate-marquee-pure` mula sa iyong custom CSS at pinanatili ang control classes ng Tailwind */}
            <div className="flex w-max animate-marquee-pure gap-4 pr-4 hover:[animation-play-state:paused] cursor-pointer">
              
              {/* Unang Set ng Badges */}
              {affiliations.map((text, idx) => (
                <span 
                  key={`orig-${idx}`} 
                  className="whitespace-nowrap bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-bold text-gray-900 dark:text-zinc-300 uppercase tracking-tight transition-colors duration-200"
                >
                  {text}
                </span>
              ))}

              {/* Pangalawang Set ng Badges (Para sa seamless loop cycle) */}
              {affiliations.map((text, idx) => (
                <span 
                  key={`clone-${idx}`} 
                  className="whitespace-nowrap bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-bold text-gray-900 dark:text-zinc-300 uppercase tracking-tight transition-colors duration-200"
                >
                  {text}
                </span>
              ))}

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}