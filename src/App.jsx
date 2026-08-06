import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Project from './pages/Project'; 
import About from './pages/About'; 
import Collections from './pages/Collection'; 
import UnderDevelopment from './components/UnderDevelopment'; 
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  const [viewMode, setViewMode] = useState('personal');

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 font-sans antialiased flex flex-col justify-between transition-colors duration-200">
      
      <ScrollToTop />

      <ScrollToTopButton />

      <div className="flex-1 flex flex-col">
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        
        {/* MAIN CONTAINER: Kaunting space sa mobile (px-2 py-3), balik sa malawak pag-desktop */}
        <main className="w-full max-w-7xl mx-auto px-2 sm:px-6 md:px-8 py-3 md:py-8 flex-1 flex flex-col">
          <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden rounded-md transition-colors duration-200">
            
            <div className="flex-1">
              <Routes>
                {/* 🏠 Home Page Route */}
                <Route path="/" element={<Home />} />

                {/* ℹ️ About Route */}
                <Route path="/about" element={<About />} /> 

                {/* 🚀 Projects Page Route */}
                <Route path="/projects" element={<Project />} /> 

                {/* 💼 Experience Route */}
                <Route 
                  path="/experience" 
                  element={
                    <UnderDevelopment 
                      title="Work Experience"
                      subtitle="My work experience will be available soon."  
                      theme="light" 
                    />
                  } 
                />

                {/* 🎨 Collections Route */}
                <Route path="/collections" element={<Collections />} />

              </Routes>
            </div>
            
            <Footer />
            
          </div>
        </main>
      </div>

    </div>
  );
}