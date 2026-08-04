import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Quote } from 'lucide-react';

export default function About() {
  const [likedLogs, setLikedLogs] = useState({});
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('All');

  const profileData = {
    name: "Khen Vonoe D. Gabriel",
    alias: "@khenzxc",
    role: "Aspiring Software Engineer",
    institution: "Bulacan State University",
    location: "Pulilan, PH",
    motto: "Trust the process.",
    avatar: "profile.jpg"
  };

  const techStack = ["React", "Express", "Node.js", "MySQL", "Tailwind CSS"];

  const galleryImages = [
    { id: 1, src: "khen.jpeg", alt: "Gym Rat" },
    { id: 2, src: "khen2.jpeg", alt: "Coffee Boy" },
    { id: 3, src: "khen3.jpeg", alt: "Best Team" },
    { id: 4, src: "khen4.jpeg", alt: "Plaque" },
    { id: 5, src: "khen5.jpeg", alt: "Best Day" }
  ];

  const logs = [
    {
      id: "05",
      category: "Projects",
      title: "Building & Exploring Next Tech",
      text: "Right now, I'm diving deeper into database optimization and web dev frameworks while exploring decentralized apps and Web3 integrations. Just focused on building solid projects, learning new tools, and leveling up my skills as a developer.",
      timestamp: "2 weeks ago",
      metrics: { likes: 120, comments: 24 }
    },
    {
      id: "04",
      category: "Tech",
      title: "Human-Centric Code & UX Integrity",
      text: "I operate under the philosophy that software should not simply be constructed for machine execution, but designed for human interaction. Backend logic and clean visual design must act as a single unit to generate digital environments that are predictable and lightweight.",
      timestamp: "1 week ago",
      metrics: { likes: 56, comments: 3 }
    },
    {
      id: "03",
      category: "Tech",
      title: "Stack Architecture & Productivity Sync",
      text: "Currently, my technical stack focuses on creating scalable web engineering components using React for UI, alongside Express and Node.js for backend logic and MySQL for data pipelines.",
      timestamp: "3 days ago",
      metrics: { likes: 104, comments: 18 }
    },
    {
      id: "02",
      category: "Academics",
      title: "Academic Endurance & BulSU Logic Loops",
      text: "As an Information Systems student at Bulacan State University, I discovered early on that pure interest means nothing without technical discipline. The university serves as my testing ground to deploy abstract concepts into actual production workflows.",
      timestamp: "Yesterday",
      metrics: { likes: 88, comments: 12 }
    },
    {
      id: "01",
      category: "Origin",
      title: "Sparking Curiosity & First Compiling",
      text: "It all started with a simple 'Inspect Element' tweak in high school. That was the moment I realized the digital world isn't static, but a living ecosystem responding directly to our commands.",
      timestamp: "2 hrs ago",
      metrics: { likes: 42, comments: 5 }
    }
  ];

  const categories = ["All", "Tech", "Projects", "Academics"];

  const filteredLogs = activeTab === "All" 
    ? logs 
    : logs.filter(log => log.category.toLowerCase() === activeTab.toLowerCase());

  const handleLike = (id) => {
    setLikedLogs(prev => ({ ...prev, [id]: !prev[id] }));
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
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.941.1-1.353.277C14.774 2.535 13.493 1.5 12 1.5c-1.493 0-2.774 1.035-3.419 2.287-.412-.177-.873-.277-1.353-.277-2.109 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 4 3.818 4 .48 0 .941-.1 1.353-.277.645 1.251 1.926 2.287 3.419 2.287 1.493 0 2.774-1.036 3.419-2.287.412.177.873.277 1.353.277 3.818-1.79 3.818-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 4.19l-3.95-3.95 1.48-1.48 2.47 2.47 6.2-6.2 1.49 1.49-7.69 7.67z" />
    </svg>
  );

  const FilterTabs = () => (
    <div className="flex items-center justify-center sm:justify-start gap-1 bg-zinc-100 dark:bg-zinc-900/80 p-1 rounded-lg font-mono text-xs w-full sm:w-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md transition-all text-center ${
            activeTab === cat 
              ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm font-medium' 
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
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
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>Profile</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              About Khen
            </h2>
          </div>

          {/* FILTER CATEGORY TABS (DESKTOP ONLY) */}
          <div className="hidden sm:block">
            <FilterTabs />
          </div>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* PROFILE SIDEBAR */}
          <div className="md:col-span-1 space-y-6 md:sticky md:top-8">
            <div className="space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800 shadow-sm relative group">
                <img 
                  src={profileData.avatar} 
                  alt={profileData.name} 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" }}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                  <span>{profileData.name}</span>
                  <VerifiedBadge />
                </h2>
                <p className="text-sm font-mono text-zinc-400 mt-0.5">{profileData.alias}</p>
              </div>
            </div>

            {/* CREATIVE QUOTE BOX */}
            <div className="relative p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center gap-3">
              <Quote className="w-4 h-4 text-zinc-400 dark:text-zinc-500 flex-shrink-0" />
              <p className="text-xs italic font-mono text-zinc-600 dark:text-zinc-300 tracking-wide">
                "{profileData.motto}"
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-900 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">{profileData.role}</p>
              <p className="text-zinc-500 dark:text-zinc-400">{profileData.institution}</p>
              
              {/* TECH PILLS */}
              <div className="pt-2 space-y-2 font-mono text-xs">
                <div className="text-zinc-400 flex items-center gap-1">
                  <span>Core Stack:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded border border-zinc-200/60 dark:border-zinc-800 text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ORGANIC SCATTER PHOTO STACK WIDGET */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span>Instants Stack</span>
                <span className="text-[10px] text-zinc-400 opacity-80">Tap to cycle ({topImageIndex + 1}/{galleryImages.length})</span>
              </div>

              <div className="w-full min-h-[280px] flex items-center justify-center select-none relative overflow-visible py-4">
                {galleryImages.map((img, index) => {
                  const relativeIndex = (index - topImageIndex + galleryImages.length) % galleryImages.length;
                  if (relativeIndex > 2) return null;

                  const transformStyles = [
                    { scale: 1,    translateY: 0,   translateX: 0,   rotate: '-3deg' },
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
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* FILTER CATEGORY TABS (MOBILE ONLY - BELOW MUSIC WIDGET) */}
              <div className="block sm:hidden pt-2">
                <FilterTabs />
              </div>

            </div>

          </div>

          {/* MAIN COLUMN CONTENT */}
          <div className="md:col-span-2 space-y-10">
            <div className="space-y-10">
              {filteredLogs.map((log) => {
                const isLiked = likedLogs[log.id];
                return (
                  <article key={log.id} className="space-y-3 group">
                    
                    {/* ENTRY METADATA */}
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[10px] font-medium uppercase tracking-wider">
                        {log.category}
                      </span>
                      <span>{log.timestamp}</span>
                    </div>

                    {/* ARTICLE CONTENT */}
                    <div className="space-y-2">
                      <h3 className="text-[17px] font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {log.title}
                      </h3>
                      <p className="text-[14px] md:text-[15px] text-zinc-500 dark:text-zinc-400 font-normal leading-[1.7] tracking-tight text-left whitespace-pre-line">
                        {log.text}
                      </p>
                    </div>

                    {/* METRICS DECK */}
                    <div className="flex items-center gap-6 pt-2 text-xs font-mono text-zinc-400 border-b border-zinc-100 dark:border-zinc-900 pb-5">
                      <button 
                        onClick={() => handleLike(log.id)}
                        className={`flex items-center gap-1.5 transition-colors ${isLiked ? 'text-rose-500 font-semibold' : 'hover:text-zinc-600'}`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
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
          </div>

        </div>
      </div>
    </section>
  );
}