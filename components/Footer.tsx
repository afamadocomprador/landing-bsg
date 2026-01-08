
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-32 px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-black text-4xl tracking-tighter uppercase block mb-3">DKV</span>
            <span className="text-white/70 text-sm font-bold uppercase tracking-[0.2em] block mb-8">Agente Exclusivo Autorizado</span>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Somos especialistas en proteger tu salud bucodental con la garantía de DKV Seguros. Ofrecemos trato personalizado y las mejores tarifas del mercado.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-2">Enlaces Rápidos</h4>
            <a href="#planes" className="text-white/80 hover:text-white transition-colors">Comparador de Planes</a>
            <a href="#clinicas" className="text-white/80 hover:text-white transition-colors">Buscador de Clínicas</a>
            <a href="#contacto" className="text-white/80 hover:text-white transition-colors">Pedir Presupuesto</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-black uppercase tracking-widest text-primary text-sm mb-2">Legal</h4>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 leading-relaxed text-center md:text-left">
            © 2024 Agente Exclusivo DKV Seguros - C.I.F B-00000000. Todos los derechos reservados.<br/>
            Los precios y coberturas están sujetos a las condiciones de la póliza vigente.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined text-xl">share</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined text-xl">info</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
