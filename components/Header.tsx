import React, { useState, useEffect } from 'react';
import { Sun, MapPin, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Location Banner - High Contrast */}
      <a 
        href="https://wa.me/557588795454?text=Olá,%20sou%20da%20região%20e%20quero%20um%20orçamento%20solar."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-volts-yellow hover:bg-white text-black text-[10px] md:text-xs font-bold py-2 px-4 flex justify-center items-center gap-2 tracking-wide transition-colors cursor-pointer relative z-50"
      >
        <MapPin className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
        <span className="uppercase truncate">Atendendo Santo Antônio de Jesus, Valença e Região</span>
        <span className="hidden md:inline-flex items-center gap-1 opacity-75 border-l border-black/20 pl-2 ml-1">
          Agendar Visita <ArrowRight className="w-3 h-3" />
        </span>
      </a>

      {/* Main Navigation */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'glass-dark py-2 shadow-lg' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-volts-yellow p-1.5 rounded-lg shadow-[0_0_15px_rgba(255,214,0,0.5)]">
              <Sun className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Volts<span className="text-volts-yellow">Solar</span>
            </span>
          </div>

          <button 
            onClick={scrollToCalculator}
            className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,214,0,0.4)] ${
              scrolled
                ? 'bg-volts-yellow text-black hover:bg-white hover:text-black'
                : 'bg-white/10 text-white border border-white/20 hover:bg-volts-yellow hover:text-black hover:border-transparent'
            }`}
          >
            Simular Agora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;