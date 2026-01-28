import React from 'react';
import { Sun, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-volts-navy text-slate-400 py-16 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-volts-yellow p-1.5 rounded-lg">
                <Sun className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Volts<span className="text-volts-yellow">Solar</span></span>
            </div>
            <p className="max-w-xs text-slate-400 mb-6">
              Energia limpa, economia real e tecnologia de ponta. Atendendo Santo Antônio de Jesus, Valença e toda região.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/voltsenergia_solar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-volts-yellow hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-volts-yellow hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-volts-yellow hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-slate-500">Tel:</span> 
                <a href="tel:+557588795454" className="text-white hover:text-volts-yellow cursor-pointer transition-colors">(75) 8879-5454</a>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-500">Email:</span> 
                <a href="mailto:voltsvalenca@gmail.com" className="text-white hover:text-volts-yellow cursor-pointer transition-colors">voltsvalenca@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-500">Insta:</span> 
                <a href="https://instagram.com/voltsenergia_solar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-volts-yellow cursor-pointer transition-colors">@voltsenergia_solar</a>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-500">Região:</span> 
                <span className="text-white">Valença, SAJ e Região - BA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Volts Energia Solar. Revenda Oficial Intelbras.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Termos</a>
             <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;