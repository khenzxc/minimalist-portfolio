import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, ExternalLink, Code2, Presentation, Terminal, Plus, X, Loader2 } from 'lucide-react';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('/White');
  const [openDetailsIdx, setOpenDetailsIdx] = useState(null);
  const [openBadgeIdx, setOpenBadgeIdx] = useState(null);

  // 🎯 NEW: State para malaman kung naglo-load pa ang Brand Image
  const [isBrandLoading, setIsBrandLoading] = useState(true);

  const projects = [
    {
      title: "Sagana Financial Architecture",
      bgClass: "bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950",
      imageSrc: "./sagana.png",
      description: "A decentralized ecosystem structured to drive institutional-grade financial inclusion pipelines and scalable core ledger logic.",
      tech: ["React", "Express", "Solidity", "Base Network"]
    },
    {
      title: "Danbhels Gym Management System",
      bgClass: "bg-gradient-to-br from-zinc-950 via-gray-900 to-neutral-950",
      imageSrc: "./danbhels.png",
      description: "Enterprise membership instrumentation tool featuring sub-routine tracking logs, point-of-sale mapping, and clean data isolation.",
      tech: ["React", "Node.js", "MySQL", "TailwindCSS"]
    }
  ];

  const brandAssets = {
    '/Black': './black.png',
    '/White': './white.png',
    '/Iridescent': './iridescent.png'
  };

  // 🎯 Function para sa pagpapalit ng tab na nagtri-trigger ng loading state
  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsBrandLoading(true);
      setActiveTab(tab);
    }
  };

  const badges = [
    {
      event: "PSITE RAITE HACKATHON PROGRAMMING CHALLENGE",
      title: "1st Runner Up",
      description: "Achieved 1st Runner Up at the regional hackathon, designing and executing core algorithmic pathways under intense time-bound pressure.",
      icon: <Terminal size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />,
      certUrl: "#" 
    },
    {
      event: "PSITE RAITE HACKATHON PROGRAMMING",
      title: "Best Presentation",
      description: "Recognized for the most articulate structural delivery, breaking down complex engineering schema into high-impact presentation dynamics.",
      icon: <Presentation size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />,
      certUrl: "#"
    },
    {
      event: "CODECHUM PROGRAMMING CHALLENGE",
      title: "National Competitor / Finalist",
      description: "Advanced to the national finals among top academic programmers, demonstrating elite proficiency in backend data mapping and architecture.",
      icon: <Code2 size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />,
      certUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* ================= KANANG SIDE (FEATURED PROJECTS) ================= */}
      <div className="order-1 lg:order-2 lg:col-span-6 p-8 md:p-12 flex flex-col justify-between h-full bg-white dark:bg-zinc-900 transition-colors duration-200 border-b lg:border-b-0 border-gray-200 dark:border-zinc-800">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.04em' }}
          >
            Featured Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
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

                {/* DETAILS POPUP DECK */}
                {openDetailsIdx === idx && (
                  <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-zinc-800/80 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-200 max-h-[85%] overflow-y-auto">
                    <div className="flex justify-between items-center gap-2 mb-1.5 sm:mb-2">
                      <h4 className="text-sm sm:text-base font-black text-gray-900 dark:text-white tracking-tight">
                        {project.title}
                      </h4>
                      <button 
                        onClick={() => setOpenDetailsIdx(null)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 p-1 rounded-md transition-colors shrink-0"
                      >
                        <X size={16} className="sm:hidden" />
                        <X size={18} className="hidden sm:block" />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-zinc-300 leading-normal sm:leading-relaxed mb-3 sm:mb-4 font-normal">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] sm:text-xs font-mono bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-zinc-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-gray-200 dark:border-zinc-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CARD CONTROL ACTION PANEL */}
                <div className="p-6 md:p-8 flex justify-end items-center z-10 mt-auto relative bg-gradient-to-t from-black/40 via-black/5 to-transparent w-full">
                  <button 
                    onClick={() => setOpenDetailsIdx(openDetailsIdx === idx ? null : idx)}
                    className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 border border-white/10 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 tracking-tight transition-all shadow-sm group-hover:scale-105"
                  >
                    Details <ArrowUpRight size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SEEMORE PROJECTS */}
          <div className="mt-8 flex justify-center">
            <Link 
              to="/projects" 
              className="w-full max-w-xs bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 border border-zinc-800 dark:border-zinc-200 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              See More <Plus size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= KALIWANG SIDE (BADGES & BRAND) ================= */}
      <div className="order-2 lg:order-1 lg:col-span-6 border-r-0 lg:border-r border-gray-200 dark:border-zinc-800 p-8 md:p-12 flex flex-col h-full transition-colors duration-200">
        
        {/* Featured Badges Block */}
        <div className="order-1 lg:order-2 pt-2 space-y-4 w-full mb-12 lg:mb-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <Award size={16} className="text-zinc-700 dark:text-zinc-300" /> Featured Badges & Recognition
            </h4>
          </div>
          
          <div className="space-y-3 max-w-xl">
            {badges.map((badge, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-800/80 rounded-xl p-4 flex flex-col relative overflow-hidden hover:bg-zinc-50/80 dark:hover:bg-zinc-800/70 transition-all shadow-sm group"
              >
                <div className="flex items-center justify-between gap-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner">
                      {badge.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-gray-400 dark:text-zinc-500 block tracking-wider uppercase leading-tight">
                        {badge.event}
                      </span>
                      <span className="text-xs font-black text-gray-900 dark:text-white block tracking-tight mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {badge.title}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenBadgeIdx(openBadgeIdx === index ? null : index)}
                    className="bg-zinc-800 hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap shadow-sm hover:scale-[1.02]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Details
                    <ExternalLink size={11} className="opacity-80" />
                  </button>
                </div>

                {/* BADGE DETAILS POPUP INLAY */}
                {openBadgeIdx === index && (
                  <div className="mt-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <h5 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase font-mono">
                        Event Scope & Details
                      </h5>
                      <button 
                        onClick={() => setOpenBadgeIdx(null)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 p-0.5 rounded transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-zinc-300 leading-relaxed mb-3">
                      {badge.description}
                    </p>
                    <a 
                      href={badge.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Certification Link &rarr;
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* SEEMORE RECOGNITIONS */}
            <div className="pt-2 flex justify-center">
              <Link 
                to="/collections" 
                className="w-full bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 border border-zinc-800 dark:border-zinc-200 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                See More <Plus size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Assets Block */}
        <div className="order-2 lg:order-1 w-full lg:mb-12">
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.04em' }}
          >
            Brand Assets
          </h3>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-zinc-500 mb-6">
            {['/Black', '/White', '/Iridescent'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-bold' 
                    : 'hover:text-gray-600 dark:hover:text-zinc-300'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div 
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
              className={`absolute top-4 left-6 text-[10px] font-mono uppercase tracking-wider select-none z-10 ${
                activeTab === '/Black' ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500'
              }`}
            >
              {activeTab}
            </span>

            {/* 🎯 LOADING INDICATOR SPINNER */}
            {isBrandLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-inherit z-20 transition-opacity">
                <Loader2 className={`animate-spin ${activeTab === '/Black' ? 'text-zinc-600 dark:text-zinc-300' : 'text-zinc-400'}`} size={24} />
              </div>
            )}
            
            <img 
              src={brandAssets[activeTab] || "./brand-white.png"} 
              alt={`Brand Asset ${activeTab}`}
              onLoad={() => setIsBrandLoading(false)}
              className={`w-full h-full object-contain max-h-40 transition-all duration-500 group-hover:scale-105 ${
                isBrandLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </div>

      </div>

    </section>
  ); 
}