
import React from 'react';

const Segments: React.FC = () => {
  return (
    <section className="py-20 bg-soft-bg">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-secondary text-3xl font-extrabold leading-tight tracking-tight uppercase text-center mb-16">
          Cuidado Dental DKV: Para Cada Etapa de la Vida
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Niños */}
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border border-border-dkv group">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="https://picsum.photos/id/1025/800/600" 
                alt="Niños sonriendo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-black text-2xl uppercase tracking-tighter">Niños Gratis</div>
            </div>
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-secondary text-2xl font-extrabold uppercase mb-4">Dental para niños gratis</h3>
              <p className="text-neutral-dkv text-base mb-6 leading-relaxed">
                Protege la sonrisa de tus hijos desde el primer día. Los menores de 14 años se incluyen <strong>gratis</strong> en la póliza dental del adulto.
              </p>
              <ul className="space-y-3 mb-10">
                {['Fluorizaciones y selladores', 'Educación bucodental', 'Tratamientos preventivos'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-dkv font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    {li}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full h-14 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-md transition-all">
                &gt; Beneficios Infantiles
              </button>
            </div>
          </div>

          {/* Mayores */}
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border border-border-dkv group">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="https://picsum.photos/id/1024/800/600" 
                alt="Mayores sanos" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-black text-2xl uppercase tracking-tighter">Mayores de 65</div>
            </div>
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-secondary text-2xl font-extrabold uppercase mb-4">Cobertura dental para mayores</h3>
              <p className="text-neutral-dkv text-base mb-6 leading-relaxed">
                Soluciones específicas para mantener la calidad de vida. Sin límite de edad en la contratación y con la mejor red de especialistas.
              </p>
              <ul className="space-y-3 mb-10">
                {['Prótesis dentales económicas', 'Periodoncia avanzada', 'Implantes precio garantizado'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-dkv font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    {li}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full h-14 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-md transition-all">
                &gt; Información Mayores
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;
