import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { experienceData } from '../data/index';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="space-y-12">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center mt-1 sm:mt-0">
                <Calendar size={14} className="mr-1" /> {exp.date}
              </span>
            </div>
            <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center">
              <Briefcase size={16} className="mr-2 opacity-75" />
              {exp.company}
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
               {exp.tags.map(tag => (
                 <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500">
                   #{tag}
                 </span>
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}