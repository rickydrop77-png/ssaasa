import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/d/1QD8RhwJUnZ7vIJ29RKkpuuJyZz0zjgHn",
      title: "Residencial Premium",
      subtitle: "Acabamento de alto padrão"
    },
    {
      src: "https://lh3.googleusercontent.com/d/1HUr9w35ecy1D2H1Olrtmq3xaUFKo5x3v",
      title: "Instalação Técnica",
      subtitle: "Segurança e conformidade"
    },
    {
      src: "https://lh3.googleusercontent.com/d/1ioZaAYEk43CT5KHdYSe1ztcBTY1_zeUh",
      title: "Projetos Reais",
      subtitle: "Centenas de famílias economizando"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 border border-slate-800">
            Galeria
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Obras Realizadas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Não usamos apenas imagens de banco de dados. Veja a qualidade real das nossas instalações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 border border-slate-800">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-bold text-volts-yellow uppercase tracking-wider mb-1">{img.subtitle}</p>
                <h3 className="text-xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;