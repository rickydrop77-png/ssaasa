import React from 'react';
import { Activity, Wrench, ShieldCheck } from 'lucide-react';

const Maintenance: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-volts-blue rounded-full filter blur-[120px] opacity-5 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-volts-yellow rounded-full filter blur-[120px] opacity-5 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Suporte Vitalício Volts</h2>
          <p className="text-slate-300 text-lg font-medium">
            Nossa relação não termina na instalação. Oferecemos um ecossistema completo de pós-venda para garantir que seu sistema opere com eficiência máxima por décadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wrench className="w-8 h-8 text-white" />,
              title: "Manutenção Preventiva",
              desc: "Limpeza técnica e revisão elétrica programada para evitar perdas de geração."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-white" />,
              title: "Garantia Estendida",
              desc: "Gestão completa de garantias junto à Intelbras. Se der problema, nós resolvemos."
            },
            {
              icon: <Activity className="w-8 h-8 text-white" />,
              title: "Monitoramento Ativo",
              desc: "Nossa central monitora alertas do seu inversor e age proativamente."
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:border-volts-yellow/50 shadow-lg hover:shadow-[0_0_20px_rgba(255,214,0,0.15)] hover:-translate-y-1">
              <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-volts-yellow group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-300 text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintenance;