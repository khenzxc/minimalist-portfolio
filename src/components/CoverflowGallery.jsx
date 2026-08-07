import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CoverflowGallery({ badges, activeIdx, setActiveIdx }) {
  const navigate = useNavigate();
  const n = badges.length;
  const cardWidth = 280;
  const cardHeight = 210;
  const gap = 6;
  const tilt = 12;
  const sideTilt = 6;
  const perspective = 1000;
  const depth = 160;
  const scaleStep = 0.15;
  const maxVisible = 2;

  const lockRef = useRef(false);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 400);
  }, []);

  const step = useCallback((dir) => {
    if (lockRef.current) return;
    lock();
    setActiveIdx((a) => (((a + dir) % n) + n) % n);
  }, [n, lock, setActiveIdx]);

  const handleCardClick = (i) => {
    if (lockRef.current) return;
    lock();
    if (i === activeIdx) {
      navigate('/collections');
    } else {
      setActiveIdx(i);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* 3D Viewport */}
      <div
        tabIndex={0}
        role="group"
        aria-label="Badges 3D Showcase"
        onKeyDown={onKeyDown}
        className="relative w-full h-[280px] flex items-center justify-center overflow-visible focus:outline-none select-none py-4"
        style={{ perspective: `${perspective}px` }}
      >
        <div
          className="relative"
          style={{
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d"
          }}
        >
          {badges.map((badge, i) => {
            let rel = i - activeIdx;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;

            const ax = Math.abs(rel);
            const visible = ax <= maxVisible;
            const isActive = rel === 0;
            const sc = Math.max(0.4, 1 - ax * scaleStep);
            const tx = rel * (gap * 28);
            const tz = -ax * depth;
            const ry = -rel * tilt;
            const rz = rel * sideTilt;

            return (
              <div
                key={i}
                onClick={() => handleCardClick(i)}
                className={`group absolute left-1/2 top-1/2 rounded-2xl overflow-hidden border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl ${
                  isActive
                    ? 'border-zinc-600 cursor-pointer ring-2 ring-blue-500/50'
                    : 'border-zinc-800 cursor-pointer hover:border-zinc-700'
                }`}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
                  opacity: visible ? 1 : 0,
                  pointerEvents: visible ? "auto" : "none",
                  zIndex: n - ax
                }}
              >
                {/* 1. PURE ORIGINAL IMAGE */}
                {badge.certUrl && (
                  <img 
                    src={badge.certUrl} 
                    alt={badge.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* 2. TEXT OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-black/85 backdrop-blur-md p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
                  <div>
                    <span className="text-[9px] font-mono bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/40 uppercase tracking-wider block w-fit mb-2">
                      {badge.event.split(" ")[0]}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 block tracking-wider uppercase truncate">
                      {badge.event}
                    </span>
                    <h4 className="text-sm font-black text-white tracking-tight mt-0.5 line-clamp-2">
                      {badge.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-zinc-300 leading-snug line-clamp-3">
                    {badge.description}
                  </p>
                </div>

                {/* Dim overlay for non-active cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-300 z-20 group-hover:opacity-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center gap-3 mt-3">
        <button
          onClick={() => step(-1)}
          className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Previous Badge"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-1.5">
          {badges.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIdx(dotIdx)}
              className={`h-1.5 rounded-full transition-all ${
                activeIdx === dotIdx
                  ? 'w-6 bg-blue-500'
                  : 'w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => step(1)}
          className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Next Badge"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}