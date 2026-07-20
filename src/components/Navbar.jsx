import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Download, Eye, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';

export default function Navbar({ viewMode, setViewMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    const resumePdfUrl = "/Gabriel-Resume.pdf"; // Palitan ito ng actual filename mo sa public folder

    // I-handle ang pag-click sa labas ng dropdown para kusang masara ito
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsResumeDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLinkClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false); 
    };

    return (
        <div 
            className="w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-200"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
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
                        <Link 
                            to="/" 
                            onClick={() => handleLinkClick('/')}
                            className="relative w-28 sm:w-34 h-8 flex items-center justify-start -mb-0.5 -mr-4"
                        >
                            <img
                                src="/navbar-logo.png"
                                alt="Khen Logo"
                                className="h-full w-auto object-contain object-left dark:invert transition-all"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-tight">
                        <Link 
                            to="/about" 
                            onClick={() => handleLinkClick('/about')}
                            className={`hover:text-black dark:hover:text-white transition-colors decoration-2 underline-offset-4 ${location.pathname === '/about' ? 'text-black dark:text-white font-black underline' : ''}`}
                        >
                            About
                        </Link>
                        <Link 
                            to="/projects" 
                            onClick={() => handleLinkClick('/projects')}
                            className={`hover:text-black dark:hover:text-white transition-colors decoration-2 underline-offset-4 ${location.pathname === '/projects' ? 'text-black dark:text-white font-black underline' : ''}`}
                        >
                            Projects
                        </Link>
                        <Link 
                            to="/experience" 
                            onClick={() => handleLinkClick('/experience')}
                            className={`hover:text-black dark:hover:text-white transition-colors decoration-2 underline-offset-4 ${location.pathname === '/experience' ? 'text-black dark:text-white font-black underline' : ''}`}
                        >
                            Experience
                        </Link>
                        <Link 
                            to="/collections" 
                            onClick={() => handleLinkClick('/collections')}
                            className={`hover:text-black dark:hover:text-white transition-colors decoration-2 underline-offset-4 ${location.pathname === '/collections' ? 'text-black dark:text-white font-black underline' : ''}`}
                        >
                            Collections
                        </Link>
                    </nav>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3 sm:gap-4">
                    
                    {/* Dark Mode Button */}
                    <DarkMode /> 

                    {/* INTERACTIVE DESKTOP RESUME DROPDOWN */}
                    <div className="hidden sm:relative sm:block" ref={dropdownRef}>
                        <button 
                            onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                            className="bg-[#374151] hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 text-[11px] font-bold px-3.5 py-2.5 rounded-md transition-all flex items-center gap-1.5 shadow-sm uppercase tracking-tight"
                        >
                            Resume <ChevronDown size={12} className={`transition-transform duration-200 ${isResumeDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isResumeDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-lg py-1 z-50 text-xs font-semibold uppercase tracking-tight text-gray-700 dark:text-zinc-300">
                                <a 
                                    href={resumePdfUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={() => setIsResumeDropdownOpen(false)}
                                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    <Eye size={14} /> View PDF
                                </a>
                                <a 
                                    href={resumePdfUrl} 
                                    download="Gabriel_Khen_Vonoe_Resume.pdf"
                                    onClick={() => setIsResumeDropdownOpen(false)}
                                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors border-t border-gray-100 dark:border-zinc-800"
                                >
                                    <Download size={14} /> Download PDF
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Menu Button para sa Mobile */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-3 -mr-3 text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all duration-200 active:scale-95 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </header>

            {/* 3. Mobile Dropdown Menu Panel */}
            {isMenuOpen && (
                <div className="lg:hidden w-full bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 px-4 py-4 space-y-4 shadow-inner uppercase tracking-tight font-bold text-xs">
                    <nav className="flex flex-col space-y-3 text-gray-500 dark:text-zinc-400">
                        <Link to="/about" onClick={() => handleLinkClick('/about')} className={`hover:text-black dark:hover:text-white py-1 transition-colors decoration-2 underline-offset-4 ${location.pathname === '/about' ? 'text-black dark:text-white underline' : ''}`}>About</Link>
                        <Link to="/projects" onClick={() => handleLinkClick('/projects')} className={`hover:text-black dark:hover:text-white py-1 transition-colors decoration-2 underline-offset-4 ${location.pathname === '/projects' ? 'text-black dark:text-white underline' : ''}`}>Projects</Link>
                        <Link to="/experience" onClick={() => handleLinkClick('/experience')} className={`hover:text-black dark:hover:text-white py-1 transition-colors decoration-2 underline-offset-4 ${location.pathname === '/experience' ? 'text-black dark:text-white underline' : ''}`}>Experience</Link>
                        <Link to="/collections" onClick={() => handleLinkClick('/collections')} className={`hover:text-black dark:hover:text-white py-1 transition-colors decoration-2 underline-offset-4 ${location.pathname === '/collections' ? 'text-black dark:text-white underline' : ''}`}>Collections</Link>
                    </nav>
                    
                    {/* MOBILE RESUME ACTION LINKS */}
                    <div className="pt-2 sm:hidden border-t border-gray-100 dark:border-zinc-900 space-y-2">
                        <a 
                            href={resumePdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-gray-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 py-2.5 rounded-md flex items-center justify-center gap-1.5 text-xs font-bold transition-all"
                        >
                            <Eye size={14} /> View Resume
                        </a>
                        <a 
                            href={resumePdfUrl} 
                            download="Gabriel_Khen_Vonoe_Resume.pdf"
                            className="w-full bg-[#374151] dark:bg-zinc-100 text-white dark:text-zinc-950 py-2.5 rounded-md flex items-center justify-center gap-1.5 text-xs font-bold transition-all"
                        >
                            <Download size={14} /> Download Resume
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}