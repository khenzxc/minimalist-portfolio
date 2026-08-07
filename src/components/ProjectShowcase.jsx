import React, { useState } from 'react';
import { Loader2, Info } from 'lucide-react';
import CoverflowGallery from './CoverflowGallery';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('/White');
  const [activeBadge3DIdx, setActiveBadge3DIdx] = useState(0);
  const [isBrandLoading, setIsBrandLoading] = useState(true);
  
  // 📱 State para sa mobile card overlay toggle
  const [mobileActiveProject, setMobileActiveProject] = useState(null);

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

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsBrandLoading(true);
      setActiveTab(tab);
    }
  };

  const toggleMobileProject = (idx) => {
    setMobileActiveProject(mobileActiveProject === idx ? null : idx);
  };

  const badges = [
    {
      event: "PSITE RAITE HACKATHON PROGRAMMING CHALLENGE",
      title: "1st Runner Up",
      description: "Achieved 1st Runner Up at the regional hackathon, designing and executing core algorithmic pathways under intense time-bound pressure.",
      certUrl: "/1st-runner-up.jpeg" 
    },
    {
      event: "PSITE RAITE HACKATHON PROGRAMMING",
      title: "Best Presentation",
      description: "Recognized for the most articulate structural delivery, breaking down complex engineering schema into high-impact presentation dynamics.",
      certUrl: "/best-presentation.jpeg"
    },
    {
      event: "CODECHUM PROGRAMMING CHALLENGE",
      title: "National Competitor / Finalist",
      description: "Advanced to the national finals among top academic programmers, demonstrating elite proficiency in backend data mapping and architecture.",
      certUrl: "/codechum-cert.jpg"
    }
  ];

  return (
    <section 
      id="projects" 
      className="flex flex-col lg:grid lg:grid-cols-12 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >

      {/* ================= 1. FEATURED PROJECTS (MOBILE: 1ST | DESKTOP: RIGHT SIDE) ================= */}
      <div className="order-1 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 p-6 md:p-10 lg:p-12 flex flex-col justify-between h-full bg-white dark:bg-zinc-900 border-b lg:border-b-0 border-gray-200 dark:border-zinc-800">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Featured Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, idx) => {
              const isMobileOpen = mobileActiveProject === idx;

              return (
                <div 
                  key={idx}
                  className="w-full h-[300px] sm:h-[340px] rounded-3xl relative overflow-hidden group shadow-md border border-gray-200 dark:border-zinc-800 cursor-pointer"
                >
                  {/* Original Gradient Background */}
                  <div className={`absolute inset-0 ${project.bgClass}`} />
                  
                  {/* Default Display */}
                  <div className="absolute inset-0 p-6 flex items-center justify-center transition-all duration-500 ease-out z-0">
                    <img 
                      src={project.imageSrc} 
                      alt={project.title}
                      className="w-full h-full object-contain rounded-none lg:group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* 📲 MOBILE-ONLY CTA BUTTON (Nasa ibaba at may CTA Style) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMobileProject(idx);
                    }}
                    className="lg:hidden absolute bottom-4 right-4 z-20 bg-zinc-900/90 hover:bg-black text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-xs font-bold px-4 py-2.5 rounded-xl backdrop-blur-md border border-zinc-700/50 dark:border-zinc-300/50 flex items-center gap-2 transition-all active:scale-95 shadow-xl"
                  >
                    {isMobileOpen ? (
                      <span>✕ Close Details</span>
                    ) : (
                      <>
                        <Info size={14} />
                        <span>View Details</span>
                      </>
                    )}
                  </button>

                  {/* HOVER / MOBILE OVERLAY */}
                  <div 
                    className={`absolute inset-0 bg-black/85 p-6 pb-16 lg:pb-6 flex flex-col justify-end transition-opacity duration-300 z-10 ${
                      isMobileOpen 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none lg:pointer-events-auto lg:group-hover:opacity-100'
                    }`}
                  >
                    <h4 className="text-base sm:text-lg font-black text-white tracking-tight mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] sm:text-xs font-mono bg-zinc-800/90 text-zinc-200 px-2.5 py-1 rounded-md border border-zinc-700/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* LEFT COLUMN WRAPPER */}
      <div className="order-2 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:border-r border-gray-200 dark:border-zinc-800 flex flex-col justify-start">
        
        {/* ================= 2. FEATURED BADGES ================= */}
        <div className="p-6 md:p-8 lg:p-10 pb-0 lg:pb-0">
          <div className="w-full pt-2">
            <div className="flex items-center justify-between mb-4">
              <h4 
                className="text-xl font-black text-gray-900 dark:text-white"
                style={{ letterSpacing: '-0.04em' }}
              >
                Certificates / Recognitions
              </h4>
            </div>
            
            <div className="w-full max-w-xl mx-auto">
              <CoverflowGallery 
                badges={badges}
                activeIdx={activeBadge3DIdx}
                setActiveIdx={setActiveBadge3DIdx}
              />
            </div>
          </div>
        </div>

        {/* ================= 3. BRAND ASSETS ================= */}
        <div className="p-6 md:p-8 lg:p-10 -mt-1 lg:-mt-2">
          <div className="w-full">
            <h3 
              className="text-sm font-bold text-gray-900 dark:text-zinc-100 mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              Brand Assets
            </h3>

            <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-zinc-500 mb-3">
              {['/Black', '/White', '/Iridescent'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === tab 
                      ? 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-bold shadow-sm' 
                      : 'hover:text-gray-600 dark:hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div 
              className={`rounded-2xl p-6 h-60 sm:h-64 flex items-center justify-center relative overflow-hidden border shadow-md group transition-all duration-300 ${
                activeTab === '/Black' 
                  ? 'bg-zinc-50 dark:bg-zinc-800/80 border-gray-200 dark:border-zinc-700' 
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

              {/* LOADING INDICATOR SPINNER */}
              {isBrandLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-inherit z-20 transition-opacity">
                  <Loader2 className={`animate-spin ${activeTab === '/Black' ? 'text-zinc-600 dark:text-zinc-300' : 'text-zinc-400'}`} size={24} />
                </div>
              )}
              
              <img 
                src={brandAssets[activeTab] || "./brand-white.png"} 
                alt={`Brand Asset ${activeTab}`}
                onLoad={() => setIsBrandLoading(false)}
                className={`w-full h-full object-contain max-h-36 sm:max-h-40 transition-all duration-500 group-hover:scale-105 ${
                  isBrandLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  ); 
}