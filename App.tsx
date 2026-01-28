import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Maintenance from './components/Maintenance';
import Authority from './components/Authority';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import RealReviews from './components/RealReviews';
import ClosingThankYou from './components/ClosingThankYou';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col font-sans text-slate-200 antialiased selection:bg-volts-yellow selection:text-black overflow-x-hidden">
      <Header />
      <Hero />
      
      <div id="calculator-section">
        <Calculator />
      </div>
      
      <Benefits />
      <About />
      <Services />
      <Gallery />
      <RealReviews />
      <Maintenance />
      <Authority />
      <FAQ />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-t from-black to-slate-900 py-20 px-4 text-center relative overflow-hidden border-t border-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-volts-yellow/10 border border-volts-yellow/30 text-volts-yellow font-bold text-xs uppercase tracking-widest mb-6 animate-pulse">
            Últimas vagas na agenda de instalação
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Pare de queimar dinheiro.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
            Cada dia sem solar é um dia pagando conta cara sem necessidade. A decisão inteligente é agora.
          </p>
          <a 
            href="https://wa.me/557588795454?text=Olá,%20gostaria%20de%20garantir%20minha%20economia%20solar." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-volts-yellow hover:bg-white text-black hover:text-black font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,214,0,0.4)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <ClosingThankYou />
      <Footer />
      <FloatingWhatsApp />
      <SocialProof />
    </div>
  );
};

export default App;