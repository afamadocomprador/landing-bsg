
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-[#f8f8f5] overflow-hidden">
      <div className="px-5 max-w-lg mx-auto w-full flex flex-col gap-6">
        <h2 className="text-secondary text-[26px] font-extrabold leading-tight tracking-tight uppercase text-center">
          Lo que dicen nuestros clientes
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory -mx-5 px-5 scrollbar-hide">
          <TestimonialCard initial="MG" name="María G." text="La atención del Agente Exclusivo fue impecable. Me explicó perfectamente las ventajas y coberturas." />
          <TestimonialCard initial="CR" name="Carlos R." text="Contraté DKV Dentisalud para toda la familia. Los descuentos en tratamientos se notan mucho." />
          <TestimonialCard initial="LP" name="Laura P." text="Muy rápido y sin papeleos. Pude ir al dentista al día siguiente gracias a que no tiene carencia." />
        </div>
        <button className="w-full h-12 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-wide rounded transition-colors">
          &gt; Ver todas las opiniones
        </button>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ initial: string, name: string, text: string }> = ({ initial, name, text }) => (
  <div className="min-w-[280px] bg-white p-5 rounded border border-[#e5e7da] shadow-sm snap-center flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#dceebb] text-secondary flex items-center justify-center font-bold text-sm">
        {initial}
      </div>
      <div>
        <span className="text-secondary text-xs font-bold uppercase block">{name}</span>
        <div className="flex text-[#FFC107]">
          {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>)}
        </div>
      </div>
    </div>
    <p className="text-[#6A625A] text-sm italic leading-relaxed">"{text}"</p>
  </div>
);

export default Testimonials;
