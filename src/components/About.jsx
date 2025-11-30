import React from 'react';
import { Code2, Database, Terminal } from 'lucide-react';
import { personalInfo } from '../data/index';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {personalInfo.bio}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code2 size={24} />
            </div>
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-slate-500">React, Svelte & Tailwind.</p>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database size={24} />
            </div>
            <h3 className="font-semibold mb-2">Data Analysis</h3>
            <p className="text-sm text-slate-500">SQL, Python & BI tools.</p>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Terminal size={24} />
            </div>
            <h3 className="font-semibold mb-2">Algorithms</h3>
            <p className="text-sm text-slate-500">Numerical Methods & Math.</p>
          </div>
        </div>
      </div>
    </section>
  );
}