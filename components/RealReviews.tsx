import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Seu José Carlos",
    location: "Zona Rural, Valença - BA",
    text: "Instalaram aqui no sítio mês passado. O pessoal é muito educado, explicaram tudo direitinho pra mim que não entendo muito de tecnologia. A conta já caiu de 600 pra 80 reais. Uma benção!",
    avatar: "JC"
  },
  {
    name: "Mariana Souza",
    location: "Centro, Santo Antônio de Jesus",
    text: "Fiquei com medo de quebrar telha ou dar goteira, mas a equipe é muito cuidadosa. Deixaram o quintal limpinho depois da obra. O aplicativo da Intelbras é show, fico olhando a geração toda hora rsrs.",
    avatar: "MS"
  },
  {
    name: "Ricardo Mendes",
    location: "Comércio, Valença - BA",
    text: "Fiz orçamento com 4 empresas, mas fechei com a Volts pq foi a única que o técnico veio medir o telhado antes de vender. Passou muita confiança. Melhor investimento que fiz pro mercado.",
    avatar: "RM"
  }
];

const RealReviews: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">
            Opinião de quem usa
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            O que o pessoal tá falando no <span className="text-[#25D366]">WhatsApp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl relative hover:bg-slate-900 transition-colors">
              <Quote className="absolute top-6 right-6 text-slate-700 w-8 h-8 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-volts-yellow to-yellow-600 flex items-center justify-center font-bold text-black text-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{review.name}</p>
                  <p className="text-slate-500 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealReviews;