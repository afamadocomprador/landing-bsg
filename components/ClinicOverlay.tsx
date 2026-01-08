
import React, { useEffect, useState } from 'react';

interface ClinicOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClinicOverlay: React.FC<ClinicOverlayProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchStep, setSearchStep] = useState<'input' | 'results'>('input');
  const [province, setProvince] = useState('');
  const [locality, setLocality] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
      // Reset state when opening
      setSearchStep('input');
    } else {
      document.body.style.overflow = 'auto';
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (province) {
      setSearchStep('results');
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex flex-col transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />

      {/* Main Container */}
      <div className={`relative mt-auto h-[94dvh] w-full max-w-md mx-auto bg-white rounded-t-[32px] shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Header Hook */}
        <div className="w-full flex justify-center pt-3 pb-1 shrink-0 bg-white">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* Top Navigation */}
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <button 
            onClick={searchStep === 'results' ? () => setSearchStep('input') : onClose}
            className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-tight"
          >
            <span className="material-symbols-outlined text-[20px]">
              {searchStep === 'results' ? 'arrow_back' : 'close'}
            </span>
            {searchStep === 'results' ? 'Volver' : 'Cerrar'}
          </button>
          <div className="flex flex-col items-center">
            <span className="text-secondary font-extrabold text-lg leading-none uppercase tracking-tighter">DKV Dental</span>
            <span className="text-[9px] font-bold text-[#6A625A] uppercase tracking-widest">Buscador de clínicas</span>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#f8f8f5]">
          {searchStep === 'input' ? (
            /* SEARCH INPUTS VIEW */
            <div className="px-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-secondary text-2xl font-extrabold uppercase mb-2 tracking-tight">
                Busca tu clínica
              </h2>
              <p className="text-[#6A625A] text-sm mb-8">
                Selecciona tu ubicación para mostrarte los centros concertados con DKV más cercanos.
              </p>

              <form onSubmit={handleSearch} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-secondary text-[10px] font-bold uppercase tracking-widest ml-1">Provincia</label>
                  <div className="relative">
                    <select 
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full h-14 pl-5 pr-12 bg-white border border-[#e5e7da] rounded-xl text-base text-[#6A625A] appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                    >
                      <option value="" disabled>Selecciona Provincia</option>
                      <option value="madrid">Madrid</option>
                      <option value="barcelona">Barcelona</option>
                      <option value="valencia">Valencia</option>
                      <option value="sevilla">Sevilla</option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
                      <span className="material-symbols-outlined">expand_circle_down</span>
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col gap-2 transition-opacity duration-300 ${province ? 'opacity-100' : 'opacity-40'}`}>
                  <label className="text-secondary text-[10px] font-bold uppercase tracking-widest ml-1">Localidad</label>
                  <div className="relative">
                    <select 
                      disabled={!province}
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full h-14 pl-5 pr-12 bg-white border border-[#e5e7da] rounded-xl text-base text-[#6A625A] appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm disabled:bg-gray-50"
                    >
                      <option value="">Todas las localidades</option>
                      <option value="centro">Centro</option>
                      <option value="norte">Zona Norte</option>
                      <option value="sur">Zona Sur</option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
                      <span className="material-symbols-outlined">expand_circle_down</span>
                    </span>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={!province}
                  className="mt-4 w-full h-14 bg-primary hover:bg-[#728500] text-white font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:shadow-none"
                >
                  <span className="material-symbols-outlined">search</span>
                  Buscar ahora
                </button>
              </form>

              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#e5e7da] flex flex-col items-center text-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
                  <span className="text-[10px] font-bold text-secondary uppercase leading-tight tracking-wide">Más de 2000 dentistas</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#e5e7da] flex flex-col items-center text-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">distance</span>
                  <span className="text-[10px] font-bold text-secondary uppercase leading-tight tracking-wide">Busca por cercanía</span>
                </div>
              </div>
            </div>
          ) : (
            /* RESULTS VIEW */
            <div className="flex flex-col h-full animate-in fade-in duration-500">
              {/* Mini Map View */}
              <div className="w-full h-48 bg-gray-200 relative shrink-0">
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i4193!3i3072!2m3!1e0!2sm!3i600000000!3m8!2ses!3spl!4f!4m9!4e0!5m4!1bfab!2f696!3f1000!4f305!4f1!5m1!5f2!6m6!1e12!2i2!11e0!12e0!14e0!16e0?key=YOUR_API_KEY')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
                
                {/* Simulated Pips */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
                  <span className="material-symbols-outlined text-4xl animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div className="absolute top-1/3 left-1/4 text-secondary opacity-60">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div className="absolute top-2/3 left-3/4 text-secondary opacity-60">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-tight">Viendo {province}</span>
                   </div>
                   <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">my_location</span>
                   </button>
                </div>
              </div>

              {/* List Section */}
              <div className="px-5 py-6 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-secondary font-extrabold text-sm uppercase tracking-wider">Resultados destacados</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">4 Clínicas encontradas</span>
                </div>

                <div className="flex flex-col gap-4 pb-24">
                  <ClinicCard 
                    name="Clínica Smile Design" 
                    address="Calle de Goya 89, 28001 Madrid" 
                    phone="914 444 444" 
                    distance="0.8 km"
                    featured
                  />
                  <ClinicCard 
                    name="Centro Dental Sol" 
                    address="Puerta del Sol 5, 2º Izq, 28013 Madrid" 
                    phone="915 555 555" 
                    distance="1.2 km"
                  />
                  <ClinicCard 
                    name="Clínica DKV Centro" 
                    address="Calle Mayor 12, 1º B, 28013 Madrid" 
                    phone="915 223 344" 
                    distance="1.5 km"
                  />
                  <ClinicCard 
                    name="Odontología Avanzada Lopez" 
                    address="Av. de América 45, 28002 Madrid" 
                    phone="914 567 788" 
                    distance="2.4 km"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA (Always visible when in results) */}
        {searchStep === 'results' && (
          <div className="sticky bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-50">
            <div className="max-w-md mx-auto flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#6A625A] tracking-wider leading-none mb-1">DKV Dentisalud</span>
                <span className="text-xl font-extrabold text-secondary tracking-tighter">Desde 8€<span className="text-xs font-normal text-[#6A625A] ml-1">/mes</span></span>
              </div>
              <button className="flex-1 bg-primary hover:bg-[#728500] text-white font-bold rounded-xl py-4 text-sm shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest">
                Contratar
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ClinicCard: React.FC<{ name: string; address: string; phone: string; distance: string; featured?: boolean }> = ({ name, address, phone, distance, featured }) => (
  <article className={`relative p-5 rounded-2xl border transition-all duration-300 ${featured ? 'bg-white border-primary shadow-lg shadow-primary/5' : 'bg-white border-gray-100 shadow-sm'}`}>
    {featured && (
      <div className="absolute -top-3 left-4 bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
        Recomendada
      </div>
    )}
    
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-extrabold text-secondary text-lg leading-tight">{name}</h3>
        </div>
        <p className="text-xs text-[#6A625A] leading-relaxed mb-3">{address}</p>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1 text-[11px] font-bold text-primary">
            <span className="material-symbols-outlined text-[16px]">distance</span>
            {distance}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            Abierto ahora
          </div>
        </div>
      </div>
      
      <a 
        href={`tel:${phone.replace(/\s/g, '')}`}
        className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary border border-gray-100 active:bg-primary active:text-white transition-colors"
      >
        <span className="material-symbols-outlined">call</span>
      </a>
    </div>

    <div className="mt-5 pt-4 border-t border-gray-50 flex gap-2">
      <button className="flex-1 h-10 rounded-lg bg-secondary text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors hover:bg-secondary/90">
        <span className="material-symbols-outlined text-[16px]">event</span>
        Pedir Cita
      </button>
      <button className="flex-1 h-10 rounded-lg bg-white border border-gray-200 text-[#6A625A] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors hover:bg-gray-50">
        <span className="material-symbols-outlined text-[16px]">directions</span>
        Cómo llegar
      </button>
    </div>
  </article>
);

export default ClinicOverlay;
