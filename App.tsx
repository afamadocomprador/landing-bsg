
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Features from './components/Features';
import ClinicFinder from './components/ClinicFinder';
import Segments from './components/Segments';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-dkv-neutral selection:bg-dkv-lime selection:text-white">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Features />
        <ClinicFinder />
        <Segments />
        <FAQ />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
