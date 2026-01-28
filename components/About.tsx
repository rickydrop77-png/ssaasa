import React from 'react';
import { Award, Zap, Briefcase, Star, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-slate-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image (Representative) */}
          <div className="lg:w-1/2 relative group">
             {/* Background Blur */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-volts-yellow to-volts-blue opacity-20 blur-2xl rounded-full transition-opacity duration-1000 group-hover:opacity-30"></div>
             
             {/* Pulsing Yellow Frame - NEW */}
             <div className="absolute -inset-1 bg-volts-yellow/40 rounded-3xl blur-sm animate-pulse"></div>
             
             <div className="relative rounded-2xl overflow-hidden border border-volts-yellow/50 shadow-[0_0_30px_rgba(255,214,0,0.15)]">
                <img 
                  src="https://lh3.googleusercontent.com/d/19TUso4I1U8Qs22M-ifODdp_LSa6O96Jy" 
                  alt="Representante Volts Energia Solar" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                   <p className="text-volts-yellow font-bold text-lg flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-volts-yellow animate-ping"></span>
                     Especialistas em Energia
                   </p>
                   <p className="text-slate-300 text-sm pl-4">Compromisso com sua economia</p>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volts-yellow/10 border border-volts-yellow/20 mb-6">
               <span className="w-2 h-2 rounded-full bg-volts-yellow animate-pulse"></span>
               <span className="text-volts-yellow text-xs font-bold uppercase tracking-widest">Quem Somos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experiência técnica que <br/>
              <span className="text-volts-yellow">garante resultados.</span>
            </h2>
            
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-relaxed mb-8">
              <p>
                A <strong>Volts Energia Solar</strong> é liderada por quem entende do assunto na prática. Não somos apenas vendedores, somos técnicos especialistas focados na segurança e eficiência da sua instalação.
              </p>
            </div>

            {/* Qualifications Grid */}
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 space-y-4 hover:border-volts-yellow/20 transition-colors duration-500">
                <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-lg bg-volts-yellow/10 flex items-center justify-center shrink-0 border border-volts-yellow/20">
                        <Zap className="w-6 h-6 text-volts-yellow animate-[pulse_3s_ease-in-out_infinite]" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg group-hover/item:text-volts-yellow transition-colors">Técnico em Eletromecânica</h4>
                        <p className="text-slate-400 text-sm">Formação técnica especializada</p>
                    </div>
                </div>

                <div className="w-full h-px bg-slate-800"></div>

                <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-lg bg-volts-intelbras/10 flex items-center justify-center shrink-0 border border-volts-intelbras/20">
                        {/* Slow spin for the star to represent a badge */}
                        <Star className="w-6 h-6 text-volts-intelbras animate-[spin_8s_linear_infinite]" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg group-hover/item:text-volts-intelbras transition-colors">Técnico Solar Intelbras</h4>
                        <p className="text-slate-400 text-sm">3 anos de especialização na marca líder</p>
                    </div>
                </div>

                <div className="w-full h-px bg-slate-800"></div>

                <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-lg bg-volts-blue/10 flex items-center justify-center shrink-0 border border-volts-blue/20">
                        <Briefcase className="w-6 h-6 text-volts-blue animate-bounce" style={{ animationDuration: '3s' }} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg group-hover/item:text-volts-blue transition-colors">+15 Anos de Experiência</h4>
                        <p className="text-slate-400 text-sm">Histórico sólido em elétrica e manutenção</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-volts-yellow" />
                <span>Profissionais habilitados e certificados.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;