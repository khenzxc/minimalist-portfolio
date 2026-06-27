import React from 'react';
import { Github, Linkedin, Send, ExternalLink } from 'lucide-react';

export default function Project() {
  const socialLinks = [
    { 
      icon: <Github size={16} />, 
      url: "https://github.com/khenzxc", 
      label: "GitHub" 
    },
    { 
      icon: <Linkedin size={16} />, 
      url: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: <Send size={16} />, 
      url: "https://telegram.org", 
      label: "Telegram" 
    },
  ];

  const projects = [
    {
      title: "GO-MIROFISH: A UNIVERSAL SWARM INTELLIGENCE ENGINE, PREDICTING ANYTHING.",
      description: "Upload documents, describe what you want to predict, and execute modern distributed intelligence queries.",
      link: "https://go-mirofish.vercel.app/",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      hasBadge: true
    },
    {
      title: "HYPERAGENT: AI-POWERED SMART CONTRACT",
      description: "AI-powered smart contract development platform From blueprint to secure automated deployment loops.",
      link: "https://github.com/Hyperkit-Labs",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "AI UGC - THE BLUEPRINT FOR HIGH-VELOCITY TECHNICAL EXECUTION",
      description: "AI-UGC is a configurable AI user-generated-content layer optimizing asset injection streams in real-time.",
      link: "https://github.com/Justinedevs",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "RCS: ROBLOX AI OS (CREATOR) SKILLS",
      description: "Low and runtime layer for Codex CLI. Verified creator workflows in Roblox development environments.",
      link: "https://www.producthunt.com",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 transition-colors duration-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* HEADER BLOCK */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-200" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}>
          Project Featured Showcase
        </h1>
        
        <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base max-w-2xl font-normal leading-relaxed tracking-tight transition-colors duration-200">
          Explore websites and projects what I built. Each example demonstrates my innovation development.
        </p>

        {/* SOCIAL BAR & DECORATION ACCENT */}
        {/* 🎯 BASELINE BORDER: Naka-sync sa dulo ng Hero/Activity section lines */}
        <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-b border-gray-200 dark:border-zinc-800 pb-6 transition-colors duration-200">
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                // 🎯 BUTTON BORDERS: Naka-set sa wireframe outline look gamit ang border-gray-200 dark:border-zinc-800
                className="h-9 w-9 border border-gray-200 dark:border-zinc-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:bg-gray-900 dark:hover:bg-white hover:border-gray-900 dark:hover:border-white hover:text-white dark:hover:text-black transition-all duration-200 shadow-sm"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="h-3 w-3 bg-gray-400 dark:bg-zinc-600 rounded-sm transition-colors duration-200"></div>
        </div>
      </header>

      {/* BENTO GRID */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              // 🎯 CARD BORDERS: Eksaktong kapareho ng linya at kapal ng iba pang UI frames
              className="relative h-[420px] rounded-2xl overflow-hidden group border border-gray-200 dark:border-zinc-800 shadow-md flex flex-col justify-between p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 mix-blend-multiply"></div>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 
                  className="text-sm md:text-base font-bold leading-[1.3] text-white tracking-tight uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 text-[11px] font-normal leading-relaxed opacity-90 line-clamp-3">
                  {project.description}
                </p>
                <span className="text-[10px] text-gray-400 font-mono block opacity-60 truncate">
                  {project.link}
                </span>
              </div>

              <div className="relative z-10 flex items-end justify-between mt-auto">
                {project.hasBadge ? (
                  // 🎯 BADGE STROKES: Naka-set sa translucent glassmorphism para sa magandang blend sa madilim na image cards
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner overflow-hidden">
                    <span className="text-xs">🐟</span>
                  </div>
                ) : (
                  <div />
                )}

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 text-white hover:bg-white hover:text-black text-[11px] font-medium px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span>View Project</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}