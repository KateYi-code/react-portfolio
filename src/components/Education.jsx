import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/educationData.jsx';

export default function Education({ darkMode }) {
  return (
    <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <GraduationCap className="text-teal-600 dark:text-teal-400" size={32} />
          <span className={darkMode ? 'text-white' : 'text-slate-900'}>Education Background</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 hover:border-teal-900/50' 
                  : 'bg-white border-slate-100 hover:border-teal-100'
              }`}
            >
              {/* Header: Degree & School */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-50 text-teal-600'}`}>
                    <GraduationCap size={24} />
                  </div>
                  {/* GPA Badge - Modified to hide grade description if needed, just shows raw GPA string */}
                  {edu.gpa && edu.gpa !== "Pending" && (
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">GPA</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold border ${
                        darkMode 
                          ? 'bg-teal-900/20 text-teal-300 border-teal-800' 
                          : 'bg-teal-50 text-teal-700 border-teal-200'
                      }`}>
                        {edu.gpa.split('(')[0].trim()} {/* Only show the number part before any parentheses */}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {edu.degree}
                </h3>
                <p className={`text-base font-medium mb-3 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  {edu.school}
                </p>

                <div className="flex flex-col gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {edu.date}
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Award size={14} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Relevant Coursework Section */}
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen size={14} />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span 
                        key={idx}
                        className={`text-xs px-2.5 py-1 rounded-md border ${
                          darkMode 
                            ? 'bg-slate-800 text-slate-300 border-slate-700' 
                            : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}