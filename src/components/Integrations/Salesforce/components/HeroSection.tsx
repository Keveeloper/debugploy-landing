import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a1e0]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00a1e0]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00a1e0]/30 bg-[#00a1e0]/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00a1e0] animate-pulse"></span>
          <span className="text-[#00a1e0] text-xs font-mono font-bold tracking-widest uppercase">Especialistas Ecosistema CRM</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl text-white font-extrabold tracking-tight mb-8 leading-tight font-google">
          Ingeniería sobre <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a1e0] to-blue-400">Salesforce CRM</span>
        </h1>

        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl font-google">
          Desplegamos arquitecturas corporativas inquebrantables. Llevamos las capacidades operativas de sus procesos institucionales a su punto máximo de rendimiento.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
