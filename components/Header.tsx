
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7da] shadow-sm">
      <div className="flex items-center justify-between px-4 h-16 max-w-lg mx-auto w-full">
        <div className="flex items-center gap-2">
          <button aria-label="Menu" className="text-secondary p-1">
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          <div className="flex flex-col leading-none">
            <span className="text-secondary font-extrabold text-xl tracking-tighter uppercase">DKV</span>
            <span className="text-[#6A625A] text-[10px] font-bold uppercase tracking-widest">Agente Exclusivo</span>
          </div>
        </div>
        <a 
          className="flex items-center justify-center h-9 px-4 rounded bg-white border border-primary text-primary text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-white transition-colors" 
          href="#contacto"
        >
          &gt; Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
