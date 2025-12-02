import React from 'react';
import { BookOpen, Calendar, Award, Layers, BrainCircuit, MapPin, User } from 'lucide-react';
// 引入你的数据文件
import { researchData } from '../data/researchData';

export default function ResearchExperience({ darkMode }) {
  
  const getIcon = (type) => {
    if (type === 'optimization') return <Layers className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />;
    if (type === 'vision') return <BrainCircuit className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />;
    return <BookOpen className="w-5 h-5 text-gray-500" />;
  };

  return (
    <section id="research" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Research Experience
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Translating complex academic theories into practical algorithms. 
            My research background proves my ability to tackle undefined problems and deliver robust technical solutions.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-12">
          {researchData.map((paper) => (
            <div 
              key={paper.id} 
              className={`group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex flex-col md:flex-row">
                
                {/* Left Column: Paper Image Showcase */}
                <div className={`w-full md:w-1/3 p-6 flex items-center justify-center relative overflow-hidden ${
                  darkMode ? 'bg-slate-900/50' : 'bg-gray-100'
                }`}>
                   {/* Background Decorative Gradient */}
                   <div className={`absolute inset-0 bg-gradient-to-br opacity-50 ${
                     darkMode 
                       ? 'from-slate-800 to-slate-900' 
                       : 'from-blue-50/50 to-purple-50/50'
                   }`} />
                   
                   {/* The Paper Screenshot / Image */}
                   <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out w-full">
                     <div className={`rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] border overflow-hidden ${
                       darkMode 
                         ? 'shadow-black/50 border-slate-600 bg-slate-800' 
                         : 'border-gray-200 bg-white'
                     }`}>
                        <img 
                          src={paper.image} 
                          alt={`${paper.title} Preview`} 
                          className="w-full h-48 md:h-full object-cover opacity-95 hover:opacity-100"
                        />
                     </div>
                   </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col">
                  
                  {/* Top: Meta & Title */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        {getIcon(paper.type)}
                      </div>
                      <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${
                        darkMode 
                          ? 'text-blue-400 bg-blue-900/30' 
                          : 'text-blue-600 bg-blue-50'
                      }`}>
                        {paper.type === 'optimization' ? 'Algorithm' : 'Computer Vision'}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl md:text-2xl font-bold leading-tight mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {paper.title}
                    </h3>

                    {/* New Role Display */}
                    <div className={`flex items-center gap-2 text-sm font-medium mb-3 ${
                        darkMode ? 'text-blue-300' : 'text-blue-700'
                    }`}>
                        <User className="w-4 h-4" />
                        <span>{paper.role}</span>
                    </div>

                    <div className={`flex flex-wrap gap-y-2 gap-x-4 text-sm mb-4 ${
                      darkMode ? 'text-slate-400' : 'text-gray-500'
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">{paper.conference}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {paper.date}
                      </span>
                      {/* New Location Display */}
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {paper.location}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Summary */}
                  <div className="mb-6">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-500' : 'text-gray-400'
                    }`}>
                      Abstract / Contribution
                    </h4>
                    <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                      {paper.summary}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          darkMode 
                            ? 'bg-slate-700 text-slate-300 border-slate-600' 
                            : 'bg-gray-100 text-gray-600 border-gray-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: HR Takeaway Box */}
                  <div className={`mt-auto rounded-xl p-4 border ${
                    darkMode 
                      ? 'bg-blue-900/20 border-blue-900/50' 
                      : 'bg-blue-50/50 border-blue-100'
                  }`}>
                    <h4 className={`flex items-center gap-2 text-sm font-bold mb-2 ${
                      darkMode ? 'text-blue-300' : 'text-blue-900'
                    }`}>
                      <BookOpen className="w-4 h-4" />
                      Key Contribution
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-blue-200/80' : 'text-blue-800/80'
                    }`}>
                      {paper.hrTakeaway}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}