
import React from 'react';

const FeatureItem: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex items-start gap-5 p-6 bg-white rounded border border-dkv-border shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-dkv-lime/10 text-dkv-lime shrink-0">
      <span className="material-symbols-outlined text-3xl font-light">{icon}</span>
    </div>
    <div>
      <h3 className="text-dkv-forest text-xl font-bold mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-dkv-neutral text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-dkv-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-12 max-w-3xl leading-tight">
          Seguro Dental sin Carencia para Uso Inmediato y Tratamientos Gratuitos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureItem 
            icon="timer_off" 
            title="Uso Inmediato" 
            text="Sin periodos de espera. Utiliza tu seguro dental desde el mismo día de la contratación."
          />
          <FeatureItem 
            icon="savings" 
            title="Tratamientos Gratuitos" 
            text="Accede a más de 50 servicios incluidos en tu póliza sin coste adicional."
          />
          <FeatureItem 
            icon="dentistry" 
            title="Implantes y Ortodoncia" 
            text="Mejor seguro dental para implantes y ortodoncia con precios baremados exclusivos."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
