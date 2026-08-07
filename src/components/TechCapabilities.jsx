import React, { useState } from 'react'; // 🛠️ Idinagdag ang useState para sa modal state
// 🎯 IMPORT LINK MULA SA REACT-ROUTER-DOM
import { Link } from 'react-router-dom';
import { Terminal, Cpu, ArrowUpRight } from 'lucide-react';

export function TechCapabilities() {
  // 🟢 State para malaman kung nakabukas ang pop-up ng profile picture
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", slug: "javascript" },
        { name: "Java", slug: "oraclejava" },
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
      title: "AI Models & Ecosystems",
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

  const learningStack = [
    { name: "Database Architecture & ERD Design", icon: <Terminal size={12} className="text-blue-400" /> },
    { name: "Smart Contract Audits (Base / Solidity)", icon: <Cpu size={12} className="text-blue-400" /> }
  ];

  return (
    <section
      className="flex flex-col lg:flex-row border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 items-stretch transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >

      {/* 🚀 TECH STACK MATRIX COLUMN */}
      <div className="w-full lg:w-1/2 lg:border-r border-gray-200 dark:border-zinc-800 p-8 md:p-12 flex flex-col justify-between h-full order-2 lg:order-1 transition-colors duration-200">
        <div>
          <h3
            className="text-xl font-black text-gray-900 dark:text-white mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '-0.04em'
            }}
          >
            Tech Stack
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {categories.map((cat) => (
              <div key={cat.title} className="space-y-4">
                <span
                  className="text-[11px] font-medium tracking-[0.15em] text-gray-400 dark:text-zinc-500 uppercase block"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {cat.title}
                </span>

                <div className="flex flex-wrap gap-5 items-center">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="group relative flex items-center justify-center cursor-pointer transition-transform duration-150 hover:scale-110"
                    >
                      <img
                        src={`https://unpkg.com/simple-icons@v11/icons/${tech.slug}.svg`}
                        alt={tech.name}
                        className="w-9 h-9 object-contain opacity-80 grayscale brightness-50 transition-all duration-200 
                                   hover:grayscale-0 hover:opacity-100 hover:brightness-100 
                                   dark:invert dark:brightness-200 dark:opacity-70 
                                   dark:group-hover:invert dark:group-hover:brightness-200 dark:group-hover:opacity-70"
                        onError={(e) => {
                          const target = e.target;
                          if (!target.src.includes('jsdelivr')) {
                            target.src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.slug}.svg`;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 📋 DESCRIPTION COLUMN */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white dark:bg-zinc-900 h-full order-1 lg:order-2 border-b lg:border-b-0 border-gray-200 dark:border-zinc-800 transition-colors duration-200">
        <div>
          <h3
            className="text-xl font-black text-gray-900 dark:text-white mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '-0.04em'
            }}
          >
            Description 
          </h3>

     

          <div className="space-y-5 text-[15px] text-gray-500 dark:text-zinc-400 font-normal leading-[1.7] tracking-tight max-w-2xl text-justify">
            <p>
              I'm an <span className="text-gray-900 dark:text-zinc-200 font-semibold">Information Systems student at Bulacan State University</span> with a passion for building modern, user-friendly web applications and business systems. I enjoy turning ideas into practical solutions through clean, maintainable code and intuitive user experiences.
            </p>

            <p>
              I primarily work with <span className="text-blue-600 dark:text-blue-400 font-semibold">React, Node.js, Express, and MySQL</span> to develop full-stack web applications. I also use AI as a development tool to improve productivity, explore different solutions, and accelerate learning while continuously strengthening my software development skills.
            </p>

          </div>
        </div>

        {/* 🎯 STORY ACTION LINK PANEL */}
        <div className="pt-12 mt-auto flex justify-end">
          <Link
            to="/about"
            className="bg-[#2D2D2D] hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-xs font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Story <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* 💥 LIGHTBOX MODAL OVERLAY */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-sm sm:max-w-md w-full aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
          >
            <img 
              src="profile.jpg" 
              alt="Profile Full View" 
              className="w-full h-full object-cover"
            />
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white px-3 py-1.5 rounded-xl backdrop-blur-md transition-colors text-xs font-sans font-medium"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}