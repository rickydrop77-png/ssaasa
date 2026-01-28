import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "A energia solar funciona em dias nublados?",
    answer: "Sim! Os painéis solares funcionam através da radiação solar, e não apenas da luz direta do sol. Em dias nublados, a produção continua, embora em menor intensidade. O sistema é dimensionado considerando a média climática anual da sua região."
  },
  {
    question: "Em quanto tempo começo a economizar?",
    answer: "A economia é imediata. Assim que o sistema é instalado e o relógio bidirecional é trocado pela concessionária, você já começa a gerar sua própria energia e abater o consumo da rede."
  },
  {
    question: "As placas têm garantia?",
    answer: "Sim! Trabalhamos com equipamentos Intelbras que possuem garantias de performance de 25 anos, além da garantia contra defeitos de fabricação."
  },
  {
    question: "Precisa de muita manutenção?",
    answer: "Muito pouca. Basicamente, é necessária a limpeza dos painéis (geralmente 1 ou 2 vezes ao ano, dependendo da poeira do local) para garantir a máxima captação de luz."
  },
  {
    question: "Posso financiar o sistema?",
    answer: "Sim. A economia gerada na conta de luz geralmente é suficiente para pagar a parcela do financiamento. Temos parcerias com diversos bancos para facilitar sua aquisição."
  },
  {
    question: "A instalação é segura para o telhado?",
    answer: "Com certeza. Nossa equipe de engenharia avalia a estrutura do seu telhado antes da instalação. O peso dos painéis é distribuído uniformemente e utilizamos estruturas de fixação específicas para cada tipo de telha."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Perguntas Frequentes</h2>
          <p className="text-slate-400 mt-2">Tire suas dúvidas sobre energia solar</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden transition-all hover:border-volts-yellow/50 shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-slate-900 focus:outline-none hover:bg-slate-800 transition-colors"
              >
                <span className="font-semibold text-white text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-volts-yellow w-5 h-5" />
                ) : (
                  <ChevronDown className="text-slate-500 w-5 h-5" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-slate-400 leading-relaxed border-t border-slate-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;