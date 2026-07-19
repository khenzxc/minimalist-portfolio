import React, { useState } from 'react';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

export default function About() {
  const [displayMode, setDisplayMode] = useState('feed'); // 'feed' | 'matrix'
  const [likedLogs, setLikedLogs] = useState({});

  const profileData = {
    name: "Khen Vonoe D. Gabriel",
    alias: "@khenzxc",
    role: "Information Systems Engineer in Training",
    institution: "Bulacan State University",
    location: "Pulilan, PH",
    specialization: "Full-Stack Architecture & AI Tooling Integrations",
    avatar: "profile.jpg"
  };

  const logs = [
    {
      code: "01",
      tag: "THE ORIGIN",
      title: "Sparking Curiosity & First Compiling",
      text: "It all started with a simple 'Inspect Element' tweak in high school. That was the moment I realized the digital world isn't a static environment, but a living ecosystem responding directly to our commands. Seeing an interface's structure shift layout or color because of my own input hooked me instantly—sparking a lasting drive to turn abstract concepts into tangible, responsive software platforms.",
      systemNote: "SYS_INIT // Core curiosity vector engaged.",
      timestamp: "2 hrs ago",
      metrics: { likes: 42, comments: 5 }
    },
    {
      code: "02",
      tag: "THE RUNTIME",
      title: "Academic Endurance & BulSU Logic Loops",
      text: "As a 3rd Year Information Systems student at Bulacan State University, I discovered early on that pure interest means nothing without technical discipline. The university serves as my testing ground to deploy abstract concepts into actual production workflows. This sandbox forces me to dissect real relational database structures, map complex component states, and debug intricate logic trees until deep into the night.",
      systemNote: "SYS_COMPILE // BSU_CORE_v3.0_stable",
      timestamp: "Yesterday",
      metrics: { likes: 88, comments: 12 }
    },
    {
      code: "03",
      tag: "THE WORKFLOW",
      title: "Stack Architecture & Productivity Sync",
      text: "Currently, my technical stack focuses on creating scalable web engineering components using a modern foundation—primarily React for building interactive UI, alongside Express and Node.js for reliable backend logic and MySQL for structured data pipelines. Beyond traditional programming paradigms, I systematically leverage generative AI environments (Claude, Gemini, Grok) as real-time development co-pilots to amplify overall output velocity.",
      systemNote: "SYS_STACK // React + Node + MySQL pipeline active.",
      timestamp: "3 days ago",
      metrics: { likes: 104, comments: 18 }
    },
    {
      code: "04",
      tag: "THE PHILOSOPHY",
      title: "Human-Centric Code & UX Integrity",
      text: "I operate under the philosophy that software should not simply be constructed for machine execution, but designed for human interaction. Backend logic and clean visual design must act as a single unit to generate digital environments that are predictable, lightweight, and deeply empathetic to the person using them. Across my projects, priority is strictly placed on driving down response latency, implementing rigorous error handling routines, and preserving clear code isolation.",
      systemNote: "SYS_UX // Accessibility loops operational.",
      timestamp: "1 week ago",
      metrics: { likes: 56, comments: 3 }
    },
    {
      code: "05",
      tag: "THE HORIZON",
      title: "Future Streams & Ecosystem Expansion",
      text: "Engineering demands continuous adaptation to newer paradigms. Right now, I am aggressively expanding my domain experience into advanced Database Engineering patterns, complex Entity-Relationship transformations, and decentralized networks—specifically testing secure Smart Contracts via Solidity on the Base chain. My ultimate path is to become a highly versatile software architect bridging corporate core engines with web3 infrastructure.",
      systemNote: "SYS_EVOLVE // Next-gen protocols stack tracking.",
      timestamp: "2 weeks ago",
      metrics: { likes: 120, comments: 24 }
    }
  ];

  const handleLike = (code) => {
    setLikedLogs(prev => ({ ...prev, [code]: !prev[code] }));
  };

  // PREMIUM SOLID SCALLOPED VERIFIED BADGE
  const VerifiedBadge = () => (
    <svg 
      viewBox="0 0 24 24" 
      className="w-[14px] h-[14px] text-blue-500 fill-current inline-block select-none flex-shrink-0 align-middle"
      aria-label="Verified Account"
    >
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.941.1-1.353.277C14.774 2.535 13.493 1.5 12 1.5c-1.493 0-2.774 1.035-3.419 2.287-.412-.177-.873-.277-1.353-.277-2.109 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 4 3.818 4 .48 0 .941-.1 1.353-.277.645 1.251 1.926 2.287 3.419 2.287 1.493 0 2.774-1.036 3.419-2.287.412.177.873.277 1.353.277 2.109 0 3.818-1.79 3.818-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 4.19l-3.95-3.95 1.48-1.48 2.47 2.47 6.2-6.2 1.49 1.49-7.69 7.67z" />
    </svg>
  );

  return (
    <section 
      id="about"
      className="p-8 md:p-12 min-h-[70vh] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col justify-between transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* SECTION METADATA BLOCK */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Identity Stream</div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Operational Logs
            </h2>
          </div>
          
          {/* NAVIGATION CONTROLS */}
          <div className="flex gap-4 font-mono text-xs border-b border-zinc-100 dark:border-zinc-900 sm:border-0 pb-2 sm:pb-0">
            <button
              onClick={() => setDisplayMode('feed')}
              className={`transition-colors ${displayMode === 'feed' ? 'text-zinc-900 dark:text-white font-semibold underline underline-offset-4' : 'text-zinc-400 hover:text-zinc-600'}`}
            >
              Stream
            </button>
            <button
              onClick={() => setDisplayMode('matrix')}
              className={`transition-colors ${displayMode === 'matrix' ? 'text-zinc-900 dark:text-white font-semibold underline underline-offset-4' : 'text-zinc-400 hover:text-zinc-600'}`}
            >
              Manifest
            </button>
          </div>
        </div>

        {/* PRIMARY TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* STATIC EDITORIAL PROFILE BAR */}
          <div className="md:col-span-1 space-y-6 md:sticky md:top-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800">
                <img 
                  src={profileData.avatar} 
                  alt={profileData.name} 
                  className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" }}
                />
              </div>
              <div>
                {/* NAME WITH SCALLOPED VERIFIED BADGE */}
                <h2 className="text-base font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <span>{profileData.name}</span>
                  <VerifiedBadge />
                </h2>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">{profileData.alias}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
              <p>{profileData.role}</p>
              <p className="text-zinc-400">{profileData.institution}</p>
              <div className="pt-2 space-y-1 font-mono text-[11px] text-zinc-400">
                <div>Location: {profileData.location}</div>
                <div>Core Stack: {profileData.specialization}</div>
              </div>
            </div>
          </div>

          {/* MAIN COLUMN CORE CONTENT */}
          <div className="md:col-span-2 space-y-12">
            {displayMode === 'feed' ? (
              <div className="space-y-12">
                {logs.map((log) => {
                  const isLiked = likedLogs[log.code];
                  return (
                    <article key={log.code} className="space-y-3">
                      
                      {/* ENTRY METADATA BLOCK */}
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-900 dark:text-zinc-200 font-medium">[{log.code}]</span>
                          <span className="text-zinc-200 dark:text-zinc-900">|</span>
                          <span className="tracking-wider text-[11px] font-medium text-zinc-400/80">{log.tag}</span>
                        </div>
                        <span>{log.timestamp}</span>
                      </div>

                      {/* ARTICLE ENGINE BLOCK */}
                      <div className="space-y-2">
                        <h3 className="text-[16px] font-bold tracking-tight text-zinc-900 dark:text-white">
                          {log.title}
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-zinc-500 dark:text-zinc-400 font-normal leading-[1.7] tracking-tight text-left whitespace-pre-line">
                          {log.text}
                        </p>
                      </div>

                      {/* LOW-CONTRAST RUNTIME DATA FOOTNOTE */}
                      <div className="font-mono text-[11px] text-zinc-400/60 pt-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-zinc-200 dark:bg-zinc-800"></span>
                        <span>{log.systemNote}</span>
                      </div>

                      {/* STRUCTURAL INTERACTION ELEMENTS */}
                      <div className="flex items-center gap-6 pt-2 text-xs font-mono text-zinc-400 border-b border-zinc-100 dark:border-zinc-900 pb-4">
                        <button 
                          onClick={() => handleLike(log.code)}
                          className={`flex items-center gap-1.5 transition-colors ${isLiked ? 'text-zinc-900 dark:text-white font-semibold' : 'hover:text-zinc-600'}`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                          <span>{log.metrics.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                        
                        <div className="flex items-center gap-1.5 cursor-default">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{log.metrics.comments}</span>
                        </div>

                        <button className="flex items-center gap-1.5 hover:text-zinc-600 ml-auto transition-colors">
                          <Share2 className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Sync</span>
                        </button>
                      </div>

                    </article>
                  );
                })}
              </div>
            ) : (
              /* RAW DATA STRUCTURAL FALLBACK */
              <div className="border border-zinc-100 dark:border-zinc-900 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900/10 text-zinc-500 dark:text-zinc-400 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre className="whitespace-pre-wrap">{JSON.stringify({ identity: profileData, operational_logs: logs }, null, 2)}</pre>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}