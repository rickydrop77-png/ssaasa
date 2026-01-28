import React, { useState } from 'react';
import { CalculatorData } from '../types';
import { Send, Sun, MapPin, Info, TrendingDown, AlertTriangle, Coins, FileText, Zap, Battery, LayoutGrid } from 'lucide-react';

const states = [
  { uf: 'AC', name: 'Acre', factor: 4.5 },
  { uf: 'AL', name: 'Alagoas', factor: 5.2 },
  { uf: 'AP', name: 'Amapá', factor: 4.8 },
  { uf: 'AM', name: 'Amazonas', factor: 4.5 },
  { uf: 'BA', name: 'Bahia', factor: 5.4 },
  { uf: 'CE', name: 'Ceará', factor: 5.5 },
  { uf: 'DF', name: 'Distrito Federal', factor: 5.1 },
  { uf: 'ES', name: 'Espírito Santo', factor: 4.9 },
  { uf: 'GO', name: 'Goiás', factor: 5.2 },
  { uf: 'MA', name: 'Maranhão', factor: 5.0 },
  { uf: 'MT', name: 'Mato Grosso', factor: 5.0 },
  { uf: 'MS', name: 'Mato Grosso do Sul', factor: 5.1 },
  { uf: 'MG', name: 'Minas Gerais', factor: 5.1 },
  { uf: 'PA', name: 'Pará', factor: 4.7 },
  { uf: 'PB', name: 'Paraíba', factor: 5.4 },
  { uf: 'PR', name: 'Paraná', factor: 4.4 },
  { uf: 'PE', name: 'Pernambuco', factor: 5.3 },
  { uf: 'PI', name: 'Piauí', factor: 5.5 },
  { uf: 'RJ', name: 'Rio de Janeiro', factor: 4.8 },
  { uf: 'RN', name: 'Rio Grande do Norte', factor: 5.6 },
  { uf: 'RS', name: 'Rio Grande do Sul', factor: 4.2 },
  { uf: 'RO', name: 'Rondônia', factor: 4.6 },
  { uf: 'RR', name: 'Roraima', factor: 4.7 },
  { uf: 'SC', name: 'Santa Catarina', factor: 4.2 },
  { uf: 'SP', name: 'São Paulo', factor: 4.6 },
  { uf: 'SE', name: 'Sergipe', factor: 5.1 },
  { uf: 'TO', name: 'Tocantins', factor: 5.2 }
];

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    billAmount: 800,
    name: '',
    phone: '',
    city: '',
    state: ''
  });

  const [viewMode, setViewMode] = useState<'monthly' | 'annual'>('monthly');

  // --- Real Simulator Logic ---
  const billAmountNum = Number(formData.billAmount) || 0;
  
  // 1. Average cost per kWh in Brazil (approx R$ 0.92, varies, but good for estimation)
  const avgKwhPrice = 0.92;
  const monthlyConsumptionKwh = billAmountNum / avgKwhPrice;

  // 2. Get Solar Factor based on State (Average daily irradiation kWh/m2)
  // Default to SP (4.6) if not selected
  const selectedState = states.find(s => s.uf === formData.state) || { factor: 4.6, uf: 'BR' };
  const solarFactor = selectedState.factor;

  // 3. System Size Calculation
  // Formula: Power(kWp) = Energy(kWh/mo) / (Irradiation * 30 days * PerformanceRatio)
  // Performance Ratio typically 0.75 (losses due to heat, cables, inverter)
  const performanceRatio = 0.75;
  const daysInMonth = 30;
  const systemSizeKWp = monthlyConsumptionKwh / (solarFactor * daysInMonth * performanceRatio);

  // 4. Panel Estimation (Using 550W panels)
  const panelPowerW = 550;
  const numberOfPanels = Math.ceil((systemSizeKWp * 1000) / panelPowerW);
  const roofArea = numberOfPanels * 2.5; // Approx 2.5m2 per panel

  // 5. Financials
  const newBillAmount = Math.max(80, billAmountNum * 0.05); // Minimum availability cost
  const monthlySavings = billAmountNum - newBillAmount;
  const annualSavings = monthlySavings * 12;
  const tenYearLoss = billAmountNum * 12 * 10 * 1.5; // Inflation adjusted
  
  const displaySavings = viewMode === 'monthly' ? monthlySavings : annualSavings;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'billAmount' ? (value === '' ? '' : parseFloat(value)) : value
    }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      billAmount: parseFloat(e.target.value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Requested Message Format
    const message = `Olá! Fiz uma simulação no site e tenho interesse. ☀️

📋 *Dados do Projeto:*
👤 Nome: ${formData.name}
📍 Local: ${formData.city || 'Não inf.'} - ${formData.state || 'BR'}
💰 Conta Atual: R$ ${billAmountNum.toFixed(2)}
⚡ Estimativa: ${numberOfPanels} painéis (${systemSizeKWp.toFixed(2)} kWp)
📱 Telefone: ${formData.phone}

Gostaria de um orçamento formal.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/557588795454?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-volts-blue rounded-full blur-[150px] opacity-5 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-volts-yellow rounded-full blur-[150px] opacity-5 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-volts-yellow/10 text-volts-yellow font-bold text-xs uppercase tracking-[0.2em] mb-4 border border-volts-yellow/20">
            Simulador Real
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Calculadora Solar de Precisão</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Algoritmo calibrado com dados climáticos de cada estado brasileiro. Descubra o potencial do seu telhado.
          </p>
        </div>

        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative border border-slate-800">
          
          {/* Left Side: Interactive Calculator */}
          <div className="lg:w-1/2 p-8 md:p-14 bg-slate-900 relative flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
             <div className="relative z-10 space-y-8">
                
                {/* Location Block */}
                <div className="bg-slate-800 p-4 rounded-xl shadow-inner border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                        <MapPin className="text-volts-yellow w-5 h-5 shrink-0" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Localização do Imóvel</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <select 
                                name="state" 
                                value={formData.state} 
                                onChange={handleInputChange}
                                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white font-bold focus:ring-2 focus:ring-volts-yellow focus:border-transparent outline-none appearance-none"
                            >
                                <option value="" disabled>UF</option>
                                {states.map(s => (
                                    <option key={s.uf} value={s.uf}>{s.uf}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-2">
                            <input 
                                type="text" 
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="Cidade"
                                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white font-bold placeholder-slate-500 focus:ring-2 focus:ring-volts-yellow focus:border-transparent outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Bill Amount Input Block */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-white text-xs font-bold uppercase tracking-widest">Valor da Conta (R$)</label>
                        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 shadow-sm">
                            <span className="text-slate-400 font-medium">R$</span>
                            <input 
                                type="number"
                                name="billAmount"
                                value={formData.billAmount}
                                onChange={handleInputChange}
                                className="w-24 text-right font-bold text-white outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    
                    <input 
                      type="range" 
                      min="200" 
                      max="5000" 
                      step="50"
                      value={billAmountNum}
                      onChange={handleSliderChange}
                      className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-volts-yellow"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                      <span>R$ 200</span>
                      <span>R$ 5.000+</span>
                    </div>
                </div>

                {/* Technical Results Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col justify-between group hover:border-volts-yellow/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <LayoutGrid className="w-4 h-4 text-volts-yellow" />
                            Painéis
                        </div>
                        <div className="text-2xl font-bold text-white">
                            ~{numberOfPanels} <span className="text-sm font-normal text-slate-500">unid.</span>
                        </div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col justify-between group hover:border-volts-yellow/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <Sun className="w-4 h-4 text-volts-yellow" />
                            Potência
                        </div>
                        <div className="text-2xl font-bold text-white">
                            {systemSizeKWp.toFixed(1)} <span className="text-sm font-normal text-slate-500">kWp</span>
                        </div>
                    </div>
                </div>

                {/* Financial Results */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-volts-yellow/10 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
                   
                   <div className="relative z-10">
                      <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">
                          Economia Estimada ({viewMode === 'monthly' ? 'Mensal' : 'Anual'})
                      </p>
                      <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                              R$ {displaySavings.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                          </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button 
                            onClick={() => setViewMode('monthly')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${viewMode === 'monthly' ? 'bg-volts-yellow text-black' : 'bg-slate-700 text-slate-400 hover:text-white'}`}
                        >
                            Mensal
                        </button>
                        <button 
                            onClick={() => setViewMode('annual')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${viewMode === 'annual' ? 'bg-volts-yellow text-black' : 'bg-slate-700 text-slate-400 hover:text-white'}`}
                        >
                            Anual
                        </button>
                      </div>
                   </div>
                </div>

             </div>
          </div>

          {/* Right Side: Lead Form (Dark Card) */}
          <div className="lg:w-1/2 p-8 md:p-14 bg-slate-800/50 flex flex-col justify-center relative">
            
            {/* Urgency Badge */}
            <div className="absolute top-4 right-4 bg-volts-yellow text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-volts-yellow/20 flex items-center gap-1">
                <FileText size={12} />
                Orçamento Técnico
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Solicitar Proposta</h3>
            <p className="text-slate-400 mb-8 font-light">Envie os dados da simulação acima para nossos engenheiros e receba o projeto detalhado.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-wider">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-volts-yellow focus:border-volts-yellow outline-none transition-all text-white placeholder-slate-600 hover:border-slate-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-wider">Seu WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="(DDD) 99999-9999"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-volts-yellow focus:border-volts-yellow outline-none transition-all text-white placeholder-slate-600 hover:border-slate-600"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-volts-yellow hover:bg-white text-black hover:text-black font-bold py-5 rounded-xl shadow-[0_0_20px_rgba(255,214,0,0.3)] hover:shadow-[0_0_30px_rgba(255,214,0,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
              >
                <span>RECEBER ESTUDO COMPLETO</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-start gap-3 p-4 bg-slate-900 rounded-lg border border-slate-700">
                <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sem spam. Seus dados são usados apenas para compor o pré-dimensionamento do sistema solar.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;