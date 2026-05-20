"use client";

import { useState, useEffect } from "react";

export default function UpdateNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already seen and dismissed the notice this session
    const hasSeenNotice = sessionStorage.getItem("portfolio_update_notice");
    if (!hasSeenNotice) {
      // Small delay for a smooth entry animation
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("portfolio_update_notice", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      
      {/* Architectural Modal Box */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0A0A0C] border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl rounded-none flex flex-col animate-in zoom-in-95 duration-500">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

        {/* Status Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-primary animate-pulse"></span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            System // Notice
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-4">
          Welcome to my portfolio.
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10">
          Thank you for visiting! Please note that this architecture is currently undergoing major updates. Some features or data might be pending, and the update is set to be completed as soon as possible. 
          <br /><br />
          Feel free to navigate around the active sectors in the meantime.
        </p>

        <button 
          onClick={handleDismiss}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.2em] rounded-none overflow-hidden transition-all w-full"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Acknowledge & Proceed</span>
          <div className="absolute inset-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out z-0" />
        </button>

      </div>
    </div>
  );
}