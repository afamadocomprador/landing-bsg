
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dkv-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-12 text-center leading-tight">
          Lo que dicen nuestros clientes: Tu sonrisa, su mejor opinión
        </h2>
        
        <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[300px] md:min-w-[380px] bg-white p-8 rounded-xl border border-dkv-border shadow-sm snap-center flex flex-col gap-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dkv-lime/10 flex items-center justify-center font-extrabold text-dkv-forest text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-dkv-forest font-extrabold text-xs uppercase tracking-widest">{t.name}</h4>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className="material-symbols-outlined text-sm fill-current">
                        {idx < Math.floor(t.rating) ? 'star' : (idx < t.rating ? 'star_half' : 'star_outline')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-dkv-neutral text-sm italic leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="h-12 px-8 flex items-center justify-center border-2 border-dkv-lime text-dkv-lime font-bold uppercase tracking-wide text-xs rounded hover:bg-dkv-lime hover:text-white transition-all duration-300">
            &rsaquo; VER TODAS LAS OPINIONES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
