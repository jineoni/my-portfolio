
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

  const hasResources = project.repoUrl || project.liveUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-full transition-all border border-white dark:border-slate-700 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Content Side (62%) */}
        <div className="w-full md:w-[62%] p-8 md:p-14 overflow-y-auto bg-white dark:bg-slate-900 border-r border-slate-50 dark:border-slate-800">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4 rounded-full">
                {project.role}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-[1.1] tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="space-y-12">
              {/* Timeline Section */}
              <section>
                <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Timeline</h4>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-normal text-[15px]">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{project.period}</span>
                </div>
              </section>

              {project.details?.overview && (
                <section>
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Overview</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-normal">
                    {project.details.overview}
                  </p>
                </section>
              )}

              {project.details?.problemContext && (
                <section>
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Problem Context</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-normal">
                    {project.details.problemContext}
                  </p>
                </section>
              )}

              {project.details?.proposedSolution && (
                <section>
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Key Works</h4>
                  <div className="space-y-6">
                    {project.details.proposedSolution.concept && (
                      <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-normal">
                        {project.details.proposedSolution.concept}
                      </p>
                    )}
                    {project.details.proposedSolution.components && (
                      <ul className="space-y-4">
                        {project.details.proposedSolution.components.map((comp, idx) => (
                          <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-normal">
                            <span className="text-blue-400 mr-3 mt-2 h-1 w-1 rounded-full shrink-0 bg-blue-400" />
                            <span>
                              {comp.includes(': ') ? (
                                <>
                                  <span className="font-bold text-slate-900 dark:text-slate-100">{comp.split(': ')[0]}:</span> {comp.split(': ').slice(1).join(': ')}
                                </>
                              ) : comp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {project.details.proposedSolution.farePolicy && (
                      <div className="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl border border-blue-100/50 dark:border-blue-800/50">
                        <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2">Fare Policy</h5>
                        <p className="text-slate-700 dark:text-slate-200 text-sm font-bold leading-relaxed">{project.details.proposedSolution.farePolicy}</p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {project.details?.results && (
                <section>
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Key Results</h4>
                  {project.details.resultsSummary && (
                    <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-normal mb-6">
                      {project.details.resultsSummary}
                    </p>
                  )}
                  <div className="flex flex-col gap-3">
                    {project.details.results.map((result, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                        <div className="mt-1 p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                          <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 text-[15px] font-normal leading-snug">
                          {result.includes(': ') ? (
                            <>
                              <span className="font-bold text-slate-900 dark:text-slate-100">{result.split(': ')[0]}:</span> {result.split(': ').slice(1).join(': ')}
                            </>
                          ) : result}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details?.contributions && (
                <section>
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">My Contributions</h4>
                  <ul className="space-y-4">
                    {project.details.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-normal">
                        <span className="text-emerald-500 mr-3 mt-2 h-1 w-1 rounded-full shrink-0 bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Right: Media & Tech Side (38%) */}
        <div className="w-full md:w-[38%] bg-slate-50/50 dark:bg-slate-950/50 overflow-y-auto md:border-l border-slate-100 dark:border-slate-800">
          {/* Image Section */}
          <div className="p-8 md:p-10">
            <div className="relative w-full group">
              <div className="absolute -inset-2 bg-white/50 dark:bg-slate-800/50 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="relative w-full h-auto object-contain rounded-2xl shadow-2xl shadow-slate-200/40 dark:shadow-none border border-white dark:border-slate-800"
              />
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className="p-8 md:p-10 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-10 pb-20">
            {/* Tech Stack */}
            <div>
              <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-100 dark:border-slate-800 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources Links - Only show if there's at least one link */}
            {hasResources && (
              <div>
                <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Resources</h4>
                <div className="flex flex-wrap items-center gap-4">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold rounded-xl text-[10px] border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-900 shadow-sm uppercase tracking-wider"
                    >
                      <Icons.Github />
                      <span>View Repository</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-xl text-[10px] border border-blue-100 dark:border-blue-900 transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white uppercase tracking-wider"
                    >
                      <span>Live Demo</span>
                      <Icons.ExternalLink />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
