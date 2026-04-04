import React from 'react';

const SuccessStory = () => {
  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
  );
};

export default SuccessStory;
