import React, { useState } from 'react';

interface Client {
  id: string;
  name: string;
  logo: string;
}

const clients: Client[] = [
  { id: 'johanna', name: 'Johanna Ortiz', logo: '/customers/jo-logo.png' },
  { id: 'impormedical', name: 'Impormedical', logo: '/customers/im-logo.png' },
  { id: 'siempre-salud', name: 'Siempre Salud', logo: '/customers/ss-logo.webp' },
  { id: 'transprensa', name: 'Transprensa', logo: '/customers/tp-logo.png' },
  { id: 'licorera', name: 'Licorera 3J', logo: 'https://www.licorera3jjjs.com/images/logo-3jjj.png' },
  { id: 'stanzia', name: 'Stanzia Home', logo: '/customers/sh-logo.png' },
];

const LogoCard = ({ client }: { client: Client }) => (
  <div className="group/card relative flex flex-col items-center justify-center flex-shrink-0 w-[190px] h-[110px] mx-3 rounded-2xl border border-slate-100 bg-white hover:border-brand-teal/30 hover:shadow-[0_0_24px_rgba(37,156,167,0.1)] transition-all duration-400 cursor-pointer select-none">
    <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-transparent group-hover/card:border-brand-teal/50 transition-colors duration-300" />
    <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-transparent group-hover/card:border-brand-teal/50 transition-colors duration-300" />

    <img
      src={client.logo}
      alt={client.name}
      className="h-10 w-auto max-w-[130px] object-contain grayscale opacity-45 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-400 transform group-hover/card:scale-105"
      draggable={false}
    />

    <span className="mt-2.5 text-[9px] font-mono font-bold tracking-[0.18em] uppercase text-brand-black/20 group-hover/card:text-brand-black/70 transition-colors duration-300">
      {client.name}
    </span>
  </div>
);

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless loop — keyframe moves exactly -50%
  const rowA = [...clients, ...clients];
  const rowB = [...clients].reverse().concat([...clients].reverse());

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="clients">

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,#259ca7_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-brand-teal/50" />
            Partners estratégicos
            <span className="w-8 h-[1px] bg-brand-teal/50" />
          </p>
          <h2 className="text-4xl lg:text-5xl text-brand-black font-extrabold tracking-tight mb-6">
            Confiado por líderes de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-dark">
              alto rendimiento.
            </span>
          </h2>
          <p className="text-brand-gray-dark text-lg leading-relaxed">
            Nuestra arquitectura impulsa operaciones complejas y escalables en empresas top del mercado, asegurando estabilidad y crecimiento.
          </p>
        </div>

        {/* Marquee wrapper */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Row 1 — moves left */}
          <div className="mb-4">
            <div
              className="inline-flex animate-marquee"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {rowA.map((client, i) => (
                <LogoCard key={`r1-${client.id}-${i}`} client={client} />
              ))}
            </div>
          </div>

          {/* Row 2 — moves right (counter-flow parallax) */}
          <div>
            <div
              className="inline-flex animate-marquee-reverse"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {rowB.map((client, i) => (
                <LogoCard key={`r2-${client.id}-${i}`} client={client} />
              ))}
            </div>
          </div>

          {/* Edge fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-28 lg:w-40 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-28 lg:w-40 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-teal/20 bg-brand-teal/[0.03]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal" />
            </span>
            <span className="text-xs font-mono font-bold text-brand-gray-dark uppercase tracking-wider">
              Operando arquitecturas de +50k USD / Año
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
