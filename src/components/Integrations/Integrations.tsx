import React, { useState } from 'react';

const Integrations = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'sap',
      name: 'SAP ERP',
      color: '#008fd3',
      icon: '/sap-logo.png',
      desc: 'Sincronización bidireccional en tiempo real de inventario, facturación y catálogo de clientes sin pérdidas transaccionales.',
      flow: 'API REST'
    },
    {
      id: 'shopify',
      name: 'Shopify API',
      color: '#95bf47',
      icon: '/shopify.svg',
      desc: 'Captura automatizada de órdenes, actualización instantánea de stock y recuperación de carritos de compra.',
      flow: 'GraphQL'
    },
    {
      id: 'slack',
      name: 'Slack Notify',
      color: '#e01e5a',
      icon: '/slack-logo.png',
      desc: 'Alertas en canales corporativos sobre eventos críticos de operación, ventas concretadas y validaciones del ERP.',
      flow: 'Webhooks - Workflow'
    },
    {
      id: 'Middleware',
      name: 'Middleware',
      color: '#ff9900',
      icon: '/integration.png',
      desc: 'Orquestación de microservicios para garantizar alta disponibilidad y proveer integraciones externas.',
      flow: 'API REST - GraphQL - Webhooks'
    }
  ];

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden" id="integrations">
      {/* Grid Background Effect para estética corporativa y tecnológica */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[11px] font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono flex items-center justify-center gap-2">
            <span className="w-3 h-[1px] bg-brand-teal"></span>
            Arquitectura Descentralizada
            <span className="w-3 h-[1px] bg-brand-teal"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-6">
            Construimos Ecosistemas, no solo conexiones.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Eliminamos los silos de información y el código spaguetti. Posicionamos a <span className="text-white font-bold">Salesforce como tu Única Fuente de Verdad (SSOT)</span>, monitorizando, controlando y distribuyendo los datos operativos con total seguridad.
          </p>
        </div>

        {/* Ecosistema Interactivo */}
        <div className="relative max-w-5xl mx-auto">
          {/* Conduit Data Flow Backgrounds (Líneas que conectan fondo) */}
          <div className="hidden lg:block absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent -translate-y-1/2 z-0"></div>
          {/* Línea conectora vertical para Mobile */}
          <div className="block lg:hidden absolute top-[5%] bottom-[5%] left-[50%] w-[1px] bg-gradient-to-b from-transparent via-brand-teal/50 to-transparent -translate-x-1/2 z-0"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative z-10">

            {/* Lado Izquierdo (Data Sources: SAP, Shopify) */}
            <div className="flex flex-col gap-8 lg:gap-16 w-full lg:w-[32%] z-10">
              {nodes.slice(0, 2).map((node) => (
                <div
                  key={node.id}
                  className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${activeNode && activeNode !== node.id ? 'opacity-40 scale-95' : 'opacity-100 scale-100 shadow-[0_0_20px_rgba(37,156,167,0.1)]'}`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/5 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                      {node.icon ? (
                        <img src={node.icon} alt={node.name} className="w-full h-full object-contain mix-blend-screen opacity-90" />
                      ) : (
                        <div className="w-6 h-6 rounded bg-gradient-to-tr from-orange-400 to-yellow-300"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{node.name}</h3>
                      <p className="text-brand-teal text-[9px] font-mono tracking-widest uppercase">Data Flow: {node.flow}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-google">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Nodo Central (Salesforce Core SSOT) */}
            <div
              className={`relative z-20 flex-shrink-0 transition-transform duration-500 my-8 lg:my-0 ${activeNode ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setActiveNode('salesforce')}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulsos radiales */}
              <div className="absolute inset-0 bg-brand-teal/20 rounded-full animate-ping opacity-50 scale-[1.3] pointer-events-none"></div>
              <div className="absolute inset-0 bg-brand-teal/10 rounded-full animate-pulse scale-[1.6] pointer-events-none"></div>

              <div className="w-56 h-56 lg:w-64 lg:h-64 bg-slate-900 rounded-full flex flex-col items-center justify-center border-2 border-brand-teal/50 shadow-[0_0_50px_rgba(37,156,167,0.4),inset_0_0_30px_rgba(37,156,167,0.2)] relative z-10 cursor-pointer group overflow-hidden">

                {/* Anillos giratorios */}
                <div className="absolute inset-2 rounded-full border border-brand-teal/20 animate-[spin_10s_linear_infinite] border-t-brand-teal/80 border-r-transparent group-hover:border-t-[#00a1e0]"></div>
                <div className="absolute inset-6 rounded-full border border-brand-teal/20 animate-[spin_15s_linear_infinite_reverse] border-b-brand-teal border-l-transparent"></div>

                <div className="flex flex-col items-center justify-center relative z-10">
                  <div className="bg-white p-3 rounded-xl mb-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
                    <img src="/salesforce-logo.png" className="w-16 lg:w-20 object-contain" alt="Salesforce Core" />
                  </div>
                  <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-[#00a1e0] transition-colors">SALESFORCE</span>
                  <span className="text-[10px] text-brand-teal font-mono tracking-[0.15em] uppercase px-3 py-1 bg-brand-teal/10 rounded-full mt-2">Core (SSOT)</span>
                </div>
              </div>
            </div>

            {/* Lado Derecho (Outputs / Alertas: Slack, Datasets) */}
            <div className="flex flex-col gap-8 lg:gap-16 w-full lg:w-[32%] z-10">
              {nodes.slice(2, 4).map((node) => (
                <div
                  key={node.id}
                  className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${activeNode && activeNode !== node.id ? 'opacity-40 scale-95' : 'opacity-100 scale-100 shadow-[0_0_20px_rgba(37,156,167,0.1)]'}`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/5 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                      {node.icon ? (
                        <img src={node.icon} alt={node.name} className="w-full h-full object-contain mix-blend-screen opacity-90" />
                      ) : (
                        <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center relative overflow-hidden">
                          <span className="text-white text-[8px] font-bold font-mono z-10">Middleware</span>
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{node.name}</h3>
                      <p className="text-brand-teal text-[9px] font-mono tracking-widest uppercase">Data Flow: {node.flow}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-google">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Información dinámica de Interacción (Solo Desktop/Tablets grandes) */}
          <div className="hidden lg:flex mt-16 text-center max-w-2xl mx-auto h-24 flex-col justify-center border border-white/5 bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            {activeNode === 'salesforce' ? (
              <p className="text-slate-300 text-sm font-google">
                <strong className="text-white">Salesforce</strong> actúa como el cerebro central. Monitoriza cada transacción transnacional, orquesta las reglas de negocio y garantiza la integridad de los datos antes de emitirlos al resto de plataformas.
              </p>
            ) : activeNode === 'sap' ? (
              <p className="text-slate-300 text-sm font-google">
                El flujo bidireccional mediante APIs custom asegura que las facturas y el inventario en <strong className="text-white">SAP</strong> cuadren a la perfección con los leads y los cierres de cuenta registrados en el CRM.
              </p>
            ) : activeNode === 'shopify' ? (
              <p className="text-slate-300 text-sm font-google">
                Un webhook de alto rendimiento empuja en milisegundos las nuevas órdenes desde <strong className="text-white">Shopify</strong> directo a Salesforce para que Marketing y Ventas retengan al cliente sin fricciones.
              </p>
            ) : activeNode === 'slack' ? (
              <p className="text-slate-300 text-sm font-google">
                Usando webhooks programados de Salesforce, el bot de <strong className="text-white">Slack</strong> avisa en tiempo real a los directores cuando una integración grande con clientes top es completada o requiere atención.
              </p>
            ) : activeNode === 'Middleware' ? (
              <p className="text-slate-300 text-sm font-google">
                El <strong className="text-white">Middleware</strong> actúa como un puente seguro y escalable entre Salesforce y los sistemas externos. Orquesta las reglas de negocio, garantiza la integridad de los datos y provee integraciones externas.
              </p>
            ) : (
              <p className="text-brand-teal text-sm font-mono animate-pulse">
                &lt; Posiciona el cursor sobre cada nodo para visualizar el flujo de integración /&gt;
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Integrations;
