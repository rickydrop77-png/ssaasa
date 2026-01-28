import React from 'react';
import { PenTool, Box, Wrench, CheckSquare, Activity, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <PenTool />,
      title: "Engenharia Personalizada",
      text: "Projetos desenhados sob medida para a inclinação e orientação do seu telhado."
    },
    {
      icon: <Box />,
      title: "Tecnologia Intelbras",
      text: "Equipamentos de tier-1 global, com inversores de alta eficiência e durabilidade."
    },
    {
      icon: <Wrench />,
      title: "Instalação Premium",
      text: "Acabamento impecável. Eletrodutos, cabeamento e fixação com padrão industrial."
    },
    {
      icon: <CheckSquare />,
      title: "Homologação Completa",
      text: "Resolvemos 100% da burocracia com a concessionária. Você só aproveita a economia."
    },
    {
      icon: <Smartphone />,
      title: "App de Monitoramento",
      text: "Controle sua usina na palma da mão. Veja quanto gerou e quanto economizou em tempo real."
    },
    {
      icon: <Activity />,
      title: "Performance Garantida",
      text: "Acompanhamento pós-venda para assegurar que seu sistema entregue o prometido."
    }
  ];

  return (
    <section id="services" className="py-24 bg-black border-y border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Image Composition */}
          <div className="relative sticky top-24">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-volts-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-volts-blue/10 rounded-full blur-3xl"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] group border-4 border-slate-800 bg-slate-900">
              {/* Image 2 from Drive - kept existing secondary image or can swap if user provided 2 */}
              <img 
                src="https://lh3.googleusercontent.com/d/1HUr9w35ecy1D2H1Olrtmq3xaUFKo5x3v" 
                alt="Instalação de Painéis Solares Premium" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-10">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-volts-yellow text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(255,214,0,0.5)]">Padrão Ouro</span>
                  </div>
                  <h3 className="text-3xl font-bold leading-tight">Execução técnica impecável para máxima durabilidade.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Service List */}
          <div>
            <span className="text-volts-yellow font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Nossa Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Excelência do projeto à geração.</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-volts-yellow/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-volts-yellow/10">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl shadow-inner border border-slate-800 flex items-center justify-center text-volts-yellow mb-1 group-hover:scale-110 transition-transform">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-slate-300 text-base leading-relaxed font-medium">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-800">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <img className="w-10 h-10 rounded-full border-2 border-slate-900 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                    <img className="w-10 h-10 rounded-full border-2 border-slate-900 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=8" alt="Avatar" />
                    <img className="w-10 h-10 rounded-full border-2 border-slate-900 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=12" alt="Avatar" />
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-volts-yellow text-black text-xs flex items-center justify-center font-bold">+500</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Projetos entregues</p>
                    <p className="text-xs text-slate-400">Avaliação 5.0 ⭐⭐⭐⭐⭐</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;