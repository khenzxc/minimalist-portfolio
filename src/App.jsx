import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Project from './pages/Project'; 
import Collections from './pages/Collection'; 
import UnderDevelopment from './components/UnderDevelopment'; 
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [viewMode, setViewMode] = useState('personal');

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 font-sans antialiased flex flex-col justify-between transition-colors duration-200">
      
      <ScrollToTop />

      <div>
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden rounded-none md:rounded-md transition-colors duration-200">
            
            <Routes>
              {/* 🏠 Home Page Route */}
              <Route path="/" element={<Home />} />

              {/* ℹ️ About Route (Inline UnderDevelopment tulad ng Experience) */}
              <Route 
                path="/about" 
                element={
                  <UnderDevelopment 
                    title="About Me" 
                    moduleName="About_Core_Index"
                    subtitle="[ERR_EMPTY_INDEX]: Compiling personal background, technical skill sets, core philosophies, and personal bio records." 
                    theme="light" 
                  />
                } 
              />

              {/* 🚀 Projects Page Route */}
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
              <Route path="/collections" element={<Collections />} />

            </Routes>
            
            <Footer />
            
          </div>
        </main>
      </div>

    </div>
  );
}