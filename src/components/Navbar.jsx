import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ viewMode, setViewMode }) {
    return (
        <div className="w-full bg-white border-b border-gray-200">
            {/* 1. Top Mini Status Ticker Bar */}
            <div className="w-full border-b border-gray-100 h-9 px-6 flex items-center justify-between text-[11px] text-gray-400 font-mono tracking-tight bg-gray-50/40">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Server status</span>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                    <span>releases / tags</span>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                        <span>Like 11</span>
                    </div>
                </div>
            </div> {/* <-- Na-fix na ang nawawalang pagsasara ng div dito */}

            {/* 2. Actual Navbar Content */}
            <header className="max-w-7xl mx-auto h-16 px-6 md:px-8 flex items-center justify-between">
                {/* Brand/Logo Area */}
                <div className="flex items-center gap-4">
                    {/* Binabaan natin mula gap-10 patungong gap-4 para mas dikit ang Nav Items */}
                    <div className="flex items-center tracking-tight">
                        {/* - Nilagyan ng -mr-4 (negative margin-right) para hatakin lalo pabalik sa kaliwa ang Nav Links.
      - object-left para siguradong walang dead space sa unahan.
    */}
                        <div className="relative w-34 h-8 flex items-center justify-start -mb-0.5 -mr-4">
                            <img
                                src="/navbar-logo.png"
                                alt="Khen Logo"
                                className="h-full w-auto object-contain object-left"
                            />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-500">
                        <a href="#about" className="hover:text-black transition-colors">About</a>
                        <a href="#projects" className="hover:text-black transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-black transition-colors">Experience</a>
                        <a href="#collections" className="hover:text-black transition-colors">Collections</a>
                    </nav>
                </div>

                {/* Dynamic State Toggles & Call to Action */}
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-0.5 rounded-full flex items-center text-[11px] border border-gray-200/60">
                        <button
                            onClick={() => setViewMode('personal')}
                            className={`px-3 py-1 rounded-full font-medium transition-all ${viewMode === 'personal' ? 'bg-[#374151] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Personal
                        </button>
                        <button
                            onClick={() => setViewMode('professional')}
                            className={`px-3 py-1 rounded-full font-medium transition-all ${viewMode === 'professional' ? 'bg-[#374151] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Professional
                        </button>
                    </div>

                    <button className="bg-[#374151] hover:bg-black text-white text-xs font-medium px-4 py-2.5 rounded-md transition-all flex items-center gap-1.5 shadow-sm">
                        Schedule a Call <ArrowUpRight size={13} />
                    </button>
                </div>
            </header>
        </div>
    );
}