
import React, { useEffect } from 'react';
import { Project } from '../types.ts';
import { Icons } from '../constants.tsx';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
      <div className="relative w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2 bg-slate-100/80 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-all border border-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Content Side (62%) */}
        <div className="w-full md:w-[62%] p-8 md:p-14 overflow-y-auto bg-white border-r border-slate-50">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 rounded-full">
                {project.role}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="space-y-12">
              {/* Timeline Section */}
              <section>
                <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-4 border-b border-slate-50 pb-2">Timeline</h4>
                <div className="flex items-center gap-2 text-slate-600 font-normal text-[15px]">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{project.period}</span>
                </div>
              </section>

              <section>
                <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-4 border-b border-slate-50 pb-2">Analysis & Key Results</h4>
                <ul className="space-y-6">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-[15px] leading-relaxed group">
                      <span className="text-blue-500 mr-4 mt-2.5 h-1.5 w-1.5 rounded-full shrink-0 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        {/* Right: Media & Tech Side (38%) */}
        <div className="w-full md:w-[38%] bg-slate-50/50 flex flex-col h-full overflow-hidden">
          {/* Top: Image Section */}
          <div className="flex-grow flex items-center justify-center p-8 md:p-10">
            <div className="relative w-full group">
              <div className="absolute -inset-2 bg-white/50 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="relative w-full h-auto object-contain rounded-2xl shadow-2xl shadow-slate-200/50 border border-white"
              />
            </div>
          </div>

          {/* Bottom: Tech Skills & Links Section */}
          <div className="p-8 md:p-10 bg-white border-t border-slate-100 space-y-8">
            {/* Tech Stack */}
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Resources</h4>
              <div className="flex flex-wrap items-center gap-4">
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-500 font-medium rounded-lg text-[11px] border border-slate-100 transition-all hover:bg-white hover:text-blue-600 hover:border-blue-200 shadow-sm"
                  >
                    <Icons.Github />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 font-medium text-[11px] hover:text-blue-600 transition-colors"
                  >
                    <span>Live Demo</span>
                    <Icons.ExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
