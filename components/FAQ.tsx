
import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-4xl">
        <h2 className="text-secondary text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-12 uppercase text-center">
          Preguntas Frecuentes sobre tu Seguro DKV
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-soft-bg rounded-xl border border-border-dkv overflow-hidden transition-all duration-300 open:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <h3 className="text-secondary text-lg font-bold pr-6">{faq.question}</h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-neutral-dkv text-base leading-relaxed border-t border-border-dkv/50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
