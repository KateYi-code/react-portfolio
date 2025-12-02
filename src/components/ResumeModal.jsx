import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { resumeData } from '../data/personalData.jsx';

export default function ResumeModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* 背景遮罩 (Backdrop Blur) */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* 模态框主体 */}
      <div className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col ${darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white'}`}>
        
        {/* 顶部工具栏 */}
        <div className={`sticky top-0 z-10 flex justify-between items-center px-6 py-4 border-b backdrop-blur-md ${darkMode ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-100'}`}>
          <div className="flex items-center gap-2">
            <FileText className="text-blue-600" size={20} />
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-800'}`}>Resume Preview</h3>
          </div>
          
          <div className="flex items-center gap-4">
            {/* 下载按钮 */}
            <a 
              href={resumeData.pdf} 
              download="Yingrao_Yi_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium shadow-lg hover:shadow-blue-500/30"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            
            {/* 关闭按钮 */}
            <button 
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* 简历内容区域 (左右两页展示) */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950/50 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
            
            {/* Page 1 */}
            <div className="w-full lg:w-1/2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={resumeData.page1} 
                alt="Resume Page 1" 
                className="w-full h-auto rounded-sm" 
              />
            </div>

            {/* Page 2 */}
            <div className="w-full lg:w-1/2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={resumeData.page2} 
                alt="Resume Page 2" 
                className="w-full h-auto rounded-sm" 
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}