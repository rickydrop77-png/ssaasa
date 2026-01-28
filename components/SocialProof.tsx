import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const notifications = [
  { name: 'Ricardo S.', city: 'Valença, BA', action: 'acabou de simular economia', time: 'Agora' },
  { name: 'Ana Paula', city: 'Sto. Antônio de Jesus', action: 'agendou uma visita técnica', time: 'Há 2 min' },
  { name: 'Roberto M.', city: 'Nazaré, BA', action: 'reduziu a conta em 92%', time: 'Há 5 min' },
  { name: 'Carlos E.', city: 'Taperoá, BA', action: 'recebeu o projeto grátis', time: 'Há 12 min' },
];

const SocialProof: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => setIsVisible(true), 5000);

    const interval = setInterval(() => {
      setIsVisible(false); // Hide current
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setIsVisible(true); // Show next
      }, 500); // Wait for fade out
    }, 12000); // Change every 12 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const data = notifications[current];

  return (
    <div className={`fixed bottom-24 left-4 md:left-6 z-40 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl max-w-xs flex items-center gap-3 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-volts-yellow animate-[shimmer_12s_linear_infinite]" style={{width: '100%'}}></div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-slate-500 hover:text-slate-300"
        >
          <X size={12} />
        </button>

        <div className="bg-yellow-900/30 p-2 rounded-full shrink-0">
          <CheckCircle className="w-5 h-5 text-volts-yellow" />
        </div>
        
        <div>
          <p className="text-sm text-white font-bold">{data.name} <span className="text-xs font-normal text-slate-400">de {data.city}</span></p>
          <p className="text-xs text-slate-400">{data.action}</p>
          <p className="text-[10px] text-volts-yellow mt-1 font-bold uppercase">{data.time}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;