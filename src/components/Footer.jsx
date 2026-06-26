import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-white text-gray-900 border-t border-gray-100 py-16 px-8 md:px-16 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* ================= BRAND LOGO SECTION ================= */}
        <div className="md:col-span-6 flex items-center">
          {/* Pinalaki ang wrapper mula w-14 h-14 patungong w-20 h-20 */}
          <div className="relative w-90 h-50 flex items-center justify-center">
            <img 
              src="/my-logo.png" 
              alt="Khen Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* ================= LINKS & SOCIALS ================= */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-start">
          
          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#bug-report" className="hover:text-gray-900 transition-colors">Bug Report / Feedback</a></li>
              <li><a href="#categories" className="hover:text-gray-900 transition-colors">Categories</a></li>
              <li><a href="#tags" className="hover:text-gray-900 transition-colors">Tags</a></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Social</h4>
            <div className="flex flex-wrap gap-3">
              
              {/* X (Twitter) */}
              <a href="#" className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:text-black hover:scale-105 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:text-black hover:scale-105 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:text-black hover:scale-105 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* Telegram */}
              <a href="#" className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:text-black hover:scale-105 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 5.622 3.88 10.331 9.111 11.667.111.022.233.033.344.033.456 0 .833-.311.922-.756l1.389-7.311 4.544 4.544c.189.189.444.3.711.3h.022c.544 0 .989-.422 1.022-.967l1.922-15.656c.033-.289-.056-.578-.256-.789-.2-.2-.489-.3-.778-.267L1.922 6.133c-.489.067-.844.478-.856.967-.011.5.311.944.8 1.056l4.633 1.067 1.744 5.322.456-2.456 6.8-5.833c.156-.133.378-.133.533 0s.156.378 0 .533l-5.789 6.044 3.733 3.733 1.578-12.833L11.944 0z"/>
                </svg>
              </a>

              {/* Email (Mail) */}
              <a href="#" className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:text-black hover:scale-105 transition-all duration-200">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
        <div className="flex items-center gap-1">
          <span>© 2026 KHEN Resources.</span>
          <a href="#all-rights" className="underline hover:text-gray-600">All rights reserved.</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
            <span>🤍 Like</span>
            <span className="bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded text-[10px]">11</span>
          </div>
          <span>Created by <a href="#" className="text-gray-500 hover:underline">@KhenDevs</a></span>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 md:right-16 bg-[#2D2D2D] text-white p-3 rounded-full shadow-lg hover:bg-black transition-all group"
        aria-label="Scroll to top"
      >
        <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>

    </footer>
  );
}