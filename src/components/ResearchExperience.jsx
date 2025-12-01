import React from 'react';
import { BookOpen, Calendar, Award, Layers, BrainCircuit, ExternalLink } from 'lucide-react';
import { researchData } from '../data/researchData';

export default function ResearchExperience() {
  
  const getIcon = (type) => {
    if (type === 'optimization') return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    if (type === 'vision') return <BrainCircuit className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    return <BookOpen className="w-5 h-5 text-gray-600" />;
  };

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Research Experience
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Translating complex academic theories into practical algorithms. 
            My research background proves my ability to tackle undefined problems and deliver robust technical solutions.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-12">
          {researchData.map((paper) => (
            <div 
              key={paper.id} 
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700"
            >
              <div className="flex flex-col md:flex-row">
                
                {/* Left Column: Paper Image Showcase */}
                <div className="w-full md:w-1/3 bg-gray-100 dark:bg-slate-900/50 p-6 flex items-center justify-center relative overflow-hidden">
                   {/* Background Decorative Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800 dark:to-slate-900 opacity-50" />
                   
                   {/* The Paper Screenshot */}
                   <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                     <div className="rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-black/50 border border-gray-200 dark:border-slate-600 bg-white overflow-hidden">
                        <img 
                          src={paper.image} 
                          alt={`${paper.title} Preview`} 
                          className="w-full h-auto object-cover max-h-[300px] md:max-h-none opacity-95 hover:opacity-100"
                        />
                     </div>
                   </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col">
                  
                  {/* Top: Meta & Title */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-50 dark:bg-slate-700 rounded-lg">
                        {getIcon(paper.type)}
                      </div>
                      <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                        {paper.type === 'optimization' ? 'Algorithm' : 'AI & Vision'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                      {paper.title}
                    </h3>

                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">{paper.conference}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {paper.date}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Summary */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Abstract / Contribution
                    </h4>
                    <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                      {paper.summary}
                    </p>
                  </div>

                  {/* Tech Stack Tags - Moved here for better flow */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs font-medium rounded-full border border-gray-200 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: HR Takeaway Box - Full Width */}
                  <div className="mt-auto bg-blue-50/50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-900/50">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">
                      <BookOpen className="w-4 h-4" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-blue-800/80 dark:text-blue-200/80 leading-relaxed">
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