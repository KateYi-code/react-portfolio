import React from 'react';
import { skillsData } from '../data/index';

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm hover:shadow-md transition`}>
            <div className="flex items-center space-x-3 mb-4 text-blue-600">
              {skillGroup.icon}
              <h3 className="font-bold text-lg">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span key={skill} className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}