
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-10 pb-24 px-5">
      <div className="max-w-lg mx-auto w-full flex flex-col gap-8">
        <div>
          <span className="font-extrabold text-2xl tracking-tighter uppercase block mb-1">DKV</span>
          <span className="text-white/80 text-xs font-bold uppercase tracking-widest block">Agente Exclusivo</span>
        </div>
        <div className="flex flex-col gap-4 text-sm font-medium text-white/90">
          <a className="hover:text-primary transition-colors" href="#">Aviso Legal</a>
          <a className="hover:text-primary transition-colors" href="#">Política de Privacidad</a>
          <a className="hover:text-primary transition-colors" href="#">Política de Cookies</a>
        </div>
        <div className="border-t border-white/20 pt-6">
          <p className="text-xs text-white/60 leading-relaxed">
            © 2024 Agente Exclusivo DKV Seguros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
