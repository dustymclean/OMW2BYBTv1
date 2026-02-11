
import React from 'react';
import { Shield } from 'lucide-react';

interface HeaderProps {
  onEnrollClick: () => void;
  isEnrollView: boolean;
}

const Header: React.FC<HeaderProps> = ({ onEnrollClick, isEnrollView }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-bold text-xl tracking-tighter">
            HP
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-widest uppercase text-white/90">Titanium Luxe</h1>
            <p className="text-[10px] tracking-[0.2em] text-orange-500 font-medium">PRIVATE SERIES</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <Shield size={14} className="text-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Node Verified</span>
          </div>
          <button 
            onClick={onEnrollClick}
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 ${
              isEnrollView 
              ? 'bg-white text-black' 
              : 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
            }`}
          >
            {isEnrollView ? 'Return to Card' : 'Enroll Now'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
