import React from 'react';
import { Terminal, Cpu, ArrowUpRight } from 'lucide-react';

export function TechCapabilities() {
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
              fontFamily: "'Inter', sans-serif",
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
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.title}
                </span>
                
                {/* Binago ang gap mula gap-4 patungong gap-5 para maaliwalas tingnan kahit malaki ang icons */}
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
                        // 🌟 Ginawang w-9 h-9 mula sa dating w-7 h-7 para mas malaki at kapansin-pansin
                        className="w-9 h-9 object-contain opacity-80 grayscale brightness-50 dark:invert dark:brightness-200 dark:opacity-70 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 dark:group-hover:invert-0"
                        onError={(e) => {
                          if (!e.target.src.includes('jsdelivr')) {
                            e.target.src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.slug}.svg`;
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

        {/* IN PROGRESS BLOCK */}
        <div className="pt-8 mt-12 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-200">
          <span className="text-[11px] font-medium tracking-[0.15em] text-gray-400 dark:text-zinc-500 uppercase block mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            In progress
          </span>
          
          <div className="bg-[#1A1A1A] dark:bg-zinc-950 text-white p-5 rounded-xl font-mono text-xs space-y-3 max-w-sm border border-gray-800 dark:border-zinc-850 shadow-md transition-colors duration-200">
            <div className="flex items-center justify-between text-gray-500 dark:text-zinc-600 text-[9px] tracking-wider">
              <span>LEARNING_MONITOR</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            </div>

            {learningStack.map((stack, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-200 dark:text-zinc-300">
                {stack.icon}
                <span>{stack.name}</span>
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
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.04em'
            }}
          >
            Description
          </h3>

          <div className="space-y-5 text-[15px] text-gray-500 dark:text-zinc-400 font-normal leading-[1.7] tracking-tight max-w-2xl">
            <p>
              I am a <span className="text-gray-900 dark:text-zinc-200 font-semibold">3rd Year Information Systems student at Bulacan State University</span> with a passion for building modern, user-friendly web applications and business systems. I enjoy turning ideas into practical solutions through clean, maintainable code and intuitive user experiences.
            </p>

            <p>
              I primarily work with <span className="text-blue-600 dark:text-blue-400 font-semibold">React, Node.js, Express, and MySQL</span> to develop full-stack web applications. I also use AI as a development tool to improve productivity, explore different solutions, and accelerate learning while continuously strengthening my software development skills.
            </p>

            <p>
              As a <span className="text-gray-900 dark:text-zinc-200 font-semibold">Co-Founder of NovaTech Labs</span>, I collaborate on designing and developing web-based systems, focusing on creating scalable, reliable, and efficient solutions from planning to deployment.
            </p>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="pt-12 mt-auto flex justify-end">
          <button
            className="bg-[#2D2D2D] hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-xs font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2 tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Story <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

    </section>
  );
}