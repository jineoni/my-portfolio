
import React from 'react';
import { Icons } from '../constants.tsx';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2rem] p-10 md:p-16 shadow-sm border border-slate-100 dark:border-slate-800 mb-8 overflow-hidden relative transition-colors">
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleDarkMode}
        className="absolute top-8 right-8 p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900 shadow-sm"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden mb-8 ring-8 ring-slate-50 dark:ring-slate-800 shadow-inner">
          <img 
            src="https://picsum.photos/seed/jiyoon/300/300" 
            alt="Jiyoon Shin" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Personal Info */}
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight transition-colors">Jiyoon Shin</h1>
        <p className="text-slate-600 dark:text-slate-300 font-medium text-lg mb-1 transition-colors">Data Scientist</p>
        <p className="text-slate-400 dark:text-slate-500 text-sm mb-8 transition-colors">Based in Seoul, South Korea</p>

        {/* Social Actions */}
        <div className="flex items-center gap-3 mb-10">
          <a 
            href="https://www.linkedin.com/in/jiyoon-shin-15b196299/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300"
          >
            <Icons.LinkedIn />
          </a>
          <a 
            href="https://github.com/jineoni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-300"
          >
            <Icons.Github />
          </a>
          <a href="mailto:example@yonsei.ac.kr" className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 rounded-full text-sm transition-all duration-300">
            <Icons.Mail />
            <span>Email me</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-slate-100 dark:border-slate-800 pt-10 transition-colors">
          <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6">About</h3>
          <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed max-w-2xl mx-auto font-normal transition-colors">
            I focus on turning complex data into clear insights that solve real-world problems.<br />
            My goal is to build evidence-based solutions that create fair opportunities and a more accessible world for everyone.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
