
import React from 'react';

interface ClinicFormProps {
  onSearch: () => void;
}

const ClinicForm: React.FC<ClinicFormProps> = ({ onSearch }) => {
  return (
    <section className="py-16 bg-white border-y border-[#e5e7da]">
      <div className="px-5 max-w-lg mx-auto w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <span className="material-symbols-outlined text-[32px]">location_on</span>
        </div>
        <h2 className="text-secondary text-[28px] font-extrabold leading-tight tracking-tight mb-4 uppercase">
          Tu Dentista DKV, siempre cerca
        </h2>
        <p className="text-[#6A625A] text-base mb-10 leading-relaxed max-w-sm mx-auto">
          Contamos con la red de clínicas dentales más amplia de España. Encuentra tu centro más cercano en segundos.
        </p>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={onSearch}
            className="w-full h-14 flex items-center justify-center bg-primary hover:bg-[#728500] text-white text-base font-bold uppercase tracking-widest rounded-full shadow-lg transform active:scale-[0.98] transition-all duration-200"
          >
            <span className="material-symbols-outlined mr-2">search</span>
            Buscar Clínica
          </button>
          
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-1.5 text-[#6A625A]">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">Certificadas</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#6A625A]">
              <span className="material-symbols-outlined text-primary text-xl">map</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">Cerca de ti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicForm;
