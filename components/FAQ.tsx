
import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="px-5 max-w-lg mx-auto w-full">
        <h2 className="text-secondary text-[26px] font-extrabold leading-tight tracking-tight mb-8 uppercase">
          Preguntas Frecuentes sobre tu Seguro Dental DKV
        </h2>
        <div className="flex flex-col gap-4">
          <FAQItem 
            question="¿Cómo funciona el seguro dental de DKV?"
            answer="El seguro dental DKV funciona mediante el acceso a una amplia red de clínicas concertadas. Solo tienes que elegir la clínica que prefieras, pedir cita y presentar tu tarjeta digital DKV."
          />
          <FAQItem 
            question="¿El seguro dental DKV cubre endodoncia?"
            answer="Sí, el seguro cubre endodoncias. Aunque no es un tratamiento gratuito, disfrutas de un precio franquiciado muy reducido."
          />
          <FAQItem 
            question="¿Tiene algún periodo de carencia?"
            answer="No, el seguro dental DKV Dentisalud no tiene periodos de carencia. Puedes utilizar todos los servicios desde el primer día."
          />
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <details className="group bg-[#f8f8f5] rounded border border-[#e5e7da] overflow-hidden">
    <summary className="flex items-center justify-between p-4 cursor-pointer select-none">
      <h3 className="text-secondary text-sm font-bold uppercase pr-4">{question}</h3>
      <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
    </summary>
    <div className="px-4 pb-4 text-[#6A625A] text-sm leading-relaxed border-t border-[#e5e7da] pt-3">
      {answer}
    </div>
  </details>
);

export default FAQ;
