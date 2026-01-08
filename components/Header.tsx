
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-dkv shadow-sm">
      <div className="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" className="text-secondary p-1 lg:hidden">
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          <div className="flex flex-col leading-none">
            <span className="text-secondary font-extrabold text-2xl tracking-tighter uppercase">DKV</span>
            <span className="text-neutral-dkv text-[10px] font-bold uppercase tracking-widest">Agente Exclusivo</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-neutral-dkv">
          <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
          <a href="#clinicas" className="hover:text-primary transition-colors">Clínicas</a>
          <a href="#faq" className="hover:text-primary transition-colors">Ayuda</a>
        </nav>

        <a 
          href="#contacto" 
          className="flex items-center justify-center h-10 px-5 rounded-md border-2 border-primary text-primary text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-white transition-all"
        >
          &gt; Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
