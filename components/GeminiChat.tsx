
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GeminiChat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy tu asistente virtual de DKV Agente Exclusivo. ¿En qué puedo ayudarte hoy sobre nuestros seguros dentales?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Eres un asistente experto para un Agente Exclusivo de DKV Seguros Dentales en España. 
          Tu objetivo es ayudar a los usuarios con dudas sobre los planes Dentisalud Classic y Élite.
          - Dentisalud Classic: 8€/mes, +50 tratamientos gratis, limpieza anual gratis.
          - Dentisalud Élite: 15€/mes, sin carencias, niños gratis < 14 años, mayores descuentos en implantes.
          - Beneficios comunes: Más de 1500 clínicas, sin límite de edad, uso inmediato en Élite.
          Sé profesional, amable, claro y conciso. No inventes precios. Siempre recomienda contactar con el agente para un presupuesto exacto.`
        }
      });

      const aiResponse = response.text || "Lo siento, no he podido procesar tu solicitud. Por favor, contacta con nosotros directamente.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Ha ocurrido un error al conectar con el asistente. Inténtalo de nuevo más tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 w-[350px] max-w-[90vw] h-[500px] bg-white rounded-2xl shadow-2xl border border-border-dkv flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
      <div className="bg-secondary p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">smart_toy</span>
          </div>
          <span className="font-bold text-sm">Asistente DKV</span>
        </div>
        <button onClick={onClose} className="hover:opacity-70">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto flex flex-col gap-4 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-soft-bg text-neutral-dkv rounded-tl-none border border-border-dkv'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-soft-bg p-3 rounded-2xl rounded-tl-none border border-border-dkv">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border-dkv bg-white flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu duda..."
          className="flex-grow h-10 px-4 bg-soft-bg border-none rounded-full text-sm focus:ring-2 focus:ring-primary"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary disabled:opacity-50 transition-colors"
        >
          <span className="material-symbols-outlined text-base">send</span>
        </button>
      </div>
    </div>
  );
};

export default GeminiChat;
