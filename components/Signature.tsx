
import React from 'react';

const Signature: React.FC = () => {
  return (
    <a
      href="https://www.linkedin.com/in/falsanea/"
      target="_blank"
      rel="noopener noreferrer"
      className="no-print fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] group"
    >
      <div className="flex items-center px-8 py-3 rounded-full glass-card border border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 group-hover:shadow-blue-500/20 group-hover:border-blue-500/30 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest opacity-50 font-black">
            تصميم وتطوير
          </span>
          <span className="opacity-30">|</span>
          <span className="text-sm font-black tracking-tight">
            فيصل السني
          </span>
        </div>
      </div>
    </a>
  );
};

export default Signature;
