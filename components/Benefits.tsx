import React from 'react';
import { PiggyBank, ShieldCheck, Leaf, Home, BatteryCharging, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: <PiggyBank className="w-8 h-8 text-black" />,
    title: "Retorno Financeiro",
    description: "ROI superior a maioria dos investimentos tradicionais, com payback médio entre 3 a 5 anos."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-black" />,
    title: "Blindagem Tarifária",
    description: "Fique imune aos aumentos das bandeiras tarifárias e inflação energética pelos próximos 25 anos."
  },
  {
    icon: <Leaf className="w-8 h-8 text-black" />,
    title: "Sustentabilidade Real",
    description: "Uma escolha consciente que reduz toneladas de CO2. Sua casa ou empresa como exemplo verde."
  },
  {
    icon: <Home className="w-8 h-8 text-black" />,
    title: "Valorização Imobiliária",
    description: "Estudos apontam valorização imediata de até 10% em imóveis com geração própria de energia."
  },
  {
    icon: <BatteryCharging className="w-8 h-8 text-black" />,
    title: "Autossuficiência",
    description: "Produza o que consome. Transforme seu telhado em uma usina geradora de ativos."
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-volts-yellow font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Por que Solar?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Investimento seguro com <br/>retorno garantido.
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-slate-300 max-w-sm text-right font-medium text-lg">
              A energia solar não é apenas um custo a menos, é um ativo financeiro para sua família.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-volts-yellow/40 shadow-lg hover:shadow-[0_0_20px_rgba(255,214,0,0.1)] transition-all duration-300 relative overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-volts-yellow" />
              </div>
              
              <div className="w-14 h-14 bg-volts-yellow rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 shadow-volts-yellow/20">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed text-base font-medium">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* CTA Card (Yellow Gradient) */}
          <div className="bg-gradient-to-br from-volts-yellow to-[#B39200] p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group border border-volts-yellow/50">
             <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
             <div className="relative z-10">
               <h3 className="text-2xl font-bold text-black mb-4">Pronto para economizar?</h3>
               <p className="text-black/80 mb-8 text-base font-bold">Junte-se a milhares de clientes satisfeitos.</p>
               <a href="#calculator-section" className="inline-flex items-center gap-2 bg-black text-volts-yellow font-bold py-3 px-6 rounded-lg w-full justify-center hover:bg-white hover:text-black transition-colors shadow-lg">
                 Simular Agora
                 <ArrowUpRight className="w-4 h-4" />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;