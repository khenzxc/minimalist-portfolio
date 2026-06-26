import React from 'react';
import HologramCanvas from './HologramCanvas';

export default function Hero() {
  return (
    <section 
      id="about" 
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 bg-white items-stretch"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }} // Tiyaking Space Grotesk para terno sa projects!
    >
      
      {/* 1. KALIWANG SIDE: Hologram Viewport View */}
      {/* NAGSAMA NG: 'order-2 lg:order-1' para sa mobile, bababa ang hologram sa ilalim ng pangalan mo */}
      <div className="order-2 lg:order-1 lg:col-span-6 border-t lg:border-t-0 lg:border-r border-gray-200 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-full">
        <HologramCanvas />
      </div>

      {/* 2. KANANG SIDE: Typography & Metadata Block */}
      {/* NAGSAMA NG: 'order-1 lg:order-2' para maunang mag-load ang pangalan mo sa mobile */}
      <div className="order-1 lg:order-2 lg:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full bg-white">
        <div>
          {/* Header Title Metadata Block */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 md:mb-8 uppercase tracking-tight">
            Identity / Core
          </h3>
          
          <div className="space-y-4 md:space-y-6 max-w-xl">
            {/* Status Line Block */}
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
              // STATUS_CORE_METADATA_ONLINE
            </span>
            
            {/* The Brand Identity Text Layout */}
            <div className="text-gray-900 space-y-1.5 md:space-y-2 tracking-tight">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-400 block">
                I'm
              </h1>
              
              {/* Ginamitan ng niliitang text sizing na 'text-4xl md:text-5xl' at nilagyan ng wrap adjustment */}
              <h1 className="text-4xl md:text-5xl font-bold inline-flex flex-wrap items-center gap-2 md:gap-3 text-gray-900 leading-none uppercase">
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
            {/* BINAGO: Mula text-[22px] ginawang text-base md:text-[18px] para hindi maging dambuhala sa screen ng smartphone */}
            <p className="text-base md:text-[18px] text-gray-500 font-normal leading-relaxed tracking-tight pt-1 md:pt-2">
              A software developer specializing in blockchain and web technologies with a strong portfolio of projects.
            </p>
          </div>
        </div>

        {/* Associated Footer System Block */}
        <div className="pt-6 md:pt-8 mt-10 md:mt-12 border-t border-gray-100">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-3 md:mb-4">
            AFFILIATIONS // RECOGNITION
          </span>
          
          {/* Nilagyan ng gap-2 sa mobile para iwas patong-patong kapag gipit sa space */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] md:text-xs font-bold text-gray-900 uppercase tracking-tight">
            <span className="bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg">TECNO PARAGONS LEAGUE.</span>
            <span className="bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg">IS SYNERGY</span>
            <span className="bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg">PSITE</span>
          </div>
        </div>
      </div>

    </section>
  );
}