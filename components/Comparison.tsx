
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-10 bg-white" id="comparador">
      <div className="px-5 max-w-lg mx-auto w-full">
        <h2 className="text-secondary text-[26px] font-extrabold leading-tight tracking-tight mb-8 uppercase">
          Compara y Elige tu Seguro Dental DKV Ideal
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Plan Classic */}
          <div className="flex flex-col rounded-lg border border-[#e5e7da] bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
            <div className="bg-[#f8f8f5] p-6 border-b border-[#e5e7da]">
              <h3 className="text-secondary text-xl font-extrabold uppercase mb-2">DKV Dentisalud Classic</h3>
              <div className="flex items-baseline gap-1 text-neutral-dkv">
                <span className="text-[36px] font-extrabold tracking-tighter text-secondary">8€</span>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-bold">/mes</span>
                  <span className="text-[10px] uppercase tracking-wide">Precio inicial</span>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">check_circle</span>
                  <span>Hasta <strong className="text-secondary">59 tratamientos gratuitos</strong> incluidos</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">check_circle</span>
                  <span>Limpieza dental anual <strong className="text-secondary">gratis</strong></span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">check_circle</span>
                  <span>Acceso a red odontológica DKV</span>
                </li>
              </ul>
              <button className="mt-2 w-full h-12 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-wide rounded transition-colors duration-300">
                &gt; Contratar DKV Classic
              </button>
            </div>
          </div>

          {/* Plan Élite */}
          <div className="flex flex-col rounded-lg border-2 border-primary bg-white shadow-xl overflow-hidden relative transform scale-[1.02] z-10">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl shadow-md">Más Completo</div>
            <div className="bg-gradient-to-br from-[#f4f7e6] to-white p-6 border-b border-primary/20">
              <h3 className="text-secondary text-xl font-extrabold uppercase mb-2">DKV Dentisalud Élite</h3>
              <div className="flex items-baseline gap-1 text-neutral-dkv">
                <span className="text-[36px] font-extrabold tracking-tighter text-secondary">15€</span>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-bold">/mes</span>
                  <span className="text-[10px] uppercase tracking-wide">Precio inicial</span>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">check_circle</span>
                  <span><strong>Todo incluido</strong> en plan Classic</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">timer_off</span>
                  <span>Seguro dental <strong className="text-secondary">sin carencia</strong> (uso inmediato)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">savings</span>
                  <span>Grandes descuentos en <strong className="text-secondary">implantes y ortodoncia</strong></span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6A625A]">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0">child_care</span>
                  <span>Niños gratis (menores de 14)</span>
                </li>
              </ul>
              <button className="mt-2 w-full h-12 flex items-center justify-center bg-primary hover:bg-[#728500] text-white text-sm font-bold uppercase tracking-wide rounded shadow-lg transition-colors duration-300">
                &gt; Contratar DKV Élite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
