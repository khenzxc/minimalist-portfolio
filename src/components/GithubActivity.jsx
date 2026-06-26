import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubActivity() {
  const githubUsername = "khenzxc"; 

  // Kulay para sa grid blocks para tumugma sa sample image
  const minimalTheme = {
    light: ['#EBEDF0', '#9BE9A8', '#40C463', '#30A14E', '#216E39'],
    dark: ['#EAEAEA', '#A3E635', '#4ADE80', '#22C55E', '#15803D'],
  };

  // Mock data para sa stats cards na nakikita sa layout ni Justine
  const stats = [
    { label: "Total Contributions", value: "1,420", color: "text-gray-900" },
    { label: "Active Days", value: "84", color: "text-gray-900" },
    { label: "Current Streak", value: "5 days", color: "text-blue-600" }, // Naka-blue gaya ng sa screenshot
    { label: "Longest Streak", value: "14 days", color: "text-gray-900" }
  ];

  return (
    <section 
      id="activity" 
      className="border-b border-gray-200 bg-white p-8 md:p-12"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main Section Header */}
        <h3 
          className="text-xl font-black text-gray-900 mb-8"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.04em'
          }}
        >
          Activity
        </h3>

        <div className="space-y-6">
          {/* Subtitle Line */}
          <div>
            <span 
              className="text-[11px] font-medium tracking-[0.15em] text-gray-400 uppercase block mb-1" 
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Heatmap
            </span>
            <p className="text-sm text-gray-500 font-normal">
              {githubUsername}'s contribution activity matrix tracked via GitHub repository updates.
            </p>
          </div>

          {/* 1. ANG APAT NA STATS CARDS (GRID SYSTEM) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-1.5"
              >
                <span className="text-[11px] font-medium text-gray-400 tracking-tight block">
                  {stat.label}
                </span>
                <span className={`text-2xl font-black tracking-tight block ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* 2. HEATMAP GRID CARD CONTAINER */}
          <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm overflow-hidden">
            <div className="flex justify-center items-center overflow-x-auto graphical-calendar-wrapper">
              
              <GitHubCalendar 
                username={githubUsername}
                blockSize={12}
                blockMargin={4}
                fontSize={11}
                theme={minimalTheme}
              />

            </div>
          </div>

          {/* Technical Metadata Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
              <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">// DATA_SOURCE</span>
              <span className="text-xs font-bold text-gray-900 block mt-1">GitHub REST Integration</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
              <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">// METRIC_YEAR</span>
              <span className="text-xs font-bold text-gray-900 block mt-1">2026 Active Cycle</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}