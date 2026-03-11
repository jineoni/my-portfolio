
import React, { useEffect } from 'react';
import { Experience } from '../types.ts';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-full transition-all border border-white dark:border-slate-700 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-14 overflow-y-auto">
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                {experience.period}
              </span>
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                {experience.role}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-[1.1] tracking-tight">
              {experience.company}
            </h2>
            {experience.description && (
              <p className="mt-4 text-slate-600 dark:text-slate-200 text-[15px] leading-relaxed font-normal">
                {experience.description}
              </p>
            )}
            {experience.websiteUrl && (
              <a 
                href={experience.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-sm group"
              >
                Visit Company Website
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>

          <div className="space-y-10">
            {/* Tech Stack */}
            {experience.tags && experience.tags.length > 0 && (
              <section>
                <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-100 dark:border-slate-800 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Key Achievements */}
            <section>
              <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-[0.2em] mb-6">Key Achievements</h4>
              <ul className="space-y-4">
                {experience.bullets.map((bullet, idx) => {
                  const isString = typeof bullet === 'string';
                  return (
                    <li key={idx} className="flex items-start text-slate-600 dark:text-slate-200 text-[15px] leading-relaxed font-normal">
                      {isString && (
                        <span className="text-blue-400 mr-4 mt-2.5 h-1.5 w-1.5 rounded-full shrink-0 bg-blue-400" />
                      )}
                      <div className={isString ? '' : 'w-full'}>{bullet}</div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
