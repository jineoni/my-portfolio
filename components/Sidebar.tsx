
import React from 'react';
import { Icons } from '../constants.tsx';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-slate-100 mb-8 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden mb-8 ring-8 ring-slate-50 shadow-inner">
          <img 
            src="https://picsum.photos/seed/jiyoon/300/300" 
            alt="Jiyoon Shin" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Personal Info */}
        <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Jiyoon Shin</h1>
        <p className="text-slate-600 font-medium text-lg mb-1">Data Scientist</p>
        <p className="text-slate-400 text-sm mb-8">Based in Seoul, South Korea</p>

        {/* Social Actions */}
        <div className="flex items-center gap-3 mb-10">
          <a 
            href="https://www.linkedin.com/in/jiyoon-shin-15b196299/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
          >
            <Icons.LinkedIn />
          </a>
          <a 
            href="https://github.com/jineoni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-300"
          >
            <Icons.Github />
          </a>
          <a href="mailto:example@yonsei.ac.kr" className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 text-slate-700 font-bold hover:bg-slate-900 hover:text-white rounded-full text-sm transition-all duration-300">
            <Icons.Mail />
            <span>Email me</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-slate-100 pt-10">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">About</h3>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
            I focus on turning complex data into clear insights that solve real-world problems.<br />
            My goal is to build evidence-based solutions that create fair opportunities and a more accessible world for everyone.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
