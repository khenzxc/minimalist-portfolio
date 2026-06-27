import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Project from './pages/Project'; 
import UnderDevelopment from './components/UnderDevelopment'; 
import ScrollToTop from './components/ScrollToTop'; // 👈 1. Idagdag itong import

export default function App() {
  const [viewMode, setViewMode] = useState('personal');

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans antialiased flex flex-col justify-between">
      
      {/* 👈 2. I-mount dito sa pinakataas sa loob ng App wrapper */}
      <ScrollToTop />

      <div>
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-none md:rounded-md">
            
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} /> 

              {/* 💼 Experience Route */}
              <Route 
                path="/experience" 
                element={
                  <UnderDevelopment 
                    title="Work Experience" 
                    moduleName="Experience_Log"
                    subtitle="[ERR_EMPTY_INDEX]: Compiling professional background history, engineering stack timelines, and past deployment records." 
                    theme="light" 
                  />
                } 
              />

              {/* 🎨 Collections Route */}
              <Route 
                path="/collections" 
                element={
                  <UnderDevelopment 
                    title="Curated Collections" 
                    moduleName="Asset_Registry"
                    subtitle="[BUILD_404]: Index registry for graphic components, UI repositories, and personalized smart modules is currently processing." 
                    theme="light"
                  />
                } 
              />
            </Routes>
            
            <Footer />
            
          </div>
        </main>
      </div>

    </div>
  );
}