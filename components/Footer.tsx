
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dkv-forest text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="max-w-xs">
            <div className="flex flex-col leading-none mb-6">
              <span className="text-white font-extrabold text-3xl tracking-tighter uppercase">DKV</span>
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Agente Exclusivo</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Trabajamos para ofrecerte la mejor cobertura dental con la garantía de una compañía líder como DKV Seguros.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-grow">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Legal</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Aviso Legal</a>
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Privacidad</a>
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Cookies</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Seguros</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Dental Classic</a>
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Dental Élite</a>
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Baremo 2024</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Ayuda</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Preguntas Frecuentes</a>
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Contacto</a>
                <a href="#" className="text-sm hover:text-dkv-lime transition-colors">Localizador Clínicas</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-xs">
          <p>© 2024 Agente Exclusivo DKV Seguros. Todos los derechos reservados.</p>
          <p className="max-w-md text-center md:text-right leading-relaxed">
            Los precios mostrados son orientativos y están sujetos a condiciones de contratación y verificación de datos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
