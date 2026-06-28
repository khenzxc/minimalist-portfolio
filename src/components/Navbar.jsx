import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';

export default function Navbar({ viewMode, setViewMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <div 
            className="w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            {/* 1. Top Mini Status Ticker Bar */}
            <div className="w-full border-b border-gray-100 dark:border-zinc-900 h-9 px-4 sm:px-6 flex items-center justify-between text-[11px] text-gray-400 dark:text-zinc-500 font-mono tracking-tight bg-gray-50/40 dark:bg-zinc-900/20">
                <div className="flex items-center gap-2 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Server status</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 uppercase">
                    <span>releases / tags</span>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                        <span>Like 11</span>
                    </div>
                </div>
            </div>

            {/* 2. Actual Navbar Content */}
            <header className="max-w-7xl mx-auto h-16 px-4 sm:px-6 md:px-8 flex items-center justify-between relative">
                
                {/* Brand/Logo Area & Desktop Nav */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center tracking-tight">
                        <Link to="/" className="relative w-28 sm:w-34 h-8 flex items-center justify-start -mb-0.5 -mr-4">
                            <img
                                src="/navbar-logo.png"
                                alt="Khen Logo"
                                className="h-full w-auto object-contain object-left dark:invert transition-all"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-tight">
                        <Link to="/" className={`hover:text-black dark:hover:text-white transition-colors ${location.pathname === '/' ? 'text-black dark:text-white font-black' : ''}`}>
                            About
                        </Link>
                        <Link to="/projects" className={`hover:text-black dark:hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-black dark:text-white font-black' : ''}`}>
                            Projects
                        </Link>
                        <Link to="/experience" className={`hover:text-black dark:hover:text-white transition-colors ${location.pathname === '/experience' ? 'text-black dark:text-white font-black' : ''}`}>
                            Experience
                        </Link>
                        <Link to="/collections" className={`hover:text-black dark:hover:text-white transition-colors ${location.pathname === '/collections' ? 'text-black dark:text-white font-black' : ''}`}>
                            Collections
                        </Link>
                    </nav>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3 sm:gap-4">
                    
                    {/* Dark Mode Button */}
                    <DarkMode /> 

                    {/* Resume Button */}
                    <button className="hidden sm:flex bg-[#374151] hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 text-[11px] font-bold px-3.5 py-2.5 rounded-md transition-all items-center gap-1.5 shadow-sm uppercase tracking-tight">
                        Resume <ArrowUpRight size={13} />
                    </button>

                    {/* ─── MAS PINALAKING MENU BUTTON PARA SA MOBILE ─── */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-3 -mr-3 text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all duration-200 active:scale-95 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <X size={28} className="transition-transform duration-200 rotate-0" />
                        ) : (
                            <Menu size={28} className="transition-transform duration-200 rotate-0" />
                        )}
                    </button>
                </div>
            </header>

            {/* 3. Mobile Dropdown Menu Panel */}
            {isMenuOpen && (
                <div className="lg:hidden w-full bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 px-4 py-4 space-y-3 shadow-inner uppercase tracking-tight font-bold text-xs">
                    <nav className="flex flex-col space-y-3 text-gray-500 dark:text-zinc-400">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-black dark:hover:text-white py-1 transition-colors ${location.pathname === '/' ? 'text-black dark:text-white' : ''}`}>About</Link>
                        <Link to="/projects" onClick={() => setIsMenuOpen(false)} className={`hover:text-black dark:hover:text-white py-1 transition-colors ${location.pathname === '/projects' ? 'text-black dark:text-white' : ''}`}>Projects</Link>
                        <Link to="/experience" onClick={() => setIsMenuOpen(false)} className={`hover:text-black dark:hover:text-white py-1 transition-colors ${location.pathname === '/experience' ? 'text-black dark:text-white' : ''}`}>Experience</Link>
                        <Link to="/collections" onClick={() => setIsMenuOpen(false)} className={`hover:text-black dark:hover:text-white py-1 transition-colors ${location.pathname === '/collections' ? 'text-black dark:text-white' : ''}`}>Collections</Link>
                    </nav>
                    
                    <div className="pt-2 sm:hidden">
                        <button className="w-full bg-[#374151] dark:bg-zinc-100 text-white dark:text-zinc-950 py-2.5 rounded-md flex items-center justify-center gap-1.5 text-xs font-bold transition-all">
                            View Resume <ArrowUpRight size={13} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}