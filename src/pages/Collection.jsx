import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Collections() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "CERT-01",
      event: "CodeChum Engine",
      title: "Algorithmic Programming Challenge",
      imageSrc: "./codechum-cert.jpg" 
    },
    {
      id: "CERT-02",
      event: "PSITE RAITE",
      title: "Regional Hackathon Championship",
      subtitle: "1st Runner-Up Achievement",
      imageSrc: "./1st-runner-up.jpeg"
    },
    {
      id: "CERT-03",
      event: "PSITE RAITE",
      title: "Technical Excellence Showcase",
      subtitle: "Best Presentation Distinction",
      imageSrc: "./best-presentation.jpeg"
    }
  ];

  return (
    <section 
      id="collections"
      className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-[60vh] antialiased selection:bg-zinc-100 dark:selection:bg-zinc-900 transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-100 dark:border-zinc-900">
        
        {/* SECTION METADATA */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Verifications</div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Curated Credentials
          </h2>
        </div>

        {/* COMPACT CLEAN GRID ARRAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group border border-zinc-200/70 dark:border-zinc-900/80 hover:border-zinc-400 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/20 rounded-xl p-5 flex flex-col justify-between cursor-pointer transition-colors"
            >
              <div className="space-y-4">
                {/* SYSTEM TAG LINE */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>[{cert.id}]</span>
                  <span className="text-[11px] font-medium tracking-wide text-zinc-400/80 uppercase">{cert.event}</span>
                </div>

                {/* GRAPHIC FRAME PREVIEW (Natural Colors Kept) */}
                <div className="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 rounded-lg overflow-hidden relative flex items-center justify-center p-2">
                  <img 
                    src={cert.imageSrc} 
                    alt={cert.title}
                    className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* CARD FOOTER LABELING */}
              <div className="pt-5 flex items-end justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-[13px] font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  {cert.subtitle && (
                    <p className="text-[11px] font-mono text-zinc-400">{cert.subtitle}</p>
                  )}
                </div>

                <span className="inline-flex h-7 w-7 rounded-lg items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                  <ArrowUpRight size={13} />
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ================= EDITORIAL LIGHTBOX ENGINE ================= */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-zinc-950/40 dark:bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white dark:bg-zinc-950 rounded-xl max-w-2xl w-full border border-zinc-200 dark:border-zinc-900 flex flex-col overflow-hidden animate-fade-in shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LIGHTBOX CONTROL HEADER */}
            <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/10">
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold font-mono tracking-tight text-zinc-900 dark:text-zinc-100">
                  {selectedCert.title}
                </h4>
                <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">{selectedCert.event}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* ART CANVAS MAIN PORT (Natural Colors Kept) */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900/20 flex items-center justify-center max-h-[60vh] overflow-y-auto">
              <img 
                src={selectedCert.imageSrc} 
                alt={selectedCert.title} 
                className="max-w-full h-auto object-contain rounded-lg border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-950"
              />
            </div>

            {/* ACTION LOWER DISMISSAL BAR */}
            <div className="p-3 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 flex justify-end">
              <button 
                onClick={() => setSelectedCert(null)}
                className="font-mono text-[11px] text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 px-4 py-1.5 rounded-lg transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}