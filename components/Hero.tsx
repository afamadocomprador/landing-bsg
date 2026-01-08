
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ 
          backgroundImage: `linear-gradient(180deg, rgba(67, 117, 43, 0.75) 0%, rgba(33, 35, 15, 0.6) 100%), url('https://picsum.photos/id/319/1600/900')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-5 lg:px-20 py-12 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 uppercase drop-shadow-lg">
            ¡Sonrisa Perfecta DKV! <br/> Precios 2024 y Cero Esperas.
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium leading-snug mb-10 opacity-95">
            Contrata ahora y accede a más de 50 servicios gratuitos con tu Agente Exclusivo de confianza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-14 px-10 flex items-center justify-center bg-primary hover:bg-[#728500] text-white text-lg font-bold uppercase tracking-wider rounded-md shadow-2xl transition-all transform hover:-translate-y-1">
              &gt; Calcular Precio
            </button>
            <div className="flex items-center justify-center text-white/90 text-sm font-semibold sm:max-w-xs">
              <span className="material-symbols-outlined mr-2">timer</span>
              Calcula tu precio en menos de 1 minuto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
