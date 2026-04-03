import React, { useState, useEffect } from 'react';

const Automations = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-ciclar la demostración del flujo
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden" id="automations">
      {/* Luces volumétricas de fondo */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#e01e5a]/10 rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Izquierdo: Copywriting */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <p className="text-[11px] font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono flex items-center gap-3">
            <span className="w-6 h-[1px] bg-brand-teal"></span>
            Automatización Low-Code
          </p>
          <h2 className="text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-6 leading-[1.1]">
            Flujos de Trabajo que Evolucionan Contigo.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6 font-google">
            Aceleramos tu operativa sin depender masivamente de desarrollos con código duro. Implementamos arquitecturas ágiles mediante <strong className="text-white">Salesforce Flow Builder</strong>, trasladando lógica de negocio súper compleja a flujos visuales inquebrantables.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 font-google">
            Acercamos la operación a tus equipos mediante <strong className="text-white">Slack Workflows</strong>. Acciona inventarios, registros y valida procesos desde tus propios canales corporativos. Interfaces amigables en el front-end con un back-end robusto en Salesforce.
          </p>

          {/* Key Metrics / Features */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="border-l-2 border-brand-teal pl-4">
              <p className="text-2xl font-bold text-white font-mono">10x</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Velocidad de despliegue</p>
            </div>
            <div className="border-l-2 border-[#e01e5a]/70 pl-4">
              <p className="text-2xl font-bold text-white font-mono">Zero</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Fricción Operativa</p>
            </div>
            <div className="border-l-2 border-[#00a1e0]/70 pl-4">
              <p className="text-2xl font-bold text-white font-mono">SSOT</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Sincronización Total</p>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Interfaz Visual Interactiva */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-[#0c111c] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            
            {/* Header del Mockup */}
            <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between backdrop-blur-sm relative z-20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">Process.Runtime</span>
              <div className="w-6 h-6 border border-brand-teal/30 rounded-full flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${activeStep === 2 ? 'bg-brand-teal animate-pulse' : 'bg-slate-700'}`}></div>
              </div>
            </div>

            {/* Grid del FlowBuilder */}
            <div className="flex-1 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] p-8 relative flex flex-col items-center justify-between">
              
              {/* Conector maestro (Línea de fondo) */}
              <div className="absolute top-[30%] bottom-[20%] left-1/2 w-1 border-l-2 border-dashed border-slate-700 -translate-x-1/2 z-0"></div>
              
              {/* Partículas animadas en el conector basada en el step activo */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 rounded-full bg-brand-teal/80 blur-[4px] shadow-[0_0_15px_#259ca7] transition-all duration-700 ease-in-out z-0" 
                style={{ 
                  top: activeStep === 0 ? '15%' : activeStep === 1 ? '45%' : '80%',
                  height: '40px',
                  opacity: 0.8
                }}>
              </div>

              {/* NODE 1: Slack Input */}
              <div className={`relative z-10 w-full bg-white/5 border backdrop-blur-md rounded-xl p-4 transition-all duration-500 shadow-xl ${activeStep === 0 ? 'border-[#e01e5a] shadow-[0_0_20px_rgba(224,30,90,0.15)] scale-105' : 'border-white/10 opacity-70 grayscale-[50%]'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#e01e5a]/10 flex items-center justify-center">
                    <img src="/slack-logo.png" className="w-5 h-5 object-contain" alt="Slack" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold leading-none mb-1">Slack Workflow</p>
                    <p className="text-slate-400 text-[9px] font-mono uppercase">Activador de evento</p>
                  </div>
                </div>
                <div className="bg-black/30 rounded border border-white/5 p-2 flex flex-col gap-1">
                  <p className="text-[10px] text-slate-300 font-google">Operario escanea códigos SKU con terminal Zebra...</p>
                  <p className="text-[9px] text-[#e01e5a] font-mono mt-1">&gt; Enviar carga a Salesforce</p>
                </div>
              </div>

              {/* Tubería Decorativa de Webhook */}
              <div className="h-6 w-px border-l border-brand-teal/30 z-10 my-1"></div>

              {/* NODE 2: Lógica Intermedia (Validation) */}
              <div className={`relative z-10 w-4/5 bg-slate-900 border rounded-full py-3 px-6 transition-all duration-500 shadow-lg flex items-center justify-between ${activeStep === 1 ? 'border-brand-teal shadow-[0_0_20px_rgba(37,156,167,0.2)] scale-110' : 'border-white/10 opacity-60'}`}>
                <span className="text-[10px] font-mono text-white tracking-widest">WEBHOOK.SYNC()</span>
                <span className={`flex w-2.5 h-2.5 rounded-full ${activeStep === 1 ? 'bg-brand-teal animate-ping' : 'bg-slate-700'}`}></span>
              </div>

              {/* Tubería Decorativa de Pipeline */}
              <div className="h-6 w-px border-l border-brand-teal/30 z-10 my-1"></div>

              {/* NODE 3: Salesforce Flow Logic */}
              <div className={`relative z-10 w-full bg-white/5 border backdrop-blur-md rounded-xl p-4 transition-all duration-500 shadow-xl ${activeStep === 2 ? 'border-[#00a1e0] shadow-[0_0_25px_rgba(0,161,224,0.15)] scale-105' : 'border-white/10 opacity-70 grayscale-[50%]'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-white flex items-center justify-center overflow-hidden">
                    <img src="/salesforce-logo.png" className="w-[120%] object-contain" alt="Salesforce" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold leading-none mb-1">Salesforce Flow Builder</p>
                    <p className="text-slate-400 text-[9px] font-mono uppercase">Back-end Execution</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-black/40 rounded border border-[#00a1e0]/20 p-2 flex items-center justify-between">
                    <span className="text-[9px] text-[#00a1e0] font-mono">Create Record</span>
                    <span className="text-[8px] text-white">Inventario_Scan__c</span>
                  </div>
                  <div className="bg-black/40 rounded border border-[#00a1e0]/20 p-2 flex items-center justify-between">
                    <span className="text-[9px] text-[#00a1e0] font-mono">Related Map</span>
                    <span className="text-[8px] text-white">SKU &gt; Producto</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Automations;
