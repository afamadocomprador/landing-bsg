
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-[500px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(67, 117, 43, 0.4), rgba(0, 0, 0, 0.6)), url('https://picsum.photos/seed/dkvdental/1600/900')`
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16 w-full text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 uppercase tracking-tight">
            ¡Sonrisa Perfecta DKV! Tu Agente Exclusivo con Precios 2024 y Cero Esperas.
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 opacity-95">
            Contrata ahora y accede a servicios gratuitos con un Agente Exclusivo.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto h-14 px-10 bg-dkv-lime hover:bg-[#728500] text-white font-bold uppercase tracking-widest rounded shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              &rsaquo; CALCULAR PRECIO
            </button>
            <p className="text-sm font-medium opacity-80">
              * Calcula tu precio en menos de 1 minuto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
