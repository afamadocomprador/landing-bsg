
import React from 'react';

const SegmentCard: React.FC<{ 
  image: string; 
  badge: string; 
  title: string; 
  text: string; 
  bullets: string[]; 
  buttonText: string;
}> = ({ image, badge, title, text, bullets, buttonText }) => (
  <div className="flex flex-col bg-white rounded-lg border border-dkv-border shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="h-60 relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white font-extrabold text-xl uppercase tracking-wider drop-shadow-md">
        {badge}
      </div>
    </div>
    <div className="p-8 flex flex-col h-full">
      <h3 className="text-dkv-forest text-2xl font-extrabold uppercase mb-4 tracking-tight leading-tight">{title}</h3>
      <p className="text-dkv-neutral text-sm mb-6 leading-relaxed flex-grow">{text}</p>
      <ul className="space-y-3 mb-8">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-dkv-neutral">
            <span className="material-symbols-outlined text-dkv-lime text-lg shrink-0">check_circle</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <button className="w-full h-12 flex items-center justify-center border-2 border-dkv-lime text-dkv-lime font-bold uppercase tracking-wide text-xs rounded hover:bg-dkv-lime hover:text-white transition-all duration-300">
        &rsaquo; {buttonText}
      </button>
    </div>
  </div>
);

const Segments: React.FC = () => {
  return (
    <section className="py-20 bg-dkv-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-12 text-center">
          Cuidado Dental DKV: Para Cada Etapa de la Vida
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SegmentCard 
            image="https://picsum.photos/seed/kids/800/600"
            badge="NIÑOS GRATIS"
            title="Seguro Dental para Niños Gratis DKV"
            text="Protege la sonrisa de tus hijos desde el primer día. Los menores de 14 años se incluyen gratis en la póliza del adulto."
            bullets={[
              'Fluorizaciones y selladores de fisuras',
              'Educación bucodental y revisiones',
              'Tratamientos preventivos sin coste'
            ]}
            buttonText="VER BENEFICIOS PARA NIÑOS"
          />
          <SegmentCard 
            image="https://picsum.photos/seed/seniors/800/600"
            badge="MAYORES DE 65"
            title="Cobertura Dental DKV para Mayores"
            text="Soluciones específicas para mantener la calidad de vida. Sin límite de edad en la contratación y con la mejor red de especialistas."
            bullets={[
              'Grandes descuentos en prótesis dentales',
              'Tratamientos de periodoncia avanzados',
              'Implantes con precios máximos garantizados'
            ]}
            buttonText="SOLICITAR INFORMACIÓN PARA MAYORES"
          />
        </div>
      </div>
    </section>
  );
};

export default Segments;
