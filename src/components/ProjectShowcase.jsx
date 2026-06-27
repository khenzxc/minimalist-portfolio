import React, { useState } from 'react';
import { ArrowUpRight, Award, ExternalLink, Code2, Presentation, Terminal } from 'lucide-react';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('/White');

  const projects = [
    {
      title: "Sagana Financial Architecture",
      bgClass: "bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950",
      imageSrc: "./sagana.png"
    },
    {
      title: "Danbhels Gym Management System",
      bgClass: "bg-gradient-to-br from-zinc-950 via-gray-900 to-neutral-950",
      imageSrc: "./danbhels.png"
    }
  ];

  const brandAssets = {
    '/Black': './black.png',
    '/White': './white.png',
    '/Iridescent': './iridescent.png'
  };

  const badges = [
    {
      event: "PSITE RAITE HACKATHON PROGRAMMING CHALLENGE",
      title: "1st Runner Up",
      icon: <Terminal size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />,
      certUrl: "#" 
    },
    {
      event: "PSITE RAITE HACKATHON PROGRAMMING",
      title: "Best Presentation",
      icon: <Presentation size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />,
      certUrl: "#"
    },
    {
      event: "CODECHUM PROGRAMMING CHALLENGE",
      title: "National Competitor / Finalist",
      icon: <Code2 size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />,
      certUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      // 🎯 GLOBAL SECTION STROKE: Ginamit ang border-gray-200 dark:border-zinc-800 para sa main grid breakdown
      className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }} // 🎯 FONT UNIFICATION: Ini-align sa Space Grotesk para terno sa Hero identity block
    >
      
      {/* ================= KANANG SIDE (FEATURED PROJECTS) ================= */}
      {/* 🎯 OUTER COLUMN DIVIDER: Ginabayan ng border-gray-200 dark:border-zinc-800 para sa responsive mobile breakpoint lines */}
      <div className="order-1 lg:order-2 lg:col-span-6 p-8 md:p-12 flex flex-col justify-between h-full bg-white dark:bg-zinc-900 transition-colors duration-200 border-b lg:border-b-0 border-gray-200 dark:border-zinc-800">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-8"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
          >
            Featured Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                // 🎯 INNER CARD SHIELD: Binago mula border-black/10 patungong border-gray-200 dark:border-zinc-800 para pumasok sa wireframe format ng system mo
                className="w-full rounded-3xl relative overflow-hidden group shadow-md border border-gray-200 dark:border-zinc-800 h-76 md:h-84 flex flex-col justify-between"
                style={{ backgroundColor: 'transparent' }}
              >
                <div className={`absolute inset-0 ${project.bgClass}`} />
                
                <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ease-out pointer-events-none z-0">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                
                <div className="h-20 w-full pointer-events-none z-10" />

                <div className="p-6 md:p-8 flex justify-end items-center z-10 mt-auto relative bg-gradient-to-t from-black/40 via-black/5 to-transparent w-full">
                  <button className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 border border-white/10 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 tracking-tight transition-all shadow-sm group-hover:scale-105">
                    View Project <ArrowUpRight size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= KALIWANG SIDE (BADGES & BRAND) ================= */}
      {/* 🎯 MAIN VERTICAL GUTTER BORDER: Naka-sync sa lg:border-r border-gray-200 dark:border-zinc-800 ng kaliwang panel block */}
      <div className="order-2 lg:order-1 lg:col-span-6 border-r-0 lg:border-r border-gray-200 dark:border-zinc-800 p-8 md:p-12 flex flex-col h-full transition-colors duration-200">
        
        {/* Featured Badges Block */}
        <div className="order-1 lg:order-2 pt-2 space-y-4 w-full mb-12 lg:mb-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <Award size={16} className="text-zinc-700 dark:text-zinc-300" /> Featured Badges & Recognition
            </h4>
          </div>
          
          <div className="space-y-3 max-w-xl">
            {badges.map((badge, index) => (
              <div 
                key={index} 
                // 🎯 RECOGNITION CONTAINER OUTLINE: Gumagamit ng border-gray-200 dark:border-zinc-800/80 para sa micro-layout borders
                className="bg-gray-50 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-800/80 rounded-xl p-4 flex items-center justify-between gap-4 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/70 transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  {/* 🎯 BADGE ICON FRAMES: Ini-adjust sa border-gray-200 dark:border-zinc-700 katulad ng Affiliation badging method ng Hero */}
                  <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner">
                    {badge.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-400 dark:text-zinc-500 block tracking-wider uppercase leading-tight">
                      {badge.event}
                    </span>
                    <span className="text-xs font-black text-gray-900 dark:text-white block tracking-tight mt-0.5">
                      {badge.title}
                    </span>
                  </div>
                </div>
                
                <a 
                  href={badge.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap shadow-sm hover:scale-[1.02]"
                >
                  View Cert
                  <ExternalLink size={11} className="opacity-80" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Assets Block */}
        <div className="order-2 lg:order-1 w-full lg:mb-12">
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-8"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
          >
            Brand Identity
          </h3>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-zinc-500 mb-6">
            {['/Black', '/White', '/Iridescent'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-bold' 
                    : 'hover:text-gray-600 dark:hover:text-zinc-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div 
            // 🎯 BRAND CONTAINER EDGES: Inihanay sa border-gray-200 at dark:border-zinc-700 base variables ng Hero block elements
            className={`rounded-2xl p-6 h-64 flex items-center justify-center relative overflow-hidden border shadow-md group transition-all duration-300 ${
              activeTab === '/Black' 
                ? 'bg-zinc-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700' 
                : 'bg-black dark:bg-black border-zinc-800 dark:border-zinc-900'
            }`}
          >
            <div 
              className={`absolute inset-0 [background-size:16px_16px] opacity-40 pointer-events-none ${
                activeTab === '/Black'
                  ? 'bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)]'
                  : 'bg-[radial-gradient(#222_1px,transparent_1px)]'
              }`} 
            />
            
            <span 
              className={`absolute top-4 left-6 text-[10px] font-mono uppercase tracking-wider select-none ${
                activeTab === '/Black' ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500'
              }`}
            >
              {activeTab}
            </span>
            
            <img 
              src={brandAssets[activeTab] || "./brand-white.png"} 
              alt={`Brand Asset ${activeTab}`}
              className="w-full h-full object-contain max-h-40 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>

    </section>
  );
}