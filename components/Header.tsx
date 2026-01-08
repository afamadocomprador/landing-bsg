
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7da] shadow-sm">
      <div className="flex items-center justify-between px-3 h-16 max-w-lg mx-auto w-full">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" className="text-dkv-corporate p-1">
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          
          {/* Official Corporate Branding Image */}
          <div className="flex items-center h-11">
            <img 
              src="/logo-agente-dkv.png" 
              alt="DKV Agente Exclusivo" 
              className="h-full w-auto object-contain"
              onError={(e) => {
                // Fallback in case the specific URL is not found
                e.currentTarget.src = 'logo-agente-dkv.png';
              }}
            />
          </div>
        </div>

        <a 
          className="flex items-center justify-center h-9 px-4 rounded bg-white border border-dkv-corporate text-dkv-corporate text-xs font-bold uppercase tracking-wide hover:bg-dkv-corporate hover:text-white transition-colors" 
          href="#contacto"
        >
          &gt; Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
