import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Project() {
  const socialLinks = [
    { 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      url: "https://github.com/khenzxc", 
      label: "GitHub" 
    },
    { 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      ), 
      url: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.025.464.139a.505.505 0 0 1 .154.331c.015.109.034.368.019.57-.19 1.996-.999 6.756-1.409 8.956-.174.93-.517 1.242-.849 1.272-.722.067-1.27-.474-1.967-.931-1.091-.714-1.707-1.159-2.766-1.854-1.223-.804-.43-1.246.267-1.972.182-.19 3.35-3.074 3.411-3.334a.243.243 0 0 0-.057-.221c-.053-.047-.13-.031-.186-.018-.08.018-1.277.81-3.602 2.379-.34.234-.649.349-.926.342-.306-.007-.894-.173-1.332-.315-.537-.174-.964-.266-.927-.561.019-.154.232-.312.639-.474 2.497-1.087 4.161-1.804 4.992-2.152 2.375-.993 2.868-1.166 3.19-.172z"/>
        </svg>
      ), 
      url: "https://telegram.org", 
      label: "Telegram" 
    },
  ];

  const projects = [
    {
      title: "GO-MIROFISH",
      subtitle: "Universal Swarm Intelligence Engine",
      description: "A distributed system built to parse extensive documentation inputs and process modern high-velocity predictive model loops.",
      link: "https://go-mirofish.vercel.app/",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      badge: "🐟"
    },
    {
      title: "HYPERAGENT",
      subtitle: "AI-Powered Smart Contracts",
      description: "An automated design platform managing the complete validation and build sequence of blockchain smart contracts from draft to deployment loops.",
      link: "https://github.com/Hyperkit-Labs",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "AI UGC LAYER",
      subtitle: "High-Velocity Asset Engineering",
      description: "A fully configurable abstraction engine optimizing user-generated-content asset injection and execution pipelines in real-time.",
      link: "https://github.com/Justinedevs",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "RCS TERMINAL",
      subtitle: "Roblox AI OS Creator Skills",
      description: "A low-latency execution layer tailored for Codex CLI, automating and validating real-time developer workflows inside target sandbox environments.",
      link: "https://www.producthunt.com",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen antialiased selection:bg-zinc-100 dark:selection:bg-zinc-900 transition-colors duration-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* FEATURED PROJECTS HEADER */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-10 border-b border-zinc-100 dark:border-zinc-900">
        <div className="space-y-3">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Selected Works</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Project Showcase
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-[14px] max-w-xl font-normal leading-relaxed tracking-tight">
            An index of interactive systems, backend frameworks, and experimental pipelines exploring full-stack engineering bounds.
          </p>
        </div>

        {/* REFINED MICRO INTERACTION SOCIAL CHIPS */}
        <div className="flex items-center gap-2 mt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className="h-8 w-8 border border-zinc-100 dark:border-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </header>

      {/* MINIMALIST COMPONENT GRID */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col space-y-4">
              
              {/* CLEAN ASPECT RATIO CANVAS */}
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {project.badge && (
                  <div className="absolute bottom-3 left-3 h-7 w-7 rounded-lg bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800 flex items-center justify-center text-xs">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* CARD DETAILS WRAPPER */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white uppercase font-mono">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400 tracking-tight truncate max-w-[180px] md:max-w-[240px]">
                      {project.link.replace('https://', '')}
                    </span>
                  </div>
                  
                  <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 font-mono">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-[14px] text-zinc-500 dark:text-zinc-400 font-normal leading-[1.6] tracking-tight pt-1">
                    {project.description}
                  </p>
                </div>

                {/* EDITORIAL REFINED CTAS */}
                <div className="pt-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1 group/btn"
                  >
                    <span>Inspect Target</span>
                    <ExternalLink size={11} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </section>
      </main>
    </div>
  );
}