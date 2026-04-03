import React from 'react';

const Cta = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#030712] h-[800px] flex items-center justify-center" id="cta">
      
      {/* Fondo Profundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#259ca7_0%,transparent_60%)] opacity-10"></div>
      
      {/* UNIVERSO DE NODOS Y ÓRBITAS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
        
        {/* Órbita 1 (Cercana) */}
        <div 
          className="absolute w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] border border-brand-teal/20 rounded-full"
          style={{ animation: 'spin 20s linear infinite' }}
        >
          {/* Slack Node */}
          <div 
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center p-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            style={{ animation: 'spin 20s linear infinite reverse' }}
          >
             <img src="/slack-logo.png" className="w-full h-full object-contain opacity-80" alt="Slack" />
          </div>
          {/* Partícula de Datos */}
          <div className="absolute top-[80%] -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_12px_#259ca7] animate-pulse"></div>
        </div>

        {/* Órbita 2 (Media - Gira en reversa) */}
        <div 
          className="absolute w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] border border-[#00a1e0]/20 rounded-full"
          style={{ animation: 'spin 35s linear infinite reverse' }}
        >
           {/* Salesforce Node */}
           <div 
             className="absolute top-[15%] -left-3 w-12 h-12 rounded-full bg-[#00a1e0]/10 backdrop-blur-md border border-[#00a1e0]/40 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(0,161,224,0.3)]"
             style={{ animation: 'spin 35s linear infinite' }}
           >
             <img src="/salesforce-logo.png" className="w-full h-full object-contain opacity-90" alt="Salesforce" />
           </div>
           
           {/* SAP Node */}
           <div 
             className="absolute bottom-[20%] -right-3 w-12 h-12 rounded-full bg-[#008fd3]/10 backdrop-blur-md border border-[#008fd3]/40 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(0,143,211,0.3)]"
             style={{ animation: 'spin 35s linear infinite' }}
           >
             <img src="/sap-logo.png" className="w-full h-full object-contain opacity-90" alt="SAP" />
           </div>
           
           {/* Data Nodes */}
           <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 rounded-full bg-[#00a1e0] shadow-[0_0_15px_#00a1e0] animate-ping"></div>
           <div className="absolute -top-1.5 right-1/4 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]"></div>
        </div>

        {/* Órbita 3 (Lejana - Gira normal) */}
        <div 
          className="absolute w-[650px] h-[650px] lg:w-[1050px] lg:h-[1050px] border border-[#95bf47]/10 rounded-full"
          style={{ animation: 'spin 50s linear infinite' }}
        >
           {/* Shopify Node */}
           <div 
             className="absolute -top-5 left-[30%] w-14 h-14 rounded-full bg-[#95bf47]/10 backdrop-blur-md border border-[#95bf47]/30 flex items-center justify-center p-3 shadow-[0_0_25px_rgba(149,191,71,0.2)]"
             style={{ animation: 'spin 50s linear infinite reverse' }}
           >
             <img src="/shopify.svg" className="w-full h-full object-contain opacity-90" alt="Shopify" />
           </div>

           {/* Elemento de Código API */}
           <div 
             className="absolute top-1/2 -left-5 w-10 h-10 rounded-lg bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]"
             style={{ animation: 'spin 50s linear infinite reverse' }}
           >
             <span className="text-[9px] font-mono font-bold text-indigo-400">.JSON</span>
           </div>
           
           {/* Elemento Webhook/DB */}
           <div 
             className="absolute bottom-[10%] right-[15%] w-12 h-12 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]"
             style={{ animation: 'spin 50s linear infinite reverse' }}
           >
              <span className="text-[7px] font-mono font-bold text-orange-400">AWS</span>
           </div>
        </div>

        {/* Partículas libres simulando estrellas/endpoints */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white/40 rounded-full shadow-[0_0_5px_white] animate-pulse"></div>
        <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 bg-brand-teal/60 rounded-full shadow-[0_0_10px_#259ca7] animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-[70%] left-[25%] w-1 h-1 bg-white/30 rounded-full shadow-[0_0_5px_white]" style={{ animation: 'pulse 4s infinite' }}></div>
      </div>

      {/* PROTAGONISTA CTA (Centro del Universo) */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
        
        {/* Glow central debajo del título para realzar contraste */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-teal/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="bg-brand-teal/10 border border-brand-teal/30 px-4 py-1.5 rounded-full backdrop-blur-md mb-8 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
          <span className="text-brand-teal font-mono text-xs uppercase tracking-[0.2em] font-bold">Universo Operativo</span>
        </div>
        
        <h2 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 tracking-tight leading-[1.1] mb-8 drop-shadow-2xl font-google">
          Despliega tu Máximo Potencial.
        </h2>
        
        <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ya viste lo que logramos conectando lo imposible. ¿Estás listo para tener la arquitectura de software más robusta del mercado y escalar sin fricción?
        </p>

        {/* Botón Inmersivo y Super Tecnológico */}
        <div className="relative group cursor-pointer inline-block">
          {/* Anillos de expansión al hover para el botón */}
          <div className="absolute inset-0 rounded-full bg-brand-teal opacity-20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 ease-out"></div>
          <div className="absolute inset-0 rounded-full bg-brand-teal opacity-40 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500 ease-out delay-75"></div>
          
          <button className="relative z-10 px-10 py-5 bg-gradient-to-r from-brand-teal to-[#1a767f] text-white font-extrabold text-lg lg:text-xl rounded-full overflow-hidden shadow-[0_0_30px_rgba(37,156,167,0.5)] group-hover:shadow-[0_0_60px_rgba(37,156,167,0.8)] transition-all duration-300 transform group-hover:scale-105 border border-white/20">
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/30"></div>
            </div>
            INICIAR GESTIÓN DE ARQUITECTURA
          </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono tracking-widest text-slate-500 uppercase">
          <span className="flex items-center gap-1.5"><span className="text-brand-teal">✓</span> SSOT Guarantee</span>
          <span className="flex items-center gap-1.5"><span className="text-brand-teal">✓</span> Zero Code Spaghetti</span>
        </div>

      </div>

    </section>
  );
};

export default Cta;
