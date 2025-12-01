import React from 'react';
import { Calendar, Briefcase, MapPin, Rocket, ExternalLink } from 'lucide-react';
import { workingData } from '../data/workingData';

export default function WorkingExperience({ darkMode }) {
  return (
    <section id="experience" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-blue-600 dark:text-blue-400" size={32} />
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Working Experience</span>
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Proven expertise in applying AI algorithms and data-driven strategies to solve complex real-world problems, optimizing operational efficiency and risk assessment models.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {workingData.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20 group">
                
                {/* Timeline Dot (Company Logo Placeholder) */}
                <div className={`absolute left-0 md:left-4 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 transition-transform duration-300 group-hover:scale-110 z-10 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-white border-white shadow-lg'
                }`}>
                  <span className="text-[10px] md:text-xs font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {exp.company.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border ${
                  darkMode 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' 
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
                }`}>
                  
                  {/* Card Header: Role & Date */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      {/* Company Name Link Update */}
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-base font-medium flex items-center gap-2 group/link w-fit transition-colors ${
                          darkMode 
                            ? 'text-blue-400 hover:text-blue-300' 
                            : 'text-blue-600 hover:text-blue-500'
                        }`}
                      >
                        {exp.company}
                        <ExternalLink size={14} className="opacity-0 -translate-x-1 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                      </a>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1 px-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body: Description */}
                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {exp.description}
                  </p>

                  {/* 🚀 IMPACT SECTION */}
                  {exp.impact && (
                    <div className={`mb-6 p-4 rounded-xl border-l-4 ${
                      darkMode 
                        ? 'bg-blue-900/10 border-blue-500 text-blue-100' 
                        : 'bg-blue-50 border-blue-600 text-slate-800'
                    }`}>
                      <h4 className="flex items-center gap-2 font-bold text-sm mb-1 uppercase tracking-wider opacity-80">
                        <Rocket size={16} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                        Key Impact
                      </h4>
                      <p className="text-sm font-medium leading-relaxed">
                        {exp.impact}
                      </p>
                    </div>
                  )}

                  {/* Footer: Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                    {exp.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                          darkMode 
                            ? 'bg-slate-700 text-slate-300 hover:text-white' 
                            : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}