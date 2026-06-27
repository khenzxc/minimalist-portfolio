import React from 'react';

export default function UnderDevelopment({ title, subtitle, moduleName, theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <div 
      className={`w-full py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-zinc-800 relative overflow-hidden flex flex-col items-center justify-center min-h-[420px] transition-colors duration-200 ${
        isDark ? 'bg-[#0D1117] text-white' : 'bg-white dark:bg-zinc-900 text-gray-900 dark:text-white'
      }`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Background Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${
        isDark ? 'bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]' : 'bg-[radial-gradient(#000_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)]'
      } [background-size:24px_24px]`} />

      <div className="relative z-10 text-center max-w-xl space-y-4">
        {/* Animated System Status Badge */}
        <div className={`inline-flex items-center gap-2 border font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${
          isDark 
            ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
            : 'bg-blue-500/10 border-blue-500/20 text-blue-600'
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${isDark ? 'bg-amber-500' : 'bg-blue-500'}`} />
          System: {moduleName || 'Core'} // Status: Pending
        </div>

        {/* Dynamic Section Title */}
        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
          {title}
        </h2>

        {/* Dynamic Context Description */}
        <p className={`text-sm font-mono max-w-md mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500 dark:text-zinc-400'}`}>
          {subtitle || '[DATA_LOCKED]: Compilation loops and architectural node parameters are currently being deployed.'}
        </p>

        {/* Micro Tech Loader Decoration */}
        <div className="pt-6 max-w-xs mx-auto">
          <div className={`w-full border rounded p-3 text-left font-mono text-[10px] space-y-1 transition-colors duration-200 ${
            isDark ? 'bg-neutral-900/60 border-neutral-800 text-gray-500' : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-500'
          }`}>
            <div className={`flex justify-between ${isDark ? 'text-amber-400/70' : 'text-blue-500/70'}`}>
              <span>&gt; initializing_buffer_stream...</span>
              <span className="animate-pulse">LOADING</span>
            </div>
            <div className={`w-full h-1.5 rounded-full overflow-hidden mt-1 ${isDark ? 'bg-neutral-800' : 'bg-gray-200 dark:bg-zinc-700'}`}>
              <div className={`h-full w-[60%] animate-pulse ${isDark ? 'bg-amber-500' : 'bg-blue-500'}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}