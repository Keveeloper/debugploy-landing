import React from 'react';

const Expertise = () => {
  return (
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
  );
};

export default Expertise;
