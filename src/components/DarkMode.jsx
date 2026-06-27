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
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-gray-200/60 dark:border-zinc-800 transition-all focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}