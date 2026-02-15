
import React from 'react';
import { Project } from '../types.ts';
import { Icons } from '../constants.tsx';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col h-full cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex items-center">
          <button 
            className="text-blue-600 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform"
          >
            Read more <Icons.ExternalLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
