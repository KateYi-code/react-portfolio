import React from 'react';
import { Layout, Github, Code2 } from 'lucide-react';
import { projectsData } from '../data/projectsData.jsx';

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              {/* 1. Image Showcase Section (Visual Evidence) */}
              {/* 增加高度到 h-56 以更好地容纳完整图片 */}
              <div className="relative h-66 overflow-hidden bg-gray-100 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 group-hover:border-blue-500/30 transition-colors">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    // 修改点：object-cover -> object-contain，并添加 p-2 内边距
                    className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // Fallback Placeholder if no image provided
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                    <Code2 size={48} className="mb-2 opacity-20" />
                    <span className="text-xs font-medium opacity-50 uppercase tracking-wider">Project Preview</span>
                  </div>
                )}
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4">
                   <div className={`p-2 rounded-full backdrop-blur-md ${darkMode ? 'bg-slate-900/60 text-white' : 'bg-white/80 text-slate-900'} shadow-sm`}>
                     <Layout size={18} />
                   </div>
                </div>
              </div>

              {/* 2. Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                     {/* Title with GitHub Link */}
                     {project.githubUrl ? (
                       <a 
                         href={project.githubUrl}
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="group/link flex items-center gap-2"
                       >
                         <h3 className={`text-2xl font-bold transition-colors ${
                           darkMode ? 'text-white group-hover/link:text-blue-400' : 'text-slate-900 group-hover/link:text-blue-600'
                         }`}>
                           {project.title}
                         </h3>
                         <Github size={18} className="text-slate-400 group-hover/link:text-blue-500 transition-colors" />
                       </a>
                     ) : (
                       <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                         {project.title}
                       </h3>
                     )}
                     
                     <p className="text-sm text-slate-500 mt-1 font-medium">{project.date}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2.5">
                  {project.points.map((point, idx) => (
                    <div key={idx} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded border ${
                      darkMode 
                        ? 'bg-blue-900/20 border-blue-800 text-blue-300' 
                        : 'bg-blue-50 border-blue-100 text-blue-600'
                    }`}>
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