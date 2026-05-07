import React from 'react';

const capabilities = [
  {
    tag: 'Patterns',
    title: 'Trigger Handler Framework',
    accent: '#00a1e0',
    body: 'Separación total entre trigger y lógica de negocio. Un handler por SObject, recursion control nativo y 100% de test coverage usando clase base TriggerHandler extensible. Nunca un trigger con lógica directa.',
    chips: ['TriggerHandler', 'Recursion Guard', 'DML Context Aware'],
  },
  {
    tag: 'Async',
    title: 'Batch / Queueable / Schedulable',
    accent: '#34d399',
    body: 'Procesamiento asíncrono de largo aliento: Batch con scope configurable hasta 2000, Queueable con chaining dinámico hasta 50 jobs en cadena, y Schedulable con expresiones CRON ajustables en producción sin deploy.',
    chips: ['Database.Batchable', 'Queueable', 'Schedulable'],
  },
  {
    tag: 'HTTP',
    title: 'HTTP Callouts & Mock Testing',
    accent: '#a78bfa',
    body: 'Named Credentials para credenciales cifradas fuera del código, callouts REST y SOAP con manejo de status codes, retry pattern sobre Queueable y HttpCalloutMock obligatorio en cada test. Zero hardcoded endpoints.',
    chips: ['Named Credentials', 'HttpCalloutMock', 'REST / SOAP'],
  },
  {
    tag: 'UI',
    title: 'Lightning Web Components',
    accent: '#fbbf24',
    body: '@wire adapters conectados a Apex controllers, reactive properties con @track y @api, custom events tipados entre componentes padre-hijo y SLDS como sistema de diseño. Migración completa desde Aura Components legados.',
    chips: ['@wire / @api', 'Custom Events', 'SLDS System'],
  },
  {
    tag: 'Events',
    title: 'Platform Events & CDC',
    accent: '#f472b6',
    body: 'Arquitectura event-driven usando Platform Events como bus de mensajería asíncrona entre sistemas. Change Data Capture para integraciones reactivas sin polling activo. Pub/Sub pattern nativo, desacoplado y resiliente.',
    chips: ['Platform Events', 'Change Data Capture', 'Pub/Sub'],
  },
  {
    tag: 'Limits',
    title: 'Bulkification & Governor Limits',
    accent: '#00a1e0',
    body: 'Todo el código diseñado desde cero para operar en lotes de 200+ registros. SOQL sobre colecciones, Maps para O(1) lookup, y cero SOQL-in-loops. Tests que aseguran Limits.getQueries() dentro de rango seguro.',
    chips: ['Bulk-Safe Code', 'SOQL Optimization', 'Limits API'],
  },
];

const stats = [
  { number: '+6', label: 'Años en el ecosistema' },
  { number: '+20', label: 'Orgs configuradas' },
  { number: '3+', label: 'Plataformas integradas' },
  { number: '100%', label: 'Test Coverage exigido' },
];

const Expertise = () => (
  <section className="py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-[10px] font-bold text-[#00a1e0] tracking-[0.2em] uppercase mb-4 font-mono flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-[#00a1e0]/40" />
          Stack Técnico
          <span className="w-8 h-[1px] bg-[#00a1e0]/40" />
        </p>
        <h2 className="text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-6 leading-tight">
          Dominio profundo de <span className="text-[#00a1e0]">cada capa</span> del ecosistema.
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          No implementamos funcionalidades. Arquitectamos soluciones. Cada decisión técnica está respaldada por el Salesforce Well-Architected Framework y años de producción real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-20 h-[2px] opacity-60 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
              style={{ background: `linear-gradient(to right, ${cap.accent}, transparent)` }}
            />

            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest uppercase"
                style={{ color: cap.accent, backgroundColor: `${cap.accent}18` }}
              >
                {cap.tag}
              </span>
            </div>

            <h3 className="text-white font-bold text-[15px] mb-3">{cap.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{cap.body}</p>

            <div className="flex flex-wrap gap-1.5">
              {cap.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold text-slate-500 bg-slate-900"
                  style={{ borderLeft: `2px solid ${cap.accent}50` }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center py-6 px-4 rounded-xl bg-slate-800/30 border border-slate-700/40">
            <span className="text-3xl font-extrabold text-[#00a1e0] mb-1 font-mono">{s.number}</span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 text-center">{s.label}</span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Expertise;
