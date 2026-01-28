import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Zap, MousePointer2, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-900/40 skew-x-12 translate-x-20 z-0 border-l border-white/5"></div>
      
      {/* Decorative Glows - Yellow/Blue */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-volts-yellow rounded-full filter blur-[150px] opacity-10 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-volts-blue rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="relative z-20 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-20 pt-32 md:pt-24">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-left animate-float">
            
            {/* Location Badge - NEW */}
            <div className="inline-flex items-center gap-2 mb-6 animate-pulse">
               <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs md:text-sm font-bold text-slate-300">
                  <MapPin className="w-4 h-4 text-volts-yellow" />
                  <span>Exclusivo: <span className="text-white">SAJ, Valença e Região</span></span>
               </div>
            </div>

            {/* Intelbras Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-volts-intelbras/10 border border-volts-intelbras/30 mb-8 shadow-sm hover:shadow-md transition-all cursor-default group backdrop-blur-sm">
              <div className="bg-volts-intelbras p-1 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,163,53,0.5)]">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
              <span className="text-slate-200 text-xs md:text-sm font-bold tracking-[0.1em] uppercase">
                Revenda Oficial <span className="text-volts-intelbras">Intelbras</span>
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Transforme Sol em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-volts-yellow to-volts-blue filter drop-shadow-[0_0_10px_rgba(255,214,0,0.3)]">
                Patrimônio
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed font-normal border-l-4 border-volts-yellow pl-6">
              Chega de alugar energia. Torne-se um produtor independente e elimine até <strong className="text-volts-yellow font-bold">95%</strong> da sua conta de luz com tecnologia Intelbras.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={scrollToCalculator}
                className="group relative px-8 py-4 bg-volts-yellow hover:bg-white text-black hover:text-black font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,214,0,0.3)] hover:shadow-[0_0_40px_rgba(255,214,0,0.5)] flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Simular Economia
                  <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={scrollToServices}
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-volts-yellow text-white font-semibold rounded-xl text-lg transition-all flex items-center justify-center hover:bg-white/5 shadow-sm"
              >
                Como Funciona
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-400">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-volts-intelbras" />
                 <span>25 anos de garantia</span>
               </div>
               <div className="flex items-center gap-2">
                 <Zap className="w-5 h-5 text-volts-blue" />
                 <span>Instalação Express</span>
               </div>
            </div>
        </div>

        {/* Right Visual - New Image */}
        <div className="md:w-1/2 hidden md:block relative perspective-1000">
           {/* Abstract Solar Concept */}
           <div className="relative w-full aspect-square max-w-[600px] mx-auto transition-transform duration-100 ease-out"
                style={{ transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y * -1}deg)` }}>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-volts-yellow/20 to-volts-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Main Brand Image */}
              <div className="relative z-10 rounded-2xl shadow-2xl border-4 border-slate-800 overflow-hidden w-[90%] h-[90%] mx-auto transform transition-transform hover:scale-[1.02]">
                  <img 
                    src="https://lh3.googleusercontent.com/d/19TUso4I1U8Qs22M-ifODdp_LSa6O96Jy"
                    alt="Volts Energia Solar"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Overlay Gradient for integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-5 left-0 bg-slate-900/90 backdrop-blur-xl border border-volts-yellow/30 p-5 rounded-xl shadow-2xl z-20 animate-float" style={{animationDelay: '1s'}}>
                 <div className="flex items-center gap-3">
                    <div className="bg-volts-yellow/20 p-2 rounded-lg">
                      <Zap className="text-volts-yellow w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Economia Anual</p>
                      <p className="text-xl font-bold text-white">R$ 12.450,00</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;