import React from 'react';
import { Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/index';

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-8 text-center border-t ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
      <p className="text-slate-500 mb-4">
        Built with React, Tailwind CSS & Lucide Icons.
      </p>
      <div className="flex justify-center space-x-6">
        <a href={personalInfo.github} className="text-slate-400 hover:text-blue-500 transition">
          <Github size={20} />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-blue-500 transition">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-xs text-slate-400 mt-8">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}