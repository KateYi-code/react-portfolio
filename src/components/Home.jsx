import React from 'react';
import { Github, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/index';

export default function Home({ darkMode }) {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <br/>
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg">
            {personalInfo.role} based in {personalInfo.location}. 
            Turning complex data into actionable insights and building interactive web experiences.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition dark:border-slate-700 dark:hover:bg-slate-800">
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-teal-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className={`relative p-8 rounded-2xl border shadow-2xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
             <pre className="text-sm font-mono overflow-hidden">
              <code className="language-javascript text-blue-600 dark:text-blue-400">
{`const developer = {
  name: "Yingrao Yi",
  skills: ["React", "Svelte", "Python"],
  passion: "Problem Solving"
};
developer.build("Future");`}
              </code>
             </pre>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}