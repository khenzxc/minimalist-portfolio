import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Collections() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      event: "CodeChum Engine",
      title: "Algorithmic Programming Challenge",
      imageSrc: "./codechum-cert.jpg",
    },
    {
      event: "PSITE RAITE",
      title: "Regional Hackathon Championship",
      subtitle: "1st Runner-Up Achievement",
      imageSrc: "./1st-runner-up.jpeg",
    },
    {
      event: "PSITE RAITE",
      title: "Technical Excellence Showcase",
      subtitle: "Best Presentation Distinction",
      imageSrc: "./best-presentation.jpeg",
    },
  ];

  return (
    <section
      id="collections"
      className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-[60vh] antialiased selection:bg-zinc-100 dark:selection:bg-zinc-900 transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-100 dark:border-zinc-900">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Certifications
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Certifications & Achievements
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="group border border-zinc-200/70 dark:border-zinc-900/80 hover:border-zinc-400 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/20 rounded-xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Event */}
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {cert.event}
                </p>

                {/* Preview */}
                <div className="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="pt-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  {cert.subtitle && (
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {cert.subtitle}
                    </p>
                  )}
                </div>

                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-5 py-4">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {selectedCert.event}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center bg-zinc-50 dark:bg-zinc-900/20 p-5 max-h-[70vh] overflow-auto">
              <img
                src={selectedCert.imageSrc}
                alt={selectedCert.title}
                className="max-w-full h-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-zinc-200 dark:border-zinc-800 px-5 py-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
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