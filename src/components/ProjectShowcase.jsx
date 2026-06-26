import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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

  // Map ng mga paths para sa branding assets
  const brandAssets = {
    '/Black': './black.png',
    '/White': './white.png',
    '/Iridescent': './iridescent.png'
  };

  return (
    <section 
      id="projects" 
      className="grid grid-cols-1 lg:grid-cols-12 bg-white border-b border-gray-200 items-stretch"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* ================= KALIWANG SIDE ================= */}
      <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-gray-200 p-8 md:p-12 flex flex-col space-y-10 h-full justify-between">
        
        {/* Brand Assets Block */}
        <div className="w-full">
          <h3 
            className="text-xl font-black text-gray-900 mb-8"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
          >
            Brand Identity
          </h3>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-6">
            {['/Black', '/White', '/Iridescent'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-100 text-gray-900 font-bold' 
                    : 'hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 🛠️ DYNAMIC CONTAINER BACKGROUND: Puti/Light gray ang lalabas kapag '/Black' tab ang pinili para sa transparent logos */}
          <div 
            className={`rounded-2xl p-6 h-64 flex items-center justify-center relative overflow-hidden border shadow-md group transition-colors duration-300 ${
              activeTab === '/Black' 
                ? 'bg-zinc-50 border-zinc-200' 
                : 'bg-black border-zinc-800'
            }`}
          >
            {/* Background grid design (Nag-aadjust ang kulay base sa active tab) */}
            <div 
              className={`absolute inset-0 [background-size:16px_16px] opacity-40 pointer-events-none ${
                activeTab === '/Black'
                  ? 'bg-[radial-gradient(#e4e4e7_1px,transparent_1px)]'
                  : 'bg-[radial-gradient(#222_1px,transparent_1px)]'
              }`} 
            />
            
            {/* Tag indicator sa gilid (Nag-aadjust din ang kulay ng text) */}
            <span 
              className={`absolute top-4 left-6 text-[10px] font-mono uppercase tracking-wider select-none ${
                activeTab === '/Black' ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              {activeTab}
            </span>
            
            {/* Dynamic Image Asset Showcase */}
            <img 
              src={brandAssets[activeTab] || "./brand-white.png"} 
              alt={`Brand Asset ${activeTab}`}
              className="w-full h-full object-contain max-h-40 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Featured Badge Block */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-900">Featured Badge</h4>
            <button className="text-[11px] font-medium text-gray-400 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md hover:text-gray-900 transition-colors">View all</button>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between gap-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl">🛡️</div>
              <div>
                <span className="text-[9px] font-mono text-gray-400 block tracking-wider uppercase">AVALANCHE HACK2BUILD</span>
                <span className="text-xs font-black text-gray-900 block tracking-tight">3rd Place, Infrastructure & AI</span>
              </div>
            </div>
            <button className="bg-zinc-800 hover:bg-black text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap">Details</button>
          </div>
        </div>

      </div>

      {/* ================= KANANG SIDE ================= */}
      <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between h-full bg-white">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 mb-8"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
          >
            Featured Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="w-full rounded-3xl relative overflow-hidden group shadow-md border border-black/10 h-76 md:h-84 flex flex-col justify-between"
                style={{ backgroundColor: 'transparent' }}
              >
                {/* Background Base Layer */}
                <div className={`absolute inset-0 ${project.bgClass}`} />
                
                {/* Full container fitted layout */}
                <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ease-out pointer-events-none z-0">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                
                {/* Structural space spacer */}
                <div className="h-20 w-full pointer-events-none z-10" />

                {/* Bottom Action Bar */}
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

    </section>
  );
}