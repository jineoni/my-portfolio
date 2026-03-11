
import React, { useState, useEffect } from 'react';
import Header from './components/Sidebar.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ProjectModal from './components/ProjectModal.tsx';
import ExperienceItem from './components/ExperienceItem.tsx';
import ExperienceModal from './components/ExperienceModal.tsx';
import { PROJECTS, EXPERIENCES, AWARDS, SKILL_CATEGORIES } from './constants.tsx';
import { Project, Experience } from './types.ts';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-12 md:py-20 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Profile Header Section */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content Area */}
        <main className="space-y-20 mt-16">
          
          {/* Skills Section */}
          <section className="text-center">
            <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">SKILLS</h2>
            <div className="flex flex-col gap-4 items-center">
              {/* Languages Row */}
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                {SKILL_CATEGORIES.languages.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-widest rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-900 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* Tools Row */}
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                {SKILL_CATEGORIES.tools.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-widest rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-900 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Portfolio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
              <div className="mb-10">
                <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Professional Experience</h2>
              </div>
              <div className="space-y-4">
                {EXPERIENCES.map(exp => (
                  <ExperienceItem 
                    key={exp.id}
                    date={exp.period}
                    title={exp.company}
                    subtitle={`${exp.role} • ${exp.location}`}
                    bullets={exp.bullets}
                    tags={exp.tags}
                    logo={exp.logo}
                    hideBullets={true}
                    onClick={() => setSelectedExperience(exp)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Honors & Research Section */}
          <section>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
              <div className="mb-10">
                <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Achievements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {AWARDS.map(award => (
                  <div key={award.id}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                        {award.title}
                      </h4>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 shrink-0 ml-4">{award.year}</span>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{award.organization}</div>
                  </div>
                ))}
              </div>
          </div>
        </section>

          {/* Footer */}
          <footer className="pt-20 pb-10 text-center">
            <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 mx-auto mb-8 rounded-full" />
            <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} Jiyoon Shin. Built with React, TypeScript & Tailwind CSS.
            </p>
          </footer>
        </main>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </div>
  );
};

export default App;
