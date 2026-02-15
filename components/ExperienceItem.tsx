
import React, { ReactNode } from 'react';

interface ExperienceItemProps {
  date: string;
  title: string;
  subtitle: ReactNode; // Changed from string to ReactNode
  description?: string;
  bullets?: ReactNode[];
  tags?: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  description, 
  bullets,
  tags 
}) => {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      {/* Timeline connector line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bg-transparent" />
      
      {/* Timeline dot - Resized to be smaller (w-1.5 h-1.5) to match minimalist aesthetic */}
      <div className="absolute left-[-3.5px] top-1.5 w-1.5 h-1.5 rounded-full border border-white bg-slate-300 group-hover:bg-blue-500 transition-colors duration-300" />

      <div className="flex flex-col">
        <span className="text-sm font-bold text-slate-400 mb-1">{date}</span>
        <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1">{title}</h4>
        <div className="text-slate-500 font-medium text-sm mb-3">{subtitle}</div>
        
        {description && <p className="text-slate-600 text-sm mb-3 leading-relaxed">{description}</p>}
        
        {bullets && (
          <ul className="space-y-2 mb-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start text-slate-600 text-sm leading-relaxed">
                {/* List bullet - Reduced size and color matched to text-slate-600 */}
                <span className="text-slate-600 mr-2.5 mt-2 h-1 w-1 rounded-full shrink-0 bg-slate-600 opacity-60" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-md border border-slate-100 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
