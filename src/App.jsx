import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Ibinaba at ibinalik sa loob ng container block
import Home from './pages/Home'; 

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
            
            {/* Dito magpapalit-palit ang mga pahina depende sa URL path (e.g. Home, About, etc.) */}
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Dagdag na pages sa hinaharap na papasok din sa loob ng frame:
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} /> 
              */}
            </Routes>
            
            {/* FOOTER: Ibinalik sa loob ng card container sa pinakailalim block */}
            <Footer />
            
          </div>
        </main>
      </div>

    </div>
  );
}