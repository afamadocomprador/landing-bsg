
import React, { useState } from 'react';

const ClinicFinder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    provincia: '',
    localidad: '',
    cp: ''
  });

  return (
    <section className="py-20 bg-white" id="finder">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-6">
              Encuentra tu Clínica Dental DKV más cercana
            </h2>
            <p className="text-dkv-neutral text-lg mb-8 leading-relaxed">
              Accede a nuestra amplia red de clínicas y especialistas. Completa los pasos para ver los centros disponibles en tu zona.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-dkv-lime text-3xl">location_on</span>
                <span className="text-xs font-bold uppercase tracking-widest text-dkv-neutral">Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-dkv-lime text-3xl">verified_user</span>
                <span className="text-xs font-bold uppercase tracking-widest text-dkv-neutral">Centros Homologados</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[450px]">
            <div className="bg-dkv-bg border border-dkv-border rounded-xl p-8 shadow-sm">
              <form className="space-y-6">
                {/* Step 1 */}
                <div className={`space-y-2 transition-opacity ${step < 1 ? 'opacity-40' : 'opacity-100'}`}>
                  <label className="flex items-center gap-2 text-dkv-forest text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-dkv-forest text-white text-[10px]">1</span>
                    PROVINCIA
                  </label>
                  <select 
                    className="w-full h-14 px-4 bg-white border border-dkv-border rounded text-sm focus:ring-2 focus:ring-dkv-lime focus:border-dkv-lime outline-none transition-all appearance-none cursor-pointer"
                    value={formData.provincia}
                    onChange={(e) => {
                      setFormData({...formData, provincia: e.target.value});
                      setStep(2);
                    }}
                  >
                    <option value="">Selecciona tu Provincia</option>
                    <option value="madrid">Madrid</option>
                    <option value="barcelona">Barcelona</option>
                    <option value="valencia">Valencia</option>
                    <option value="sevilla">Sevilla</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div className={`space-y-2 transition-opacity ${step < 2 ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                  <label className="flex items-center gap-2 text-dkv-forest text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-dkv-forest/20 text-dkv-forest text-[10px]">2</span>
                    LOCALIDAD
                  </label>
                  <select 
                    className="w-full h-14 px-4 bg-white border border-dkv-border rounded text-sm focus:ring-2 focus:ring-dkv-lime focus:border-dkv-lime outline-none transition-all disabled:bg-dkv-border/30 disabled:cursor-not-allowed"
                    disabled={step < 2}
                    value={formData.localidad}
                    onChange={(e) => {
                      setFormData({...formData, localidad: e.target.value});
                      setStep(3);
                    }}
                  >
                    <option value="">Selecciona tu Localidad</option>
                    <option value="centro">Centro</option>
                    <option value="periferia">Área Metropolitana</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div className={`space-y-2 transition-opacity ${step < 3 ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                  <label className="flex items-center gap-2 text-dkv-forest text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-dkv-forest/20 text-dkv-forest text-[10px]">3</span>
                    CÓDIGO POSTAL
                  </label>
                  <input 
                    type="text" 
                    placeholder="Introduce tu Código Postal"
                    className="w-full h-14 px-4 bg-white border border-dkv-border rounded text-sm focus:ring-2 focus:ring-dkv-lime focus:border-dkv-lime outline-none transition-all disabled:bg-dkv-border/30"
                    disabled={step < 3}
                    onChange={(e) => setFormData({...formData, cp: e.target.value})}
                  />
                </div>

                <button 
                  type="button"
                  className="w-full h-14 bg-dkv-lime hover:bg-dkv-forest text-white font-bold uppercase tracking-widest rounded shadow-md transition-all duration-300"
                >
                  &rsaquo; BUSCAR CLÍNICAS DKV
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicFinder;
