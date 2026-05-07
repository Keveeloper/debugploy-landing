import React from 'react';

const timeline = [
  {
    year: '2020',
    phase: 'Discovery & Diagnóstico',
    color: '#ef4444',
    detail: 'Mapeamos el ecosistema en caos: 3 hojas de Excel desincronizadas entre sí, scripts CGI de 15 años activos en producción, y 0% de trazabilidad en el flujo de órdenes médicas críticas.',
  },
  {
    year: '2021',
    phase: 'Data Architecture',
    color: '#f59e0b',
    detail: 'Diseñamos el modelo de datos nativo de Salesforce: 14 Custom Objects, jerarquías de Account y Contact, relaciones lookup vs. master-detail, y plan de migración limpio desde el legacy.',
  },
  {
    year: '2022',
    phase: 'Core Implementation',
    color: '#00a1e0',
    detail: 'Implementamos Trigger Handler Framework, más de 30 automatizaciones en Flow Builder y cargamos 8 años de datos históricos con Data Loader CLI y validación cruzada campo a campo.',
  },
  {
    year: '2023',
    phase: 'Integration Layer',
    color: '#34d399',
    detail: 'Conectamos SAP Business One (batch nightly), Shopify (Platform Events real-time) y Slack (Queueable alerts). Tres plataformas orquestadas desde un único punto de verdad en Salesforce.',
  },
  {
    year: '2024',
    phase: 'Tuning & LWC Migration',
    color: '#a78bfa',
    detail: 'Refactoring completo de Aura Components a Lightning Web Components, optimización de SOQL queries con índices selectivos y cero Governor Limit exceptions en los logs de producción.',
  },
  {
    year: '2026',
    phase: 'Caso Oficial LatAm',
    color: '#00a1e0',
    detail: 'Elevado a Caso de Éxito Oficial Salesforce en Latinoamérica. El modelo operativo es citado como estándar de referencia para la industria médica en toda Hispanoamérica.',
  },
];

const metrics = [
  { value: '0', label: 'Hojas de Excel en operación' },
  { value: '−83%', label: 'Tiempo de proceso de órdenes' },
  { value: '3', label: 'Plataformas en tiempo real' },
  { value: '8 años', label: 'Datos migrados sin pérdida' },
];

const SuccessStory = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[10px] font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-brand-teal/50" />
          Caso de Éxito Real
          <span className="w-8 h-[1px] bg-brand-teal/50" />
        </p>
        <h2 className="text-4xl lg:text-5xl text-brand-black font-extrabold tracking-tight mb-6 leading-tight">
          De Excel a{' '}
          <span className="text-[#00a1e0]">Caso Oficial Salesforce</span>{' '}
          en LatAm.
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Seis años de transformación documentados. Una empresa médica, un ecosistema completamente reconstruido sobre Salesforce como sistema nervioso central.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

        {/* Timeline — 3 cols */}
        <div className="lg:col-span-3 relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent" />

          <div className="flex flex-col gap-0">
            {timeline.map((step, i) => (
              <div key={step.year} className={`relative flex gap-8 ${i < timeline.length - 1 ? 'pb-10' : ''}`}>
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md flex items-center justify-center z-10 relative"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-white font-mono font-extrabold text-[10px]">
                      {step.year.slice(2)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-[10px] font-mono font-bold tracking-widest uppercase"
                      style={{ color: step.color }}
                    >
                      {step.year}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">·</span>
                    <span className="text-[11px] font-bold text-brand-black">{step.phase}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: metrics + quote — 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-center">
                <div className="text-2xl font-extrabold text-[#00a1e0] mb-1.5 font-mono leading-none">{m.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Salesforce cert badge */}
          <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#00a1e0]/10 border border-[#00a1e0]/20 flex items-center justify-center flex-shrink-0 p-2">
              <img src="/salesforce-logo.png" alt="Salesforce" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="block text-[9px] text-[#00a1e0] font-mono font-bold tracking-widest uppercase mb-0.5">Certificación Oficial</span>
              <span className="block text-sm font-bold text-brand-black">Salesforce Administrator</span>
              <span className="block text-[11px] text-slate-500 mt-0.5">Debugploy Team · Trailhead Verified</span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative bg-brand-black rounded-xl p-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00a1e0]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(0,161,224,0.1),transparent)] pointer-events-none" />
            <p className="text-white text-sm leading-relaxed italic relative z-10 mb-5">
              "Esta evolución convirtió a la empresa en un Caso de Éxito Oficial de Salesforce, reconocido como estándar operativo para la industria médica en toda Hispanoamérica."
            </p>
            <div className="flex items-center gap-2 relative z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a1e0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a1e0]" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Salesforce LatAm Case Study · 2026</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
);

export default SuccessStory;
