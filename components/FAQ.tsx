
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-12 leading-tight">
          Preguntas Frecuentes sobre tu Seguro Dental DKV
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-dkv-border rounded-lg overflow-hidden bg-dkv-bg/40"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-dkv-bg"
              >
                <span className="text-dkv-forest text-sm font-extrabold uppercase tracking-wide pr-4">
                  {faq.question}
                </span>
                <span className={`material-symbols-outlined text-dkv-lime transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${openIdx === idx ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-dkv-neutral text-sm leading-relaxed border-t border-dkv-border pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
