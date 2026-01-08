
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-10 bg-white" id="contacto">
      <div className="px-5 max-w-lg mx-auto w-full">
        <h2 className="text-secondary text-[26px] font-extrabold leading-tight tracking-tight mb-8 uppercase">
          ¿Necesitas Asesoramiento? Contáctanos
        </h2>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-xs font-bold uppercase tracking-widest">Nombre Completo</label>
            <input className="w-full h-11 px-4 bg-white border border-[#e5e7da] rounded text-sm text-[#6A625A] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tu nombre" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-xs font-bold uppercase tracking-widest">Correo Electrónico</label>
            <input className="w-full h-11 px-4 bg-white border border-[#e5e7da] rounded text-sm text-[#6A625A] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-xs font-bold uppercase tracking-widest">Número de Teléfono</label>
            <input className="w-full h-11 px-4 bg-white border border-[#e5e7da] rounded text-sm text-[#6A625A] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+34 600 000 000" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-xs font-bold uppercase tracking-widest">Tu Mensaje</label>
            <textarea className="w-full p-4 bg-white border border-[#e5e7da] rounded text-sm text-[#6A625A] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-32 resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <button className="mt-4 w-full h-12 flex items-center justify-center bg-primary hover:bg-[#728500] text-white text-sm font-bold uppercase tracking-wide rounded shadow-lg transition-colors">
            &gt; Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
