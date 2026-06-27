import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Project from './pages/Project'; 
import Collections from './pages/Collection'; // 👈 1. Palitan ang import para sa Collections page
import UnderDevelopment from './components/UnderDevelopment'; 
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [viewMode, setViewMode] = useState('personal');

  return (
    // 1. Binago ang main background para maging `dark:bg-zinc-950` at text `dark:text-zinc-50`
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 font-sans antialiased flex flex-col justify-between transition-colors duration-200">
      
      <ScrollToTop />

      <div>
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          {/* 2. Binago ang inner wrapper: `dark:bg-zinc-900` at `dark:border-zinc-800` */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden rounded-none md:rounded-md transition-colors duration-200">
            
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

              {/* 🎨 Collections Route - Live na ang Certificates mo rito! */}
              <Route path="/collections" element={<Collections />} /> {/* 👈 2. In-update na Route */}

            </Routes>
            
            <Footer />
            
          </div>
        </main>
      </div>

    </div>
  );
}