import React from 'react';
import { Layout } from 'lucide-react';
import { projectsData } from '../data/index';

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className={`group rounded-2xl overflow-hidden border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <h3 className="text-2xl font-bold group-hover:text-blue-600 transition">{project.title}</h3>
                     <p className="text-sm text-slate-500 mt-1">{project.date}</p>
                  </div>
                  <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                     <Layout size={20} />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                <div className="mb-6 space-y-2">
                  {project.points.map((point, idx) => (
                    <div key={idx} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                      <span className="mr-2 text-blue-500">•</span>
                      {point}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium border border-blue-200 text-blue-600 rounded bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}