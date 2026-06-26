import React, { useState } from 'react';
import { Terminal, Cpu, ArrowUpRight } from 'lucide-react';

// ==========================================
// 1. TECH CAPABILITIES COMPONENT
// ==========================================
export function TechCapabilities() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", slug: "javascript" },
        { name: "Java", slug: "openjdk" },
        { name: "Python", slug: "python" },
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css3" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React", slug: "react" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express", slug: "express" },
        { name: "Tailwind CSS", slug: "tailwindcss" }
      ]
    },
    {
      title: "AI Models & Ecosystems", // <-- Bagong kategorya para sa mga AI Tools
      items: [
        { name: "Claude", slug: "anthropic" },
        { name: "Gemini", slug: "googlegemini" },
        { name: "ChatGPT", slug: "openai" },
        { name: "Grok", slug: "x" }
      ]
    },
    {
      title: "Database & Tools",
      items: [
        { name: "MySQL", slug: "mysql" },
        { name: "VS Code", slug: "visualstudiocode" }
      ]
    },
    {
      title: "Cloud & Deployment",
      items: [
        { name: "Vercel", slug: "vercel" },
        { name: "Render", slug: "render" }
      ]
    }
  ];

  return (
    <section 
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 bg-white items-stretch"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* KALIWANG SIDE: TECH STACK MATRIX */}
      <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-gray-200 p-8 md:p-12 flex flex-col justify-between h-full">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 mb-8"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.04em'
            }}
          >
            Tech Stack
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {categories.map((cat) => (
              <div key={cat.title} className="space-y-2.5">
                <span 
                  className="text-[11px] font-medium tracking-[0.15em] text-gray-400 uppercase block" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <div 
                      key={tech.name} 
                      title={tech.name}
                      className="group relative h-10 w-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.slug === 'vercel' || tech.slug === 'express' || tech.slug === 'openai' || tech.slug === 'x' ? '000000' : '4B5563'}`} 
                        alt={tech.name}
                        className="w-5 h-5 object-contain transition-all duration-200 group-hover:invert group-hover:brightness-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IN PROGRESS BLOCK */}
        <div className="pt-8 mt-12 border-t border-gray-100">
          <span className="text-[11px] font-medium tracking-[0.15em] text-gray-400 uppercase block mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            In progress
          </span>
          <div className="bg-[#1A1A1A] text-white p-5 rounded-xl font-mono text-xs space-y-3 max-w-sm border border-gray-800 shadow-md">
            <div className="flex items-center justify-between text-gray-500 text-[9px] tracking-wider">
              <span>RUNTIME_MONITOR</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Terminal size={12} className="text-blue-400" />
              <span>n8n AI Workflow Systems</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Cpu size={12} className="text-blue-400" />
              <span>Smart Contract Audits</span>
            </div>
          </div>
        </div>
      </div>

      {/* KANANG SIDE: BIOGRAPHY DESCRIPTION */}
      <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between bg-white h-full">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 mb-8"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.04em'
            }}
          >
            Description
          </h3>
          
          <div className="space-y-5 text-[15px] text-gray-500 font-normal leading-[1.7] tracking-tight max-w-2xl">
            <p>
              I build AI-augmented products, blockchain tools, and modern web applications. My work spans front-end development, responsive web apps, authentication systems, developer tooling, crypto automation, and decentralized systems.
            </p>
            <p>
              As <span className="text-blue-600 font-semibold hover:underline cursor-pointer">Co-Founder of NovaTech Labs</span>, I work on developer infrastructure and AI-native tooling for the Web3 ecosystem, including projects connected to multi-chain smart contract workflows and product experimentation.
            </p>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="pt-12 mt-auto flex justify-end">
          <button 
            className="bg-[#2D2D2D] hover:bg-black text-white text-xs font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2 tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Story <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

    </section>
  );
}

// ==========================================
// 2. PROJECT SHOWCASE COMPONENT
// ==========================================
export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('/White');

  const projects = [
    {
      title: "Sagana Financial Architecture",
      engine: "Base Network / EVM Protocol",
      bgClass: "bg-gradient-to-br from-cyan-900 to-sky-950",
      badgeText: "Production Deploy",
      mockGraphic: (
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 shadow-lg">
          <div className="h-10 w-10 rounded-full bg-cyan-400 flex items-center justify-center font-bold text-gray-900 text-sm">🌾</div>
          <span className="text-white font-mono font-bold tracking-tight text-lg">sagana-protocol</span>
        </div>
      )
    },
    {
      title: "Taskify Automated Decision Engine",
      engine: "React Lifecycle Framework",
      bgClass: "bg-gradient-to-r from-gray-950 via-gray-900 to-zinc-900",
      badgeText: "Mainnet Standard",
      mockGraphic: (
        <div className="w-full max-w-xs px-4 py-3 bg-black/40 backdrop-blur-sm border border-zinc-800 rounded-lg font-mono text-[10px] text-zinc-400 space-y-1">
          <div className="text-zinc-500">// DECISION_TREE_MATRIX</div>
          <div className="text-emerald-400">✓ Engine Node Active</div>
          <div className="text-indigo-400">⚡ Latency 0.04ms</div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="projects" 
      className="grid grid-cols-1 lg:grid-cols-12 bg-white border-b border-gray-200 items-stretch"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      
      {/* KALIWANG SIDE */}
      <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-gray-200 p-8 md:p-12 flex flex-col justify-between h-full">
        <div>
          <h3 
            className="text-xl font-black text-gray-900 mb-8"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
          >
            Brand Assets
          </h3>

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

          <div className="bg-[#2D2D2D] rounded-2xl p-6 h-56 flex flex-col justify-between relative overflow-hidden border border-zinc-800 shadow-inner group">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{activeTab}</span>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <div className="flex items-center gap-3 text-white transition-transform duration-300 group-hover:scale-105">
                <div className="h-10 w-10 rounded-full border-4 border-dashed border-zinc-400 flex items-center justify-center font-bold">N</div>
                <span className="text-2xl font-black uppercase tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>NovaTech</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-auto z-10">
              <div className="bg-black/30 border border-white/5 rounded-lg h-12 flex items-center justify-center text-white/40 text-[10px] font-mono">/Logo_Icon</div>
              <div className="bg-black/30 border border-white/5 rounded-lg h-12 flex items-center justify-center text-white/40 text-[10px] font-mono">/Typography</div>
            </div>
          </div>
        </div>

        {/* 🛡️ FEATURED BADGE */}
        <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
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

      {/* KANANG SIDE */}
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
                className="w-full rounded-3xl p-6 md:p-8 relative overflow-hidden group shadow-md border border-black/10 h-64 md:h-72 flex flex-col justify-between"
                style={{ backgroundColor: 'transparent' }}
              >
                <div className={`absolute inset-0 ${project.bgClass} transition-transform duration-500 ease-out`} />
                
                <div className="flex justify-between items-start z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">// CORE_STAGING_0{idx + 1}</span>
                    <h4 className="text-lg md:text-xl font-black text-white tracking-tight">{project.title}</h4>
                  </div>
                  <span className="text-[9px] font-mono font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    {project.engine}
                  </span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  {project.mockGraphic}
                </div>
                
                <div className="flex justify-between items-center z-10 pt-4 mt-auto">
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">
                    DEPLOYMENT // {project.badgeText.toUpperCase()}
                  </span>
                  <button className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 border border-white/10 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 tracking-tight transition-all shadow-sm z-20">
                    &lt; View <ArrowUpRight size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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