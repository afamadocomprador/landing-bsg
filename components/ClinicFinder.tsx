
import React, { useState } from 'react';
import { CLINICS } from '../constants';

const ClinicFinder: React.FC = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredClinics = CLINICS.filter(c => 
    c.city.toLowerCase().includes(query.toLowerCase()) || 
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="clinicas" className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-secondary text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6 uppercase">
              Encuentra tu Clínica Dental DKV más cercana
            </h2>
            <p className="text-neutral-dkv text-lg mb-10 leading-relaxed">
              Accede a nuestra amplia red de centros propios y especialistas concertados. Encuentra tu centro DKV Dentisalud filtrando por ubicación.
            </p>
            
            <div className="bg-soft-bg border border-border-dkv rounded-xl p-8 shadow-sm">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-xs font-bold uppercase tracking-widest">Provincia o Ciudad</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Introduce provincia o ciudad..."
                      className="w-full h-14 pl-12 pr-4 bg-white border border-border-dkv rounded-md text-base focus:ring-primary focus:border-primary"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowResults(true)}
                  className="w-full h-14 bg-primary hover:bg-[#728500] text-white text-base font-bold uppercase tracking-widest rounded-md shadow-lg transition-all"
                >
                  &gt; Buscar Clínicas
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-neutral-dkv font-bold text-xs uppercase">
                <span className="material-symbols-outlined text-primary">public</span>
                Cobertura Nacional
              </div>
              <div className="flex items-center gap-2 text-neutral-dkv font-bold text-xs uppercase">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                Centros Homologados
              </div>
            </div>
          </div>

          <div className={`space-y-6 ${showResults ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <h3 className="text-secondary text-xl font-bold uppercase mb-4">
              {showResults ? `Resultados (${filteredClinics.length})` : 'Clínicas destacadas'}
            </h3>
            
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {(showResults ? filteredClinics : CLINICS.slice(0, 2)).map((clinic) => (
                <div key={clinic.id} className="bg-white border border-border-dkv rounded-lg overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-all">
                  <div className="w-full sm:w-40 h-40 shrink-0">
                    <img src={clinic.imageUrl} alt={clinic.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <h4 className="text-secondary font-bold text-lg mb-1">{clinic.name}</h4>
                      <p className="text-neutral-dkv text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                        {clinic.address}, {clinic.city}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {clinic.specialties.map(s => (
                          <span key={s} className="bg-soft-bg text-secondary text-[10px] font-bold uppercase px-2 py-1 rounded border border-border-dkv">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href={`tel:${clinic.phone}`} className="mt-4 text-primary font-bold text-sm uppercase flex items-center gap-2 hover:underline">
                      <span className="material-symbols-outlined text-lg">call</span>
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicFinder;
