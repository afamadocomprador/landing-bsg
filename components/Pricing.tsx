
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="planes" className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-secondary text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-12 uppercase text-center">
          Compara y Elige tu Seguro Dental DKV Ideal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plan Classic */}
          <div className="flex flex-col rounded-xl border border-border-dkv bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="bg-soft-bg p-8 border-b border-border-dkv">
              <h3 className="text-secondary text-2xl font-extrabold uppercase mb-4">DKV Dentisalud Classic</h3>
              <div className="flex items-baseline gap-2 text-neutral-dkv">
                <span className="text-5xl font-extrabold tracking-tighter text-secondary">8€</span>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-bold">/mes</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Precio inicial</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow gap-6">
              <ul className="flex flex-col gap-4">
                {[
                  "Hasta 59 tratamientos gratuitos",
                  "Limpieza dental anual gratis",
                  "Acceso a red odontológica DKV",
                  "Sin límite de edad"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-neutral-dkv">
                    <span className="material-symbols-outlined text-primary text-[24px] shrink-0">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full h-14 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-widest rounded-md transition-all">
                &gt; Contratar DKV Classic
              </button>
            </div>
          </div>

          {/* Plan Élite */}
          <div className="flex flex-col rounded-xl border-2 border-primary bg-white shadow-2xl relative transform lg:scale-105 z-10 overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 uppercase rounded-bl-lg shadow-md">Más Recomendado</div>
            <div className="bg-gradient-to-br from-[#f4f7e6] to-white p-8 border-b border-primary/20">
              <h3 className="text-secondary text-2xl font-extrabold uppercase mb-4">DKV Dentisalud Élite</h3>
              <div className="flex items-baseline gap-2 text-neutral-dkv">
                <span className="text-5xl font-extrabold tracking-tighter text-secondary">15€</span>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-bold">/mes</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Precio inicial</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow gap-6">
              <ul className="flex flex-col gap-4">
                {[
                  "Todo lo incluido en plan Classic",
                  "Seguro dental sin carencia (inmediato)",
                  "Grandes descuentos en implantes",
                  "Niños gratis (menores de 14 años)",
                  "Ortodoncia con precios especiales"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-neutral-dkv">
                    <span className="material-symbols-outlined text-primary text-[24px] shrink-0">check_circle</span>
                    <span className={i === 0 ? "font-bold text-secondary" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full h-14 flex items-center justify-center bg-primary hover:bg-[#728500] text-white text-sm font-bold uppercase tracking-widest rounded-md shadow-lg transition-all">
                &gt; Contratar DKV Élite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
