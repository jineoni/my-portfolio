
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
      className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col h-full cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Added scale-150 to 'zoom in' on the project content and dynamic object-position */}
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover scale-150 group-hover:scale-[1.65] transition-transform duration-700 ease-out ${project.thumbnailPosition || 'object-center'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-4 leading-relaxed line-clamp-3 font-normal">
          {project.description}
        </p>

        <div className="mt-auto flex items-center">
          <button 
            className="text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform"
          >
            Read more <Icons.ExternalLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
