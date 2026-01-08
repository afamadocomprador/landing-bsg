
import React from 'react';

const LifeStages: React.FC = () => {
  return (
    <section className="py-10 bg-[#f8f8f5]">
      <div className="px-5 max-w-lg mx-auto w-full flex flex-col gap-6">
        <h2 className="text-secondary text-[26px] font-extrabold leading-tight tracking-tight uppercase text-left mb-2">
          Cuidado Dental DKV: Para Cada Etapa de la Vida
        </h2>

        {/* Kids Card */}
        <div className="flex flex-col rounded overflow-hidden shadow-sm border border-[#e5e7da] bg-white">
          <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://picsum.photos/seed/kidsdental/600/400")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg uppercase">Niños Gratis</div>
          </div>
          <div className="p-5 flex flex-col">
            <h3 className="text-secondary text-xl font-extrabold uppercase mb-3">Seguro dental para niños gratis DKV</h3>
            <p className="text-[#6A625A] text-sm mb-4 leading-relaxed">
              Protege la sonrisa de tus hijos desde el primer día. Los menores de 14 años se incluyen <strong>gratis</strong> en la póliza del adulto.
            </p>
            <ul className="flex flex-col gap-2 mb-6 text-sm text-[#6A625A]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                <span>Fluorizaciones y selladores de fisuras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                <span>Tratamientos preventivos sin coste</span>
              </li>
            </ul>
            <button className="w-full h-12 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-wide rounded transition-colors">
              &gt; Ver beneficios para niños
            </button>
          </div>
        </div>

        {/* Seniors Card */}
        <div className="flex flex-col rounded overflow-hidden shadow-sm border border-[#e5e7da] bg-white">
          <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://picsum.photos/seed/seniorsdental/600/400")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg uppercase">Mayores de 65</div>
          </div>
          <div className="p-5 flex flex-col">
            <h3 className="text-secondary text-xl font-extrabold uppercase mb-3">Cobertura dental DKV para mayores</h3>
            <p className="text-[#6A625A] text-sm mb-4 leading-relaxed">
              Soluciones específicas para mantener la calidad de vida. Sin límite de edad en la contratación.
            </p>
            <ul className="flex flex-col gap-2 mb-6 text-sm text-[#6A625A]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                <span>Grandes descuentos en prótesis dentales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                <span>Tratamientos de periodoncia avanzados</span>
              </li>
            </ul>
            <button className="w-full h-12 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-wide rounded transition-colors">
              &gt; Solicitar información para mayores
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeStages;
