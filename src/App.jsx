import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { TechCapabilities } from './components/TechCapabilities';
import ProjectShowcase from './components/ProjectShowcase';
import GithubActivity from './components/GithubActivity'; 
import Footer from './components/Footer'; // 1. I-import ang bagong Footer component

export default function App() {
  const [viewMode, setViewMode] = useState('personal');

  return (
    // Isang malinis at seamless background canvas
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans antialiased flex flex-col justify-between">
      
      <div>
        {/* NAVBAR: Naka-unconstrained sa width kaya abot hanggang dulo ng screen */}
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        
        {/* MAIN GRID CANVAS: 
          Dito naman pumapasok ang side padding at maximum constraint. 
          Ito ang gumagawa ng frame effect kung saan hindi nakadikit sa gilid ang mga card content mo.
        */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-none md:rounded-md">
            
            <Hero />
            <TechCapabilities />
            <ProjectShowcase />
            
            {/* 2. Dito natin isasalpak ang Github Heatmap sa pinakailalim ng container block */}
            <GithubActivity />
            <Footer/>
            
          </div>
        </main>
      </div>


    </div>
  );
}