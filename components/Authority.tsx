import React from 'react';
import { Award, Star, CheckCircle, Shield } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-24 bg-black border-b border-slate-800 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            {/* Keeping Green here for Intelbras identity */}
            <div className="inline-flex items-center gap-2 text-volts-intelbras font-bold uppercase tracking-[0.2em] text-xs mb-4">
              <span className="w-8 h-[2px] bg-volts-intelbras"></span>
              Autoridade de Mercado
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              A Segurança de uma Revenda Oficial <span className="text-volts-intelbras">Intelbras</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg font-normal">
              Não arrisque o telhado da sua família. A Volts Energia Solar é auditada e certificada por uma das maiores indústrias de tecnologia do mundo.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Engenheiros Certificados", desc: "Equipe técnica própria com treinamentos direto na fábrica." },
                { title: "Garantia de Performance", desc: "Seu sistema gerando o que foi prometido por 25 anos." },
                { title: "Peças de Reposição", desc: "Estoque local para manutenção imediata caso necessário." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800 hover:shadow-sm group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 group-hover:bg-volts-intelbras group-hover:text-white transition-colors">
                    <CheckCircle className="text-volts-intelbras w-6 h-6 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-slate-500 group-hover:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center perspective-1000">
             {/* 3D Card Effect - Intelbras Themed */}
             <div className="relative group cursor-pointer w-full max-w-md">
                <div className="absolute inset-0 bg-volts-intelbras blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-3xl p-8 text-white shadow-2xl border border-white/10 transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 preserve-3d">
                  
                  <div className="flex justify-between items-start mb-12">
                    <Shield className="w-12 h-12 text-volts-intelbras opacity-100" />
                    <div className="text-right">
                       <p className="text-xs text-slate-400 uppercase tracking-widest">Certificado</p>
                       <p className="text-volts-intelbras font-bold">#OFFICIAL-PARTNER</p>
                    </div>
                  </div>

                  <div className="text-center mb-12">
                     <div className="text-5xl font-black text-white tracking-tighter mb-2">intelbras</div>
                     <div className="text-sm font-bold text-volts-intelbras uppercase tracking-[0.5em] border-t border-white/10 pt-4 inline-block w-full">Solar</div>
                  </div>

                  <div className="flex justify-between items-end">
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="w-5 h-5 text-volts-intelbras fill-volts-intelbras" />
                        ))}
                     </div>
                     <div className="text-right">
                       <p className="text-xs text-slate-500 uppercase">Validade</p>
                       <p className="font-mono text-slate-300">VITALÍCIA</p>
                     </div>
                  </div>
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" style={{backgroundSize: '200% 200%'}}></div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;