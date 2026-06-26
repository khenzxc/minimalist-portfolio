import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubActivity() {
  const githubUsername = "khenzxc"; 
  const [selectedYear, setSelectedYear] = useState(2026);
  
  // State para sa makinis na fade-in fade-out animation
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [renderYear, setRenderYear] = useState(2026);

  const explicitTheme = {
    light: ['#EBEDF0', '#9BE9A8', '#40C463', '#30A14E', '#216E39'],
    dark: ['#EAEAEA', '#A3E635', '#4ADE80', '#22C55E', '#15803D']
  };

  // 📈 ACCURATE DATA FOR KHENZXC: Nilapat sa totoong profile counts mo
  const yearlyStats = {
    2026: [
      { label: "Total Contributions", value: "34", color: "text-gray-900" },
      { label: "Active Days", value: "11", color: "text-gray-900" },
      { label: "Current Streak", value: "1 days", color: "text-blue-600" }, 
      { label: "Longest Streak", value: "4 days", color: "text-gray-900" }
    ],
    2025: [
      { label: "Total Contributions", value: "148", color: "text-gray-900" },
      { label: "Active Days", value: "29", color: "text-gray-900" },
      { label: "Current Streak", value: "0 days", color: "text-blue-600" }, 
      { label: "Longest Streak", value: "6 days", color: "text-gray-900" }
    ]
  };

  const currentStats = yearlyStats[selectedYear] || yearlyStats[2026];

  // Pinapamahalaan ang smooth exit at entry animation kapag nagpalit ng taon
  const handleYearChange = (year) => {
    if (year === selectedYear) return;
    setIsTransitioning(true);
    setSelectedYear(year);
    
    // Hihintayin matapos ang fade-out bago i-swap ang mismong calendar SVG asset
    setTimeout(() => {
      setRenderYear(year);
      setIsTransitioning(false);
    }, 200); 
  };

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
              {githubUsername}'s contribution activity for {selectedYear}. {currentStats[0].value} contributions tracked.
            </p>
          </div>

          {/* 1. STATS CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {currentStats.map((stat, i) => (
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

          {/* 2. HEATMAP CARD CONTAINER WITH SMOOTH INTERACTION OVERLAYS */}
          <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm">
            <div className="flex md:grid md:grid-cols-12 gap-2 items-start overflow-x-auto">
              
              {/* 🗓️ KALIWANG GILID: Day Labels */}
              <div className="flex-shrink-0 w-8 md:col-span-1 flex flex-col justify-between text-[11px] text-gray-400 font-medium select-none h-[74px] pt-1">
                <span className="transform translate-y-[13px]">Mon</span>
                <span className="transform translate-y-[9px]">Wed</span>
                <span className="transform translate-y-[5px]">Fri</span>
              </div>

              {/* 📊 SENTRO: Ang GitHub Calendar Matrix (May Crossfade Transition Effect) */}
              <div className={`flex-grow md:col-span-10 overflow-x-auto graphical-calendar-wrapper px-2 min-w-[620px] CleanCalendar transition-opacity duration-200 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'}`}>
                
                <GitHubCalendar 
                  key={renderYear} 
                  username={githubUsername}
                  year={renderYear}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={11}
                  theme={explicitTheme}
                  colorScheme="light"
                  hideDayLabels={true}  
                  labels={{
                    totalCount: "{{count}} contributions in " + renderYear, 
                  }}
                  renderBlock={(block) => {
                    if (!block) return null;
                    return React.cloneElement(block, {
                      className: "transition-all duration-300 ease-out hover:scale-125 hover:stroke-gray-400 hover:stroke-[0.5px]"
                    });
                  }}
                />
                
                {/* Custom Less / More Indicator sa Ilalim */}
                <div className="flex justify-end items-center gap-1 text-[11px] text-gray-400 mt-2 select-none pr-2">
                  <span>Less</span>
                  <div className="flex gap-1 mx-1">
                    <span className="w-2.5 h-2.5 bg-[#EBEDF0] rounded-sm"></span>
                    <span className="w-2.5 h-2.5 bg-[#9BE9A8] rounded-sm"></span>
                    <span className="w-2.5 h-2.5 bg-[#40C463] rounded-sm"></span>
                    <span className="w-2.5 h-2.5 bg-[#30A14E] rounded-sm"></span>
                    <span className="w-2.5 h-2.5 bg-[#216E39] rounded-sm"></span>
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* 📅 KANANG GILID: Year Selector */}
              <div className="flex-shrink-0 w-16 md:col-span-1 flex flex-col items-end gap-2 text-xs font-bold select-none pl-2">
                {[2026, 2025].map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`w-14 py-1.5 text-center rounded-lg transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-blue-600 text-white shadow-md font-black scale-105'
                        : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Technical Metadata Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
              <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">// DATA_SOURCE</span>
              <span className="text-xs font-bold text-gray-900 block mt-1">GitHub REST Network</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
              <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-wider">// METRIC_YEAR</span>
              <span className="text-xs font-bold text-gray-900 block mt-1">{selectedYear} Engine Active</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .CleanCalendar svg text {
          fill: #9CA3AF !important;
          font-weight: 500;
        }
        .CleanCalendar footer {
          margin-top: 8px !important;
          color: #9CA3AF !important;
        }
      `}</style>
    </section>
  );
}