import React, { useState } from 'react';
import { Github, Mail, ChevronDown, Linkedin, Eye, Download } from 'lucide-react';
import { personalInfo, resumeData } from '../data/personalData.jsx';
import ResumeModal from './ResumeModal'; // 引入新组件

export default function Home({ darkMode }) {
  // 控制简历弹窗的状态
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* 左侧文字区域 (保持不变) */}
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
            
            <div className="flex flex-col pt-4 gap-4 sm:max-w-md">
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006396] transition shadow-lg"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition dark:border-slate-700 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                <Mail size={20} />
                <span>Contact Me</span><span className="opacity-50">|</span><span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
          
          {/* 右侧区域：简历预览卡片 (替换了原来的代码块) */}
          <div className="relative hidden md:block group cursor-pointer" onClick={() => setIsResumeOpen(true)}>
            {/* 1. 发光背景 (Glow Effect) - 保持原来的发光逻辑 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-teal-300 rounded-2xl filter blur-3xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* 2. 卡片主体 */}
            <div className={`relative p-2 rounded-2xl border shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'
            }`}>
               
               {/* 简历图片容器 */}
               <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[3/4]">
                  {/* 显示简历第一页的缩略图 */}
                  <img 
                    src={resumeData.page1} 
                    alt="CV Preview" 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* 悬停遮罩层 (Hover Overlay) */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                    <div className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold shadow-xl flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye size={20} className="text-blue-600" />
                      <span>View Full Resume</span>
                    </div>
                    <div className="text-white/80 text-sm font-medium flex items-center gap-1">
                      <Download size={14} />
                      <span>Click to download</span>
                    </div>
                  </div>
               </div>

               {/* 底部装饰条 */}
               <div className={`mt-3 px-2 flex justify-between items-center text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>resume_yingrao_yi.pdf</span>
                  <span>2 Pages</span>
               </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* 简历弹窗组件 */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        darkMode={darkMode} 
      />
    </>
  );
}