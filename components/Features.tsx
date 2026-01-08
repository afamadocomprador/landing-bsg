
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-10 bg-[#f8f8f5]">
      <div className="px-5 max-w-lg mx-auto w-full">
        <h2 className="text-secondary text-[26px] font-extrabold leading-tight tracking-tight mb-8 uppercase">
          Seguro dental sin carencia para uso inmediato y tratamientos gratuitos
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <FeatureItem 
            icon="timer_off" 
            title="Uso Inmediato" 
            desc="Sin periodos de espera. Utiliza tu seguro dental desde el mismo día de la contratación." 
          />
          <FeatureItem 
            icon="savings" 
            title="Tratamientos Gratuitos" 
            desc="Accede a más de 50 servicios incluidos en tu póliza sin coste adicional." 
          />
          <FeatureItem 
            icon="dentistry" 
            title="Implantes y Ortodoncia" 
            desc="Mejor seguro dental para implantes y ortodoncia con precios baremados exclusivos." 
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded border border-[#e5e7da]">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
    </div>
    <div>
      <h3 className="text-secondary text-lg font-bold mb-1">{title}</h3>
      <p className="text-[#6A625A] text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Features;
