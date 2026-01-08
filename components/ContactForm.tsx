
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dkv-forest uppercase tracking-tight mb-10 text-center">
          ¿Necesitas Asesoramiento Personalizado? Contáctanos
        </h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-dkv-forest text-[11px] font-bold uppercase tracking-widest">Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Tu nombre"
              className="w-full h-14 px-5 bg-white border border-dkv-border rounded focus:ring-2 focus:ring-dkv-lime outline-none transition-all placeholder:text-dkv-neutral/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-dkv-forest text-[11px] font-bold uppercase tracking-widest">Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="tucorreo@ejemplo.com"
              className="w-full h-14 px-5 bg-white border border-dkv-border rounded focus:ring-2 focus:ring-dkv-lime outline-none transition-all placeholder:text-dkv-neutral/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-dkv-forest text-[11px] font-bold uppercase tracking-widest">Número de Teléfono</label>
            <input 
              type="tel" 
              placeholder="+34 600 000 000"
              className="w-full h-14 px-5 bg-white border border-dkv-border rounded focus:ring-2 focus:ring-dkv-lime outline-none transition-all placeholder:text-dkv-neutral/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-dkv-forest text-[11px] font-bold uppercase tracking-widest">Tu Mensaje</label>
            <textarea 
              rows={4}
              placeholder="¿En qué podemos ayudarte?"
              className="w-full p-5 bg-white border border-dkv-border rounded focus:ring-2 focus:ring-dkv-lime outline-none transition-all resize-none placeholder:text-dkv-neutral/30"
            />
          </div>
          <button 
            type="submit"
            className="w-full h-14 bg-dkv-lime hover:bg-dkv-forest text-white font-extrabold uppercase tracking-widest rounded shadow-xl transition-all duration-300 transform active:scale-[0.98]"
          >
            &rsaquo; ENVIAR CONSULTA
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
