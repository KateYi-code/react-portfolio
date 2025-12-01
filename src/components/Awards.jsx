import React from 'react';
import { Trophy, Medal, Star, RefreshCw } from 'lucide-react';
import { awardsData } from '../data/awardsData';

export default function Awards({ darkMode }) {
  // 复制一份数据以实现无缝循环滚动
  const duplicatedAwards = [...awardsData, ...awardsData];

  return (
    <section id="awards" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} overflow-hidden`}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* 鼠标悬停在整个轨道时暂停滚动 */
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* --- 翻转卡片 CSS --- */
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        /* 核心逻辑：鼠标悬停在 image 容器上时，内部的 inner 容器翻转 180 度 */
        .group\\/image:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-500" size={32} />
            Honors & Awards
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proven expertise in mathematical modeling and algorithmic optimization, demonstrating the rigorous analytical foundation and problem-solving agility essential for AI Software Engineering.
          </p>
        </div>

        {/* 轮播容器 */}
        <div className="relative w-full overflow-hidden">
           {/* 左右两侧的渐变遮罩 */}
           <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r ${darkMode ? 'from-slate-900 to-transparent' : 'from-slate-50 to-transparent'}`}></div>
           <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l ${darkMode ? 'from-slate-900 to-transparent' : 'from-slate-50 to-transparent'}`}></div>

          {/* 滚动轨道 */}
          <div className="flex w-max animate-marquee gap-6 px-4">
            {duplicatedAwards.map((award, index) => (
              <div 
                key={index}
                className={`flex-none w-[350px] md:w-[400px] rounded-2xl overflow-hidden border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {/* 图片区域：高度设为 h-56 以完整展示奖状 */}
                {/* group/image: 用于控制翻转触发 */}
                {/* perspective-1000: 3D 空间深度 */}
                <div className={`h-56 bg-slate-50 dark:bg-slate-700 relative group/image perspective-1000 ${award.translation ? 'cursor-pointer' : ''}`}>
                  
                  {/* 翻转内部容器：包含正面和背面 */}
                  {/* 只有当存在 translation 时，鼠标悬停才会触发 CSS 里的 rotateY */}
                  <div className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${award.translation ? 'flip-card-inner' : ''}`}>
                    
                    {/* --- 正面 (中文原件 / 英文原件) --- */}
                    <div className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center bg-slate-50 dark:bg-slate-700">
                      {award.image ? (
                         <img 
                           src={award.image} 
                           alt={award.title} 
                           className="w-full h-full object-contain p-2" 
                         />
                      ) : (
                        <div className="flex flex-col items-center text-slate-400">
                            <Trophy size={48} className="mb-2 opacity-50" />
                            <span className="text-sm">No Image</span>
                        </div>
                      )}
                      
                      {/* 提示标签：仅当有翻译时显示 */}
                      {award.translation && (
                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 opacity-80 transition-opacity group-hover/image:opacity-0">
                          <RefreshCw size={10} />
                          <span>Hover to translate</span>
                        </div>
                      )}
                    </div>

                    {/* --- 背面 (英文翻译件) --- */}
                    {/* 仅当有 translation 数据时才渲染背面 DOM */}
                    {award.translation && (
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-amber-50 dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-900/30">
                         <img 
                           src={award.translation} 
                           alt={`${award.title} Translation`} 
                           className="w-full h-full object-contain p-2" 
                         />
                         <div className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                           EN Translation
                         </div>
                      </div>
                    )}
                  </div>
                  
                  {/* 右上角 Ranking 标签 (始终位于最上层，不受翻转影响) */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-20 pointer-events-none">
                    <Star size={12} fill="currentColor" />
                    {award.ranking}
                  </div>
                </div>

                {/* 文字内容区域 */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight line-clamp-2 min-h-[3rem]">
                      {award.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400 font-medium">
                    <Medal size={18} />
                    <span>{award.award}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
                    {award.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {award.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}