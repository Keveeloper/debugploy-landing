import React from 'react';

const Clients = () => {
  // Utilizamos los logos existentes en 'public' como placeholders, el usuario los cambiará luego.
  const clients = [
    { id: 'johanna', name: 'Johanna Ortiz', logo: '/customers/jo-logo.png' },
    { id: 'impormedical', name: 'Impormedical', logo: '/customers/im-logo.png' },
    { id: 'siempre-salud', name: 'Siempre Salud', logo: '/customers/ss-logo.webp' },
    { id: 'transprensa', name: 'Transprensa', logo: '/customers/tp-logo.png' },
    { id: 'licorera', name: 'Licorera 3J', logo: 'https://www.licorera3jjjs.com/images/logo-3jjj.png' },
    { id: 'stanzia', name: 'Stanzia Home', logo: '/customers/sh-logo.png' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="clients">

      {/* Elementos decorativos de fondo para dar un toque prestige */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,#259ca7_0%,transparent_70%)] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Título de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-brand-teal/50"></span>
            Partners estratégicos
            <span className="w-8 h-[1px] bg-brand-teal/50"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl text-brand-black font-extrabold tracking-tight mb-6">
            Confiado por líderes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-dark">alto rendimiento.</span>
          </h2>
          <p className="text-brand-gray-dark text-lg leading-relaxed">
            Nuestra arquitectura impulsa operaciones complejas y escalables en empresas top del mercado, asegurando estabilidad y crecimiento.
          </p>
        </div>

        {/* Grid de Clientes Prestigioso */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col items-center justify-center p-8 lg:p-12 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:border-brand-teal/20 transition-all duration-500 overflow-hidden cursor-pointer cursor-crosshair"
            >
              {/* Efecto de luz dinámica interna en hover */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

              {/* Esquinas tecnológicas prestigiadas */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-teal/0 group-hover:border-brand-teal/40 transition-colors duration-500"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-teal/0 group-hover:border-brand-teal/40 transition-colors duration-500"></div>

              {/* Logo y Nombre interactivo */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="h-12 lg:h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                />

                {/* Nombre de la empresa que se devela sutilmente */}
                <span className="text-[10px] text-brand-black/0 font-bold tracking-widest uppercase transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 group-hover:text-brand-black/80 font-mono">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cifra de prestigio anclada abajo */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-teal/20 bg-brand-teal/[0.03]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
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
