
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import ClinicFinder from './components/ClinicFinder';
import Segments from './components/Segments';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Pricing />
        <Benefits />
        <ClinicFinder />
        <Segments />
        <FAQ />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
      
      <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-secondary text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Asistente IA"
        >
          <span className="material-symbols-outlined">smart_toy</span>
        </button>
        <FloatingWhatsApp />
      </div>

      {isChatOpen && (
        <GeminiChat onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
};

export default App;
