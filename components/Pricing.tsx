
import React from 'react';
import { PLANS } from '../constants';
import { Plan } from '../types';

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const isElite = plan.isPopular;
  
  return (
    <div className={`relative flex flex-col rounded-lg bg-white overflow-hidden transition-all duration-300 ${
      isElite 
      ? 'border-2 border-dkv-lime shadow-2xl scale-105 z-10' 
      : 'border border-dkv-border shadow-lg'
    }`}>
      {isElite && (
        <div className="absolute top-0 right-0 bg-dkv-lime text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
          MÁS COMPLETO
        </div>
      )}
      
      <div className={`p-8 border-b ${isElite ? 'bg-dkv-lime/5 border-dkv-lime/20' : 'bg-dkv-bg border-dkv-border'}`}>
        <h3 className="text-dkv-forest text-xl font-extrabold uppercase mb-4 tracking-tight">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-extrabold text-dkv-forest">{plan.price}</span>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-dkv-neutral">{plan.pricePeriod}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-dkv-neutral/60">{plan.priceLabel}</span>
          </div>
        </div>
      </div>

      <div className="p-8 flex-grow">
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-dkv-neutral leading-relaxed">
              <span className="material-symbols-outlined text-dkv-lime text-[22px] shrink-0">
                {feature.text.toLowerCase().includes('carencia') ? 'timer_off' : 'check_circle'}
              </span>
              <span>
                {feature.isStrong ? (
                  <span className="font-bold">{feature.text}</span>
                ) : feature.text}
              </span>
            </li>
          ))}
        </ul>
        <button className={`w-full h-12 flex items-center justify-center rounded font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
          isElite 
          ? 'bg-dkv-lime text-white hover:bg-dkv-forest shadow-md' 
          : 'border-2 border-dkv-lime text-dkv-lime hover:bg-dkv-lime hover:text-white'
        }`}>
          &rsaquo; {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-16 max-w-2xl">
          Compara y Elige tu Seguro Dental DKV Ideal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {PLANS.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
