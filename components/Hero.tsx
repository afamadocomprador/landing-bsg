
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[560px]" 
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(67, 117, 43, 0.7) 0%, rgba(33, 35, 15, 0.5) 100%), url("https://picsum.photos/seed/dkvdental/1200/800")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[560px] px-5 pb-12 max-w-lg mx-auto w-full">
        <h1 className="text-white text-[32px] font-extrabold leading-[1.1] tracking-tight mb-4 uppercase drop-shadow-md">
          ¡Sonrisa Perfecta DKV! Tu Agente Exclusivo con Precios 2024 y Cero Esperas.
        </h1>
        <h2 className="text-white text-lg font-medium leading-snug mb-8 max-w-[90%] drop-shadow-sm">
          Contrata ahora y accede a servicios gratuitos con un Agente Exclusivo.
        </h2>
        <div className="flex flex-col gap-3 w-full">
          <button className="w-full h-12 flex items-center justify-center bg-primary hover:bg-[#728500] text-white text-base font-bold uppercase tracking-wide rounded shadow-lg transition-colors">
            &gt; Calcular Precio
          </button>
          <p className="text-white/90 text-xs text-center font-medium">
            * Calcula tu precio en menos de 1 minuto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
