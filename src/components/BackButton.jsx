import React from 'react';
import { Link } from 'react-router-dom';

export default function BackButton({ 
  to = "/", 
  label = "Back to Home", 
  className = "" 
}) {
  return (
    <Link
      to={to}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className={`inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors group select-none ${className}`}
    >
      <svg 
        className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <span>{label}</span>
    </Link>
  );
}