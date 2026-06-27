import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Collections() {
  // State para sa Pop-up Modal image viewer
  const [selectedCert, setSelectedCert] = useState(null);

  // Certifications list 
  const certifications = [
    {
      event: "CODECHUM",
      title: "Programming Challenge",
      bgClass: "from-cyan-950 via-slate-900 to-sky-950",
      imageSrc: "./codechum-cert.jpg" 
    },
    {
      event: "PSITE RAITE",
      title: "Hackathon Programming Challenge",
      bgClass: "from-zinc-950 via-gray-900 to-neutral-950",
      imageSrc: "./1st-runner-up.jpeg"
    },
    {
      event: "PSITE RAITE",
      title: "Hackathon Programming Challenge",
      bgClass: "from-slate-950 via-stone-900 to-zinc-950",
      imageSrc: "./best-presentation.jpeg"
    }
  ];

  return (
    <section 
      id="collections"
      // 👈 TINANGGAL ANG `border-b border-gray-200 dark:border-zinc-800` DITO
      className="p-8 md:p-12 min-h-[70vh] bg-white dark:bg-zinc-900 flex flex-col justify-between transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div>
        {/* Header Title */}
        <h3 
          className="text-xl font-black text-gray-900 dark:text-white mb-8"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}
        >
          Curated Collections
        </h3>

        {/* Grid Layout (Naka-pattern sa Featured Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="w-full rounded-3xl relative overflow-hidden group shadow-md border border-gray-200 dark:border-zinc-800 h-76 md:h-84 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: 'transparent' }}
            >
              {/* Dynamic Gradient Background Layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgClass}`} />
              
              {/* Image Preview Container */}
              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ease-out pointer-events-none z-0">
                <img 
                  src={cert.imageSrc} 
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              
              {/* Top Meta (Event Overlay) */}
              <div className="p-5 z-10 w-full bg-gradient-to-b from-black/50 via-black/10 to-transparent">
                <span className="text-[9px] font-mono text-zinc-300 block tracking-wider uppercase leading-tight">
                  {cert.event}
                </span>
              </div>

              {/* Bottom Action Section */}
              <div className="p-6 md:p-8 flex justify-between items-end z-10 mt-auto relative bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
                <h4 className="text-xs font-black text-white tracking-tight leading-snug max-w-[60%]">
                  {cert.title}
                </h4>
                
                {/* View Cert Button */}
                <button 
                  className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 dark:hover:text-zinc-900 border border-white/10 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 tracking-tight transition-all shadow-sm group-hover:scale-105"
                >
                  View Cert 
                  <ArrowUpRight size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ================= POP-UP MODAL ENGINE ================= */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative flex flex-col border border-gray-200 dark:border-zinc-800 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between bg-gray-50 dark:bg-zinc-950/50">
              <div>
                <h4 className="text-xs font-black text-gray-900 dark:text-zinc-100 tracking-tight">{selectedCert.title}</h4>
                <p className="text-[9px] text-gray-400 dark:text-zinc-500 font-mono uppercase tracking-tight mt-0.5">{selectedCert.event}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-zinc-800 transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Image Preview Body Area */}
            <div className="p-4 bg-gray-100 dark:bg-zinc-950 flex items-center justify-center overflow-auto max-h-[60vh]">
              <img 
                src={selectedCert.imageSrc} 
                alt={selectedCert.title} 
                className="max-w-full h-auto object-contain rounded-xl border border-gray-200 dark:border-zinc-800 shadow-inner bg-white dark:bg-zinc-900"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 flex justify-end gap-2 text-[11px] font-bold">
              <button 
                onClick={() => setSelectedCert(null)}
                className="border border-gray-200 dark:border-zinc-800 hover:border-gray-400 text-gray-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-200 px-4 py-2 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}