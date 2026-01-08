
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-5 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-secondary text-4xl font-extrabold leading-tight tracking-tight mb-8 uppercase">
              Asesoramiento Personalizado
            </h2>
            <p className="text-neutral-dkv text-xl mb-10 leading-relaxed">
              ¿Tienes dudas sobre qué plan elegir? Déjanos tus datos y un Agente Exclusivo te contactará para ofrecerte la mejor solución dental.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-dkv block opacity-60">Llámanos gratis</span>
                  <span className="text-secondary font-black text-xl tracking-tight">900 123 456</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-dkv block opacity-60">Escríbenos</span>
                  <span className="text-secondary font-black text-xl tracking-tight">info@dkv-agente.es</span>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-soft-bg border border-border-dkv p-10 rounded-2xl shadow-xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-secondary text-xs font-black uppercase tracking-widest" htmlFor="nombre">Nombre Completo</label>
              <input 
                type="text" id="nombre" 
                placeholder="Tu nombre y apellidos" 
                className="w-full h-14 px-5 bg-white border border-border-dkv rounded-md focus:ring-primary focus:border-primary text-base" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-secondary text-xs font-black uppercase tracking-widest" htmlFor="email">Email</label>
              <input 
                type="email" id="email" 
                placeholder="tucorreo@ejemplo.com" 
                className="w-full h-14 px-5 bg-white border border-border-dkv rounded-md focus:ring-primary focus:border-primary text-base" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-secondary text-xs font-black uppercase tracking-widest" htmlFor="msg">¿En qué podemos ayudarte?</label>
              <textarea 
                id="msg" 
                placeholder="Cuéntanos tus necesidades..." 
                className="w-full p-5 bg-white border border-border-dkv rounded-md focus:ring-primary focus:border-primary text-base h-32 resize-none" 
              />
            </div>
            <button className="mt-4 w-full h-16 bg-primary hover:bg-[#728500] text-white text-lg font-black uppercase tracking-widest rounded-md shadow-2xl transition-all transform hover:-translate-y-1">
              &gt; Enviar Consulta
            </button>
            <p className="text-[10px] text-neutral-dkv/60 text-center leading-relaxed mt-2">
              Al enviar este formulario, aceptas nuestra política de privacidad y tratamiento de datos para fines informativos sobre el seguro.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
