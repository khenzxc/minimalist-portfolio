import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkMode() {
    // Tinitingnan kung may naka-save na preference o gamitin ang system setting
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    // Nag-eexecute tuwing magbabago ang isDark state
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className={`
                relative inline-flex h-6 w-10 items-center rounded-full 
                transition-colors duration-300 focus:outline-none shrink-0
                ${isDark ? 'bg-zinc-800 border border-zinc-700' : 'bg-gray-200 border border-gray-300'}
            `}
            aria-label="Toggle Dark Mode"
        >
            {/* Ang gumagalaw na maliit na bilog (Knob) */}
            <span
                className={`
                    flex h-4 w-4 items-center justify-center rounded-full 
                    transition-transform duration-300 shadow-sm
                    ${isDark ? 'translate-x-[18px] bg-white text-zinc-900' : 'translate-x-0.5 bg-zinc-900 text-white'}
                `}
            >
                {isDark ? (
                    <Moon size={10} strokeWidth={2.5} />
                ) : (
                    <Sun size={10} strokeWidth={2.5} />
                )}
            </span>
        </button>
    );
}