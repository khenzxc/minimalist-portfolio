import React from 'react';
import { AlertTriangle } from 'lucide-react'; // Gagamit tayo ng Triangle icon mula sa lucide-react

export default function UnderDevelopment({ title, subtitle, moduleName, theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <div 
      id="under-development" 
      className={`w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[420px] transition-colors duration-200 ${
        isDark ? 'bg-zinc-950 text-white' : 'bg-white dark:bg-zinc-900 text-gray-900 dark:text-white'
      }`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Background Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${
        isDark ? 'bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]' : 'bg-[radial-gradient(#000_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]'
      } [background-size:24px_24px]`} />

      <div className="relative z-10 text-center max-w-xl space-y-5">
        {/* Animated System Status Badge */}
        <div className={`inline-flex items-center gap-2 border font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${
          isDark 
            ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
            : 'bg-blue-500/10 border-blue-500/20 text-blue-600'
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${isDark ? 'bg-amber-500' : 'bg-blue-500'}`} />
          System: {moduleName || 'Core'} {/* Status: Pending */}
        </div>

        {/* Dynamic Section Title */}
        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
          {title}
        </h2>

        {/* Dynamic Context Description */}
        <p className={`text-sm font-mono max-w-md mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500 dark:text-zinc-400'}`}>
          {subtitle || '[DATA_LOCKED]: Compilation loops and architectural node parameters are currently being deployed.'}
        </p>

        {/* ⚠️ Triangle Warning Box (Pinalit sa Loading Loader) */}
        <div className="pt-4 max-w-xs mx-auto">
          <div className={`border rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition-colors duration-200 ${
            isDark 
              ? 'bg-zinc-900/40 border-amber-500/20 text-amber-400/80' 
              : 'bg-amber-500/5 border-amber-500/20 text-amber-600'
          }`}>
            {/* Ang Triangle '!' Icon */}
            <div className={`p-2 rounded-full animate-pulse ${isDark ? 'bg-amber-500/10' : 'bg-amber-500/10'}`}>
              <AlertTriangle size={24} strokeWidth={2.5} />
            </div>
            
            {/* Status Footer Text */}
            <div className="text-center font-mono text-[10px] uppercase tracking-wider space-y-0.5">
              <span className="block font-bold">Access Restricted</span>
              <span className={isDark ? 'text-zinc-500' : 'text-gray-400 dark:text-zinc-500'}>Module under construction</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}