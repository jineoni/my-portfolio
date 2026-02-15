
import React, { useState } from 'react';
import Header from './components/Sidebar.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ProjectModal from './components/ProjectModal.tsx';
import ExperienceItem from './components/ExperienceItem.tsx';
import { PROJECTS, EXPERIENCES, EDUCATIONS, AWARDS, SKILL_CATEGORIES } from './constants.tsx';
import { Project } from './types.ts';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Profile Header Section */}
        <Header />

        {/* Main Content Area */}
        <main className="space-y-20 mt-16">
          
          {/* Skills Section */}
          <section className="text-center">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">SKILLS</h2>
            <div className="flex flex-col gap-4 items-center">
              {/* Languages Row */}
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                {SKILL_CATEGORIES.languages.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white text-slate-600 text-xs font-bold rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors cursor-default"
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
                    className="px-4 py-2 bg-white text-slate-500 text-xs font-medium rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors cursor-default"
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
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Portfolio</h2>
              <h3 className="text-3xl font-bold text-slate-900">Selected Projects</h3>
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
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="mb-10">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Journey</h2>
              <h3 className="text-2xl font-bold text-slate-900">Professional Experience</h3>
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
                />
              ))}
            </div>
          </section>

          {/* Education & Awards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Section */}
            <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="mb-10">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Background</h2>
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="space-y-2">
                {EDUCATIONS.map(edu => (
                  <ExperienceItem 
                    key={edu.id}
                    date={edu.period}
                    title={edu.school}
                    subtitle={edu.degree}
                    bullets={edu.bullets}
                  />
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="mb-10">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Achievements</h2>
                <h3 className="text-2xl font-bold text-slate-900">Honors & Awards</h3>
              </div>
              <div className="space-y-8">
                {AWARDS.map(award => (
                  <div key={award.id} className="group">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {award.title}
                      </h4>
                      <span className="text-xs font-bold text-slate-400 shrink-0 ml-4">{award.year}</span>
                    </div>
                    <p className="text-sm text-slate-500">{award.organization}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="pt-20 pb-10 text-center">
            <div className="w-12 h-1 bg-slate-200 mx-auto mb-8 rounded-full" />
            <p className="text-slate-400 text-sm font-medium">
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
    </div>
  );
};

export default App;
