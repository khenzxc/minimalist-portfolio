import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Project from './pages/Project'; // 👈 Idagdag itong import (siguraduhing nasa tamang folder)

export default function App() {
  const [viewMode, setViewMode] = useState('personal');

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans antialiased flex flex-col justify-between">
      
      <div>
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-none md:rounded-md">
            
            <Routes>
              <Route path="/" element={<Home />} />
              {/* 👈 Eto na siya! Papasok na siya nang swabe sa loob ng frame ng web app mo */}
              <Route path="/projects" element={<Project />} /> 
            </Routes>
            
            <Footer />
            
          </div>
        </main>
      </div>

    </div>
  );
}