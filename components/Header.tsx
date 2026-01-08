
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-dkv-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-dkv-forest font-extrabold text-2xl tracking-tighter uppercase">DKV</span>
            <span className="text-dkv-neutral text-[10px] font-bold uppercase tracking-widest">Agente Exclusivo</span>
          </div>
        </div>
        <a 
          href="#contact" 
          className="flex items-center justify-center h-10 px-5 rounded bg-white border border-dkv-lime text-dkv-lime text-sm font-bold uppercase tracking-wide hover:bg-dkv-lime hover:text-white transition-all duration-300"
        >
          &rsaquo; CONTACTO
        </a>
      </div>
    </header>
  );
};

export default Header;
