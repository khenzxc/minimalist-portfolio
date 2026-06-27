import React from 'react';
import { ExternalLink } from 'lucide-react'; // Tanging generic icon na lang ang ititira natin

export default function Project() {
  // Gumamit ng inline SVGs para sa brand logos para iwas-error sa import
  const socialLinks = [
    { 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      url: "https://github.com/khenzxc", 
      label: "GitHub" 
    },
    { 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      ), 
      url: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.025.464.139a.505.505 0 0 1 .154.331c.015.109.034.368.019.57-.19 1.996-.999 6.756-1.409 8.956-.174.93-.517 1.242-.849 1.272-.722.067-1.27-.474-1.967-.931-1.091-.714-1.707-1.159-2.766-1.854-1.223-.804-.43-1.246.267-1.972.182-.19 3.35-3.074 3.411-3.334a.243.243 0 0 0-.057-.221c-.053-.047-.13-.031-.186-.018-.08.018-1.277.81-3.602 2.379-.34.234-.649.349-.926.342-.306-.007-.894-.173-1.332-.315-.537-.174-.964-.266-.927-.561.019-.154.232-.312.639-.474 2.497-1.087 4.161-1.804 4.992-2.152 2.375-.993 2.868-1.166 3.19-.172z"/>
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
        <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-b border-gray-200 dark:border-zinc-800 pb-6 transition-colors duration-200">
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
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