
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-soft-bg overflow-hidden">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-secondary text-3xl font-extrabold leading-tight tracking-tight uppercase text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
        
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory px-4 -mx-4 custom-scrollbar">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl border border-border-dkv shadow-lg snap-center flex flex-col gap-6 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#dceebb] text-secondary flex items-center justify-center font-black text-xl">
                  {t.initials}
                </div>
                <div>
                  <span className="text-secondary font-bold text-lg block">{t.name}</span>
                  <div className="flex text-[#FFC107]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`material-symbols-outlined text-xl ${i < Math.floor(t.rating) ? 'fill-current' : ''}`}>
                        {i < Math.floor(t.rating) ? 'star' : 'star_half'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-dkv text-lg italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="h-14 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-md transition-all">
            &gt; Ver todas las opiniones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
