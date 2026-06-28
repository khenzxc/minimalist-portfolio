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
                relative inline-flex h-8 w-14 items-center rounded-full 
                transition-colors duration-300 focus:outline-none
                ${isDark ? 'bg-zinc-800 border border-zinc-700' : 'bg-gray-200 border border-gray-300'}
            `}
            aria-label="Toggle Dark Mode"
        >
            {/* Ang gumagalaw na bilog (Knob) */}
            <span
                className={`
                    flex h-6 w-6 items-center justify-center rounded-full 
                    transition-transform duration-300 shadow-md
                    ${isDark ? 'translate-x-7 bg-white text-zinc-900' : 'translate-x-1 bg-zinc-900 text-white'}
                `}
            >
                {/* Light Mode: Madilim na Sun on Puting Knob */}
                {/* Dark Mode: Maputing Moon on Itim na Knob */}
                {isDark ? (
                    <Moon size={14} strokeWidth={2} />
                ) : (
                    <Sun size={14} strokeWidth={2.5} />
                )}
            </span>
        </button>
    );
}