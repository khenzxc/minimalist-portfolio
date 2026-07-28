import React, { useState } from 'react';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

export default function About() {
  const [displayMode, setDisplayMode] = useState('feed'); // 'feed' | 'matrix'
  const [likedLogs, setLikedLogs] = useState({});
  const [topImageIndex, setTopImageIndex] = useState(0);

  const profileData = {
    name: "Khen Vonoe D. Gabriel",
    alias: "@khenzxc",
    role: "Aspiring Software Engineer",
    institution: "Bulacan State University",
    location: "Pulilan, PH",
    specialization: "Web Development & AI Tooling Integrations",
    avatar: "profile.jpg"
  };

  const galleryImages = [
    { id: 1, src: "khen.jpeg", alt: "Gym Rat" },
    { id: 2, src: "khen2.jpeg", alt: "Coffe Boy" },
    { id: 3, src: "khen3.jpeg", alt: "Best Team" },
    { id: 4, src: "khen4.jpeg", alt: "Plaque" },
    { id: 5, src: "khen5.jpeg", alt: "Best Day" }
  ];

  const logs = [
    {
      code: "05",
      tag: "THE HORIZON",
      title: "Future Streams & Ecosystem Expansion",
      text: "Engineering demands continuous adaptation to newer paradigms. Right now, I am aggressively expanding my domain experience into advanced Database Engineering patterns, complex Entity-Relationship transformations, and decentralized networks—specifically testing secure Smart Contracts via Solidity on the Base chain. My ultimate path is to become a highly versatile software architect bridging corporate core engines with web3 infrastructure.",
      timestamp: "2 weeks ago",
      metrics: { likes: 120, comments: 24 }
    },
    {
      code: "04",
      tag: "THE PHILOSOPHY",
      title: "Human-Centric Code & UX Integrity",
      text: "I operate under the philosophy that software should not simply be constructed for machine execution, but designed for human interaction. Backend logic and clean visual design must act as a single unit to generate digital environments that are predictable, lightweight, and deeply empathetic to the person using them. Across my projects, priority is strictly placed on driving down response latency, implementing rigorous error handling routines, and preserving clear code isolation.",
      timestamp: "1 week ago",
      metrics: { likes: 56, comments: 3 }
    },
    {
      code: "03",
      tag: "THE WORKFLOW",
      title: "Stack Architecture & Productivity Sync",
      text: "Currently, my technical stack focuses on creating scalable web engineering components using a modern foundation—primarily React for building interactive UI, alongside Express and Node.js for reliable backend logic and MySQL for structured data pipelines. Beyond traditional programming paradigms, I systematically leverage generative AI environments (Claude, Gemini, Grok) as real-time development co-pilots to amplify overall output velocity.",
      timestamp: "3 days ago",
      metrics: { likes: 104, comments: 18 }
    },
    {
      code: "02",
      tag: "THE RUNTIME",
      title: "Academic Endurance & BulSU Logic Loops",
      text: "As a 3rd Year Information Systems student at Bulacan State University, I discovered early on that pure interest means nothing without technical discipline. The university serves as my testing ground to deploy abstract concepts into actual production workflows. This sandbox forces me to dissect real relational database structures, map complex component states, and debug intricate logic trees until deep into the night.",
      timestamp: "Yesterday",
      metrics: { likes: 88, comments: 12 }
    },
    {
      code: "01",
      tag: "THE ORIGIN",
      title: "Sparking Curiosity & First Compiling",
      text: "It all started with a simple 'Inspect Element' tweak in high school. That was the moment I realized the digital world isn't a static environment, but a living ecosystem responding directly to our commands. Seeing an interface's structure shift layout or color because of my own input hooked me instantly—sparking a lasting drive to turn abstract concepts into tangible, responsive software platforms.",
      timestamp: "2 hrs ago",
      metrics: { likes: 42, comments: 5 }
    }
  ];

  const handleLike = (code) => {
    setLikedLogs(prev => ({ ...prev, [code]: !prev[code] }));
  };

  const cycleStack = () => {
    setTopImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const VerifiedBadge = () => (
    <svg 
      viewBox="0 0 24 24" 
      className="w-[18px] h-[18px] text-blue-500 fill-current inline-block select-none flex-shrink-0 align-middle"
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
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Profile</div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              About Khen's
            </h2>
          </div>
          
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

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* PROFILE SIDEBAR */}
          <div className="md:col-span-1 space-y-6 md:sticky md:top-8">
            <div className="space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800 shadow-sm">
                <img 
                  src={profileData.avatar} 
                  alt={profileData.name} 
                  className="w-full h-full object-cover opacity-95"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" }}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                  <span>{profileData.name}</span>
                  <VerifiedBadge />
                </h2>
                <p className="text-sm font-mono text-zinc-400 mt-1">{profileData.alias}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-900 text-sm text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">{profileData.role}</p>
              <p className="text-zinc-500 dark:text-zinc-400">{profileData.institution}</p>
              <div className="pt-2 space-y-1 font-mono text-xs text-zinc-400 font-normal">
                <div>Location: <span className="text-zinc-600 dark:text-zinc-300">{profileData.location}</span></div>
                <div>Core Stack: <span className="text-zinc-600 dark:text-zinc-300">{profileData.specialization}</span></div>
              </div>
            </div>

            {/* ================= ORGANIC SCATTER PHOTO STACK WIDGET ================= */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span>Instants Stack</span>
                <span className="text-[10px] text-zinc-400 opacity-80">Tap to cycle ({topImageIndex + 1}/{galleryImages.length})</span>
              </div>

              {/* OVERFLOW VISIBLE WRAPPER FOR SCATTER VISUALS */}
              <div className="w-full min-h-[320px] flex items-center justify-center select-none relative overflow-visible py-8">
                {galleryImages.map((img, index) => {
                  const relativeIndex = (index - topImageIndex + galleryImages.length) % galleryImages.length;
                  
                  if (relativeIndex > 2) return null;

                  const transformStyles = [
                    { scale: 1,     translateY: 0,   translateX: 0,   rotate: '-3deg' },
                    { scale: 0.97,  translateY: -10, translateX: 14,  rotate: '7deg'  },
                    { scale: 0.95,  translateY: -16, translateX: -12, rotate: '-7deg' }
                  ];

                  const currentStyle = transformStyles[relativeIndex] || { scale: 0.9, translateY: 0, translateX: 0, rotate: '0deg' };

                  return (
                    <div
                      key={img.id}
                      onClick={cycleStack}
                      style={{
                        zIndex: galleryImages.length - relativeIndex,
                        transform: `scale(${currentStyle.scale}) translateY(${currentStyle.translateY}px) translateX(${currentStyle.translateX}px) rotate(${currentStyle.rotate})`,
                        transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease',
                      }}
                      className={`absolute w-[76%] aspect-square bg-white dark:bg-zinc-900 p-1 rounded-[16px] cursor-pointer origin-center
                        ${relativeIndex === 0 
                          ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]' 
                          : 'shadow-[0_12px_24px_-8px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)]'
                        } border border-zinc-200/60 dark:border-zinc-800`}
                    >
                      <div className="w-full h-full overflow-hidden rounded-[12px] bg-zinc-150 dark:bg-zinc-800 relative">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover pointer-events-none select-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/5 pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* STACK BOTTOM META METADATA */}
              <div className="text-center font-mono text-[10px] text-zinc-400/80 tracking-tight pt-1">
                {profileData.alias} • {topImageIndex === 0 ? 'Just now' : topImageIndex === 1 ? '2h ago' : '1d ago'}
              </div>
            </div>

          </div>

          {/* MAIN COLUMN CONTENT */}
          <div className="md:col-span-2 space-y-12">
            {displayMode === 'feed' ? (
              <div className="space-y-12">
                {logs.map((log) => {
                  const isLiked = likedLogs[log.code];
                  return (
                    <article key={log.code} className="space-y-3">
                      
                      {/* ENTRY METADATA */}
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-900 dark:text-zinc-200 font-medium">[{log.code}]</span>
                          <span className="text-zinc-200 dark:text-zinc-900">|</span>
                          <span className="tracking-wider text-[11px] font-medium text-zinc-400/80">{log.tag}</span>
                        </div>
                        <span>{log.timestamp}</span>
                      </div>

                      {/* ARTICLE CONTENT */}
                      <div className="space-y-2">
                        <h3 className="text-[16px] font-bold tracking-tight text-zinc-900 dark:text-white">
                          {log.title}
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-zinc-500 dark:text-zinc-400 font-normal leading-[1.7] tracking-tight text-left whitespace-pre-line">
                          {log.text}
                        </p>
                      </div>

                      {/* METRICS & FEEDBACK DECK */}
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
              /* ALTERNATIVE DISPLAY MODE */
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