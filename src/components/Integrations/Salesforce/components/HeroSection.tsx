import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] bg-slate-50 overflow-hidden flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-200" id="salesforce-hero">

      {/* Elementos corporativos en background cruzado */}
      <div className="absolute top-0 right-0 w-[800px] h-full bg-[linear-gradient(to_left,rgba(0,161,224,0.03),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* Lado Izquierdo: Copy Corporativo de Alto Impacto */}
        <div className="flex flex-col items-start text-left xl:pr-8">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border-l-2 border-[#00a1e0] bg-white shadow-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a1e0] animate-pulse"></span>
            <span className="text-slate-600 text-[11px] font-mono font-bold tracking-widest uppercase">Expertise Global & Arquitectura</span>
          </div>

          <h1 className="text-5xl lg:text-6xl text-brand-black font-extrabold tracking-tight mb-8 leading-[1.1] font-sans">
            Desarrollamos Ecosistemas Inquebrantables sobre <span className="text-[#00a1e0]">Salesforce.</span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Más de una década de conocimientos corporativos destilados. Desde el diseño asíncrono con
            <strong className="text-brand-black mx-1">Platform Events</strong> y lógicas hiper-escalables en <strong className="text-brand-black mr-1">Apex</strong>,
            hasta arquitecturas <strong className="text-brand-black">SSOT</strong> (Single Source of Truth)
            que se integran nativamente con SAP, Oracle y Middleware globales. Convertimos el CRM líder en el verdadero núcleo de tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-black text-white font-bold text-[15px] hover:bg-[#00a1e0] transition-colors rounded shadow-lg shadow-brand-black/10 focus:outline-none">
              Auditar mi Infraestructura
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 text-slate-700 font-bold text-[15px] hover:bg-slate-100 hover:text-brand-black transition-colors rounded shadow-sm focus:outline-none">
              Ver Integraciones (APIs)
            </button>
          </div>

          {/* <div className="mt-12 flex items-center gap-6 opacity-60 grayscale">
            <img src="/salesforce-logo.png" className="h-10 object-contain" alt="Salesforce Partner Edge" />
            <span className="h-6 w-[1px] bg-slate-400"></span>
            <img src="/sap-logo.png" className="h-8 object-contain" alt="SAP API" />
            <span className="h-6 w-[1px] bg-slate-400"></span>
            <img src="/slack-logo.png" className="h-6 object-contain" alt="Slack Cloud" />
          </div> */}
        </div>

        {/* Lado Derecho: Tarjetas Tecnológicas (Integraciones de Inventario) */}
        <div className="relative w-full h-[550px] lg:h-[650px] rounded-2xl flex flex-col items-center justify-center p-6 lg:p-8">
          {/* Fondo Dark */}
          <div className="absolute inset-0 pointer-events-none"></div>

          <div className="w-full max-w-sm flex flex-col items-center relative z-10 space-y-4 lg:space-y-5">

            {/* Tag Central */}
            <div className="mb-2 px-3 py-1 rounded-full backdrop-blur">
              <span className="text-brand-black font-mono text-[10px] tracking-widest uppercase">
                Arquitectura de Inventario
              </span>
            </div>

            {/* Salesforce Card */}
            <div className="w-full bg-slate-900 border-t-4 border-t-[#00a1e0] rounded-lg p-5 shadow-[0_20px_60px_rgba(0,161,224,0.15)] flex flex-col gap-3 transition-colors relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center p-1.5 border border-white/10 group-hover:scale-110 transition-transform">
                    <img src="/salesforce-logo.png" alt="Salesforce" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">Salesforce Core</h3>
                    <span className="text-[#00a1e0] text-[10px] font-mono tracking-widest uppercase">Maestro de Datos</span>
                  </div>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-slate-400 text-[13px] leading-relaxed">
                Núcleo central de datos (SSOT). Centraliza el stock global, orquesta órdenes y determina las reglas de negocio entre canales.
              </p>
            </div>

            {/* Connecting Line */}
            <div className="h-4 bg-gradient-to-b from-slate-700 to-slate-700 relative flex items-center justify-center">
              <svg className="absolute w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
            </div>

            {/* Shopify Card */}
            <div className="w-full bg-slate-900 border-t-4 border-t-green-400 rounded-lg p-5 shadow-lg flex flex-col gap-3 transition-colors group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-900/10 flex items-center justify-center p-2 border border-green-500/20 group-hover:scale-110 transition-transform">
                    <img src="/shopify.svg" alt="Shopify" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">Shopify</h3>
                    <span className="text-green-400 text-[10px] font-mono tracking-widest uppercase">E-Commerce</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[9px] text-slate-300 font-mono hidden sm:block">Tiempo-real</span>
                </div>
              </div>
              <p className="text-slate-400 text-[13px] leading-relaxed">
                Verifica stock en tiempo real contra Salesforce para prevenir quiebres de inventario corporativos.
              </p>
            </div>

            {/* Connecting Line */}
            <div className="h-4 bg-gradient-to-b from-slate-700 to-slate-700 relative flex items-center justify-center">
              <svg className="absolute w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
            </div>

            {/* SAP Card */}
            <div className="w-full bg-slate-900 border-t-4 border-t-blue-400 rounded-lg p-5 shadow-lg flex flex-col gap-3 transition-colors group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center p-1.5 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <img src="/sap-logo.png" alt="SAP" className="w-full h-full object-contain opacity-80" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">SAP Business One</h3>
                    <span className="text-blue-400 text-[10px] font-mono tracking-widest uppercase">ERP Backoffice</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-[9px] text-slate-300 font-mono hidden sm:block">Bodegas</span>
                </div>
              </div>
              <p className="text-slate-400 text-[13px] leading-relaxed">
                Sistema logístico base. Sincroniza movimientos de almacén mecánicos y actualizaciones masivas hacia Salesforce.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
