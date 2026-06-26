import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ viewMode, setViewMode }) {
    // State para sa pagbubukas at pagsasara ng mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div 
            className="w-full bg-white border-b border-gray-200 sticky top-0 z-50"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            {/* 1. Top Mini Status Ticker Bar */}
            <div className="w-full border-b border-gray-100 h-9 px-4 sm:px-6 flex items-center justify-between text-[11px] text-gray-400 font-mono tracking-tight bg-gray-50/40">
                <div className="flex items-center gap-2 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
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
                        <div className="relative w-28 sm:w-34 h-8 flex items-center justify-start -mb-0.5 -mr-4">
                            <img
                                src="/navbar-logo.png"
                                alt="Khen Logo"
                                className="h-full w-auto object-contain object-left"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation Links (Naka-hide sa mobile) */}
                    <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-tight">
                        <a href="#about" className="hover:text-black transition-colors">About</a>
                        <a href="#projects" className="hover:text-black transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-black transition-colors">Experience</a>
                        <a href="#collections" className="hover:text-black transition-colors">Collections</a>
                    </nav>
                </div>

                {/* Right Side Actions: Toggles, Call Button, at Hamburger Icon */}
                <div className="flex items-center gap-2 sm:gap-4">
                    
                    {/* Mode Toggle Switcher - Responsive Text Sizing */}
                    <div className="bg-gray-100 p-0.5 rounded-full flex items-center text-[10px] border border-gray-200/60 uppercase tracking-tight">
                        <button
                            onClick={() => setViewMode('personal')}
                            className={`px-2.5 sm:px-3 py-1 rounded-full font-bold transition-all ${viewMode === 'personal' ? 'bg-[#374151] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Personal
                        </button>
                        <button
                            onClick={() => setViewMode('professional')}
                            className={`px-2.5 sm:px-3 py-1 rounded-full font-bold transition-all ${viewMode === 'professional' ? 'bg-[#374151] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Prof
                        </button> 
                        {/* 💡 Ginawang "Prof" sa mobile, pero kung malaki screen, kusa 'yang magbabago kung gusto mo */}
                    </div>

                    {/* Call Button (Naka-hide sa pinakamaliliit na screen para iwas siksikan, lalabas sa sm:block) */}
                    <button className="hidden sm:flex bg-[#374151] hover:bg-black text-white text-[11px] font-bold px-3.5 py-2.5 rounded-md transition-all items-center gap-1.5 shadow-sm uppercase tracking-tight">
                        Schedule <ArrowUpRight size={13} />
                    </button>

                    {/* Hamburger Button para sa Mobile Layout */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* 3. Mobile Dropdown Menu Panel */}
            {isMenuOpen && (
                <div className="lg:hidden w-full bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-inner uppercase tracking-tight font-bold text-xs">
                    <nav className="flex flex-col space-y-3 text-gray-500">
                        <a 
                            href="#about" 
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-black py-1 transition-colors"
                        >
                            About
                        </a>
                        <a 
                            href="#projects" 
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-black py-1 transition-colors"
                        >
                            Projects
                        </a>
                        <a 
                            href="#experience" 
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-black py-1 transition-colors"
                        >
                            Experience
                        </a>
                        <a 
                            href="#collections" 
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-black py-1 transition-colors"
                        >
                            Collections
                        </a>
                    </nav>
                    
                    {/* CTA Button sa loob ng Mobile Menu para sa maliliit na screen */}
                    <div className="pt-2 sm:hidden">
                        <button className="w-full bg-[#374151] text-white py-2.5 rounded-md flex items-center justify-center gap-1.5">
                            Schedule a Call <ArrowUpRight size={13} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}