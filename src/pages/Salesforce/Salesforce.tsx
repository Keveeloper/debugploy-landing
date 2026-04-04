import React from 'react';

const Salesforce = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      
      {/* 1. HERO SECTION SALESFORCE */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#020617] overflow-hidden">
        {/* Glow de acento estilo Salesforce Blue */}
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

      {/* 2. EXPERTISE Y CERTIFICACIÓN */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl text-brand-black font-extrabold tracking-tight mb-6">
              Experticia técnica validada por la matriz.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              No hacemos implementaciones genéricas. Desarrollamos soluciones quirúrgicas amparadas por altos estándares globales y mejores prácticas exigidas por Trailhead y Salesforce Architects.
            </p>
            <div className="flex items-center gap-4 mt-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-fit inline-flex">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center p-2">
                 <img src="/salesforce-logo.png" alt="Salesforce" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase">Certificación Oficial</span>
                <span className="text-brand-black font-bold">Salesforce Administrator</span>
                <span className="text-xs text-brand-teal mt-0.5">Debugploy Team</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Gráfico representativo del ecosistema de expertise */}
            <div className="aspect-video bg-white rounded-2xl border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-slate-50 p-4 rounded-lg flex flex-col items-center text-center justify-center border border-slate-100">
                  <span className="text-[#00a1e0] font-extrabold text-3xl mb-1">+6</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Años Experiencia</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg flex flex-col items-center text-center justify-center border border-slate-100">
                   <span className="text-[#00a1e0] font-extrabold text-3xl mb-1">100%</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">SaaS & Low-Code</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CASO DE EXITO - INDUSTRIA MEDICA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono">
              Trajectory & Success
            </h3>
            <h2 className="text-4xl text-brand-black font-extrabold tracking-tight mb-6">
              Del caos del Excel a un Caso de Éxito Latam.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La transición técnica más agresiva y exitosa en la industria médica regional.
            </p>
          </div>

          {/* Split Block: Historia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual: Diagrama de Migración */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00a1e0]/5 blur-3xl -z-10 transition-all duration-500 group-hover:bg-[#00a1e0]/10"></div>
              <div className="bg-brand-black rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8 opacity-50">
                   <div className="px-3 py-1 bg-white/10 rounded font-mono text-[10px] text-white">Legacy: Excel & CGI</div>
                   <span className="text-[#00a1e0] animate-pulse">➔</span>
                   <div className="px-3 py-1 bg-[#00a1e0]/20 rounded font-mono text-[10px] text-[#00a1e0]">2026: Salesforce Core</div>
                </div>
                <p className="text-slate-300 font-mono text-sm leading-relaxed mb-6">
                  &gt; Analizando dependencias de datos...<br/>
                  &gt; Estructurando Objetos del Negocio...<br/>
                  &gt; Flujo orgánico completado al 100%.
                </p>
                <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-teal to-[#00a1e0] w-full relative">
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-white/20 animate-[ping_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto y Explicación */}
            <div className="flex flex-col gap-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                Nuestra historia de implementación corre desde el año **2020**. Tomamos el ecosistema operativo de una importante empresa del área médica que funcionaba enteramente bajo fragmentación de datos: procesos estancados en hojas de Excel desactualizadas y scripts rudimentarios en CGI.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ejecutamos una migración maestra desde cero. Hoy, en pleno 2026, la compañía logró evolucionar hasta centralizarse y **operar sus flujos críticos de información al 100% sobre el ecosistema nativo de Salesforce**.
              </p>
              
              <div className="mt-4 p-5 bg-[#00a1e0]/5 border border-[#00a1e0]/20 rounded-xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#00a1e0]"></div>
                 <p className="text-brand-black font-bold italic">
                   "Esta evolución los convirtió en un Caso de Éxito Oficial de Salesforce, reconocido como estándar operativo en toda Hispanoamérica y Latinoamérica."
                 </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Salesforce;
