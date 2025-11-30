import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../data/index';

export default function Education({ darkMode }) {
  return (
    <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className={`flex items-start p-6 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'} shadow-sm`}>
              <div className="mr-4 p-3 bg-teal-100 text-teal-600 rounded-lg dark:bg-teal-900/30">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400">{edu.school}</p>
                <div className="flex items-center mt-2 text-sm text-slate-500">
                  <MapPin size={14} className="mr-1" />
                  {edu.location}
                </div>
                <div className="flex items-center mt-1 text-sm text-slate-500">
                  <Calendar size={14} className="mr-1" />
                  {edu.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}