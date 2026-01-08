
import React from 'react';

const Benefits: React.FC = () => {
  const benefitList = [
    {
      icon: 'timer_off',
      title: 'Uso Inmediato',
      desc: 'Sin periodos de espera. Utiliza tu seguro dental desde el mismo día de la contratación.'
    },
    {
      icon: 'savings',
      title: 'Tratamientos Gratuitos',
      desc: 'Accede a más de 50 servicios incluidos en tu póliza sin ningún tipo de coste adicional.'
    },
    {
      icon: 'dentistry',
      title: 'Implantes y Ortodoncia',
      desc: 'El mejor seguro para tratamientos complejos con precios baremados y máximas garantías.'
    }
  ];

  return (
    <section className="py-16 bg-soft-bg">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-secondary text-3xl font-extrabold leading-tight tracking-tight mb-12 uppercase text-center md:text-left">
          Ventajas del Seguro Dental sin Carencias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitList.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-4 p-8 bg-white rounded-lg border border-border-dkv shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                <span className="material-symbols-outlined text-[40px]">{benefit.icon}</span>
              </div>
              <h3 className="text-secondary text-xl font-bold mb-1 text-center md:text-left">{benefit.title}</h3>
              <p className="text-neutral-dkv text-sm leading-relaxed text-center md:text-left">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
