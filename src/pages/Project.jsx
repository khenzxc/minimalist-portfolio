import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Tanging ang ArrowUpRight na lang ang natira para iwas-error

export default function Project() {
  const socialLinks = [
    { 
      // 🚀 PURE SVG GITHUB
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ), 
      url: "https://github.com/khenzxc", 
      label: "GitHub" 
    },
    { 
      // 🚀 PURE SVG LINKEDIN
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), 
      url: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      // 🚀 PURE SVG TELEGRAM
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      ), 
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
    <div className="bg-white p-8 md:p-12" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* HEADER BLOCK */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}>
          Project Featured Showcase
        </h1>
        
        <p className="text-gray-500 text-sm md:text-base max-w-2xl font-normal leading-relaxed tracking-tight">
          Explore websites and projects what I built. Each example demonstrates my innovation development.
        </p>

        {/* SOCIAL BAR & DECORATION ACCENT */}
        <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-200 shadow-sm"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="h-3 w-3 bg-gray-400 rounded-sm"></div>
        </div>
      </header>

      {/* BENTO GRID */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="relative h-[420px] rounded-2xl overflow-hidden group border border-neutral-800 shadow-md flex flex-col justify-between p-5 transition-all duration-300 hover:-translate-y-1"
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
                  className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 text-white hover:bg-white hover:text-black text-[11px] font-medium px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 shadow-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  &lt; View
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}