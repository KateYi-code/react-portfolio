import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection, darkMode, toggleTheme }) {
  return (
    <nav className={`fixed w-full z-50 shadow-sm transition-colors duration-300 ${darkMode ? 'bg-slate-900/90 backdrop-blur' : 'bg-white/90 backdrop-blur'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            YY
          </span>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-500'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}