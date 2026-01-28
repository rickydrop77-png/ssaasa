import React from 'react';
import { HeartHandshake } from 'lucide-react';

const ClosingThankYou: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800">
             <HeartHandshake className="w-8 h-8 text-volts-yellow" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Obrigado pela sua visita!</h3>
          
          <p className="text-slate-400 leading-relaxed text-lg mb-8">
            Sabemos que investir em energia solar é uma decisão importante para o orçamento da família. 
            Queremos agradecer por considerar a <strong>Volts Energia Solar</strong>. 
            Nosso compromisso é tratar o seu telhado com o mesmo cuidado que tratamos o da nossa própria casa.
          </p>

          <div className="inline-block border-t border-slate-800 pt-6">
            <p className="text-volts-yellow font-script text-xl italic">Equipe Volts Solar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingThankYou;