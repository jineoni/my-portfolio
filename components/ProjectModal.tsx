
import React, { useEffect } from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 max-h-[90vh]">
        {/* Close Button (Mobile) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-slate-900 md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Right: Text Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">
                {project.role}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                {project.title}
              </h2>
            </div>
            {/* Close Button (Desktop) */}
            <button 
              onClick={onClose}
              className="hidden md:flex p-2 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Timeline</h4>
              <p className="text-slate-700 font-medium">{project.period}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Key Highlights</h4>
              <ul className="space-y-4">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 text-sm leading-relaxed">
                    <span className="text-slate-600 mr-2.5 mt-2 h-1 w-1 rounded-full shrink-0 bg-slate-600 opacity-60" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          {project.repoUrl && (
            <div className="mt-12">
              <a 
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
              >
                View Repository <Icons.Github />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
