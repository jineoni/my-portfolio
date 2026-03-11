
import React, { ReactNode } from 'react';

interface ExperienceItemProps {
  date: string;
  title: string;
  subtitle: ReactNode;
  description?: string;
  bullets?: ReactNode[];
  tags?: string[];
  logo?: string;
  websiteUrl?: string;
  onClick?: () => void;
  hideBullets?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  description, 
  bullets,
  tags,
  logo,
  websiteUrl,
  onClick,
  hideBullets = false
}) => {
  return (
    <div 
      className={`relative pl-12 pb-10 last:pb-0 group ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Timeline connector line */}
      <div className="absolute left-[15px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:bg-transparent" />

      <div className="flex flex-col">
        <span className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-2">{date}</span>
        <div className="relative flex items-center mb-2">
          {/* Timeline dot or Logo - Aligned with Title */}
          <div className="absolute -left-12 w-[30px] h-full flex items-center justify-center z-10">
            {logo ? (
              <img src={logo} alt={title} className="w-8 h-8 object-contain dark:brightness-90" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full border border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500 transition-colors duration-300" />
            )}
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h4>
        </div>
        <div className="text-slate-500 dark:text-slate-300 font-medium text-sm mb-4">{subtitle}</div>
        
        {bullets && !hideBullets && (
          <ul className="space-y-2 mb-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start text-slate-600 dark:text-slate-200 text-[15px] leading-relaxed font-normal">
                <span className="text-slate-600 dark:text-slate-400 mr-2.5 mt-2 h-1 w-1 rounded-full shrink-0 bg-slate-600 dark:bg-slate-400 opacity-60" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-md border border-slate-100 dark:border-slate-700 uppercase tracking-wider">
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
