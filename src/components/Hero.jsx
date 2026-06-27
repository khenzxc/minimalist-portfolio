import React from 'react';
import HologramCanvas from './HologramCanvas';

export default function Hero() {
  return (
    <section
      id="about"
      // 1. Inayos ang background (`dark:bg-zinc-900`) at border ng buong section (`dark:border-zinc-800`)
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }} // Tiyaking Space Grotesk para terno sa projects!
    >

      {/* 1. KALIWANG SIDE: Hologram Viewport View */}
      {/* 2. In-update ang responsive divider line (`dark:border-zinc-800`) */}
      <div className="order-2 lg:order-1 lg:col-span-6 border-t lg:border-t-0 lg:border-r border-gray-200 dark:border-zinc-800 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-full transition-colors duration-200">
        <HologramCanvas />
      </div>

      {/* 2. KANANG SIDE: Typography & Metadata Block */}
      {/* 3. In-adjust ang wrapper background (`dark:bg-zinc-900`) */}
      <div className="order-1 lg:order-2 lg:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full bg-white dark:bg-zinc-900 transition-colors duration-200">
        <div>
          {/* Header Title Metadata Block */}
          {/* 4. Dinagdagan ng `dark:text-zinc-400` ang kategorya */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-zinc-400 mb-6 md:mb-8 uppercase tracking-tight transition-colors duration-200">
            Identity / Core
          </h3>

          <div className="space-y-4 md:space-y-6 max-w-xl">

            {/* The Brand Identity Text Layout */}
            <div className="text-gray-900 dark:text-white space-y-1.5 md:space-y-2 tracking-tight transition-colors duration-200">
              {/* 5. Ginawang `dark:text-zinc-600` ang "I'm" label */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-zinc-600 block transition-colors duration-200">
                I'm
              </h1>

              {/* 6. Dinagdagan ng `dark:text-white` ang pangalan mo */}
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
            {/* 7. Dinagdagan ng `dark:text-zinc-400` ang bio paragraph */}
            <p className="text-base md:text-[18px] text-gray-500 dark:text-zinc-400 font-normal leading-relaxed tracking-tight pt-1 md:pt-2 transition-colors duration-200">
              A web and system developer building modern, scalable, and secure web applications.
            </p>
          </div>
        </div>

        {/* Associated Footer System Block */}
        {/* 8. In-update ang inner divider line (`dark:border-zinc-800`) at system header code text */}
        <div className="pt-6 md:pt-8 mt-10 md:mt-12 border-t border-gray-100 dark:border-zinc-800 transition-colors duration-200">
          <span className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest block mb-3 md:mb-4 transition-colors duration-200">
            AFFILIATIONS // RECOGNITION
          </span>

          {/* 9. Binigyan ng dark mode treatment ang background, borders, at text ng Affiliation Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] md:text-xs font-bold text-gray-900 dark:text-zinc-300 uppercase tracking-tight transition-colors duration-200">
            <span className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-2.5 py-1.5 rounded-lg">TECNO PARAGONS LEAGUE</span>
            <span className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-2.5 py-1.5 rounded-lg">IS SYNERGY</span>
            <span className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-2.5 py-1.5 rounded-lg">PSITE RAITE</span>
          </div>
        </div>
      </div>

    </section>
  );
}