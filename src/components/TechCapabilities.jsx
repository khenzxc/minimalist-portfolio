import React from 'react';
import { Terminal, Cpu, ArrowUpRight } from 'lucide-react';

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
          
          {/* ✨ PINAGANDANG DESCRIPTION BASE SA INFO MO ✨ */}
          <div className="space-y-5 text-[15px] text-gray-500 font-normal leading-[1.7] tracking-tight max-w-2xl">
            <p>
              I am a <span className="text-gray-900 font-semibold">3rd Year Information Systems student at Bulacan State University</span>, deeply passionate about building human-centric software. My core focus lies in software engineering and design infrastructure, with a strong emphasis on writing clean, clean-coded, and highly interactive user interfaces.
            </p>
            <p>
              Driven by programming as my true passion, I actively practice an <span className="text-blue-600 font-semibold">AI-augmented development workflow</span>. By integrating advanced LLMs directly into my coding cycles, I fast-track architectural planning, optimize database indexing, and continuously build clean frontend applications.
            </p>
            <p>
              As <span className="text-gray-900 font-semibold">Co-Founder of NovaTech Labs</span>, I channel this passion into developer infrastructure, exploring modern web setups and system scaling strategies to refine products from blueprint to implementation.
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