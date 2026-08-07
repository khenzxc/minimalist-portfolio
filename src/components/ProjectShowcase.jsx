import React, { useState } from 'react';
import { Award, Loader2 } from 'lucide-react';
import CoverflowGallery from './CoverflowGallery'; // Import gamit ang bagong name

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('/White');
  const [activeBadge3DIdx, setActiveBadge3DIdx] = useState(0);
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
      className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ================= LEFT SIDE (BRAND ASSETS & BADGES) ================= */}
      <div className="col-span-1 lg:col-span-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-zinc-800 p-6 md:p-10 lg:p-12 flex flex-col justify-between space-y-10">
        
        {/* Brand Assets Block */}
        <div className="w-full">
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Brand Assets
          </h3>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-zinc-500 mb-4">
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

        {/* Featured Badges Block (3D COVERFLOW LAYOUT) */}
        <div className="w-full pt-2">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <Award size={16} className="text-zinc-700 dark:text-zinc-300" /> 
              Featured Badges & Recognition
            </h4>
          </div>
          
          <div className="w-full max-w-xl mx-auto">
            {/* CoverflowGallery Component Import */}
            <CoverflowGallery 
              badges={badges}
              activeIdx={activeBadge3DIdx}
              setActiveIdx={setActiveBadge3DIdx}
            />
          </div>
        </div>

      </div>

      {/* ================= RIGHT SIDE (FEATURED PROJECTS) ================= */}
      <div className="col-span-1 lg:col-span-6 p-6 md:p-10 lg:p-12 flex flex-col justify-between h-full bg-white dark:bg-zinc-900">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 dark:text-white mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Featured Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, idx) => (
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
                    className="w-full h-full object-contain rounded-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
            ))}
          </div>
        </div>
      </div>

    </section>
  ); 
}