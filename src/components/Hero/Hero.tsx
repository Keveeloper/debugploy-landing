export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-84px)] mt-[84px] bg-white overflow-hidden flex items-center">

      {/* Abstract Background Elements */}
      {/* <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-teal-light/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl pointer-events-none"></div> */}

      <div className="mx-auto w-full max-w-7xl px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10 py-16 lg:py-0">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start text-left space-y-8">

          <h1 className="text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.05] tracking-[-0.04em]">
            Desbloquea el verdadero potencial de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-dark">Ecosistema Salesforce</span>
          </h1>

          <p className="text-lg lg:text-lg text-brand-gray-dark leading-relaxed max-w-lg font-medium">
            Diseñamos e implementamos arquitecturas robustas que conectan <strong className="text-brand-black font-extrabold">Salesforce, SAP, Slack y Shopify</strong>. Automatizando orgánicamente los flujos críticos de las empresas más innovadoras e importantes.
          </p>

          <div className="!mt-4 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto pt-4">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-black text-white font-bold text-lg shadow-xl shadow-brand-black/20 hover:bg-brand-teal hover:shadow-brand-teal/30 transition-all duration-300 hover:-translate-y-1">
              Agendar Consultoría
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-brand-black font-bold text-lg shadow-sm border-2 border-slate-100 hover:border-brand-teal hover:text-brand-teal transition-all duration-300 hover:-translate-y-1">
              Explorar Soluciones
            </button>
          </div>

          <div className="!mt-4 pt-10 w-full">
            <p className="text-xs font-bold text-brand-gray mb-6 uppercase tracking-widest">Tecnologías Core</p>
            <div className="flex flex-wrap items-center gap-6 lg:gap-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">

              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-teal-light/60 border border-brand-teal/20 text-brand-teal-dark font-bold text-[13px] tracking-wide uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </span>
                Salesforce
              </div>
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-teal-light/60 border border-brand-teal/20 text-brand-teal-dark font-bold text-[13px] tracking-wide uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </span>
                SAP
              </div>
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-teal-light/60 border border-brand-teal/20 text-brand-teal-dark font-bold text-[13px] tracking-wide uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </span>
                Slack
              </div>
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-teal-light/60 border border-brand-teal/20 text-brand-teal-dark font-bold text-[13px] tracking-wide uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </span>
                Shopify
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery & Floating Components */}
        <div className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center">

          {/* Main Artifact Image (from build) */}
          <div className="relative w-[320px] lg:w-[480px] z-10">
            <img
              src="/cyborg-girl.webp"
              alt="Pre-colombian Abstract Golden Raft Tech Integration"
              className="w-full h-auto object-contain scale-[1.1] lg:scale-125"
            />
          </div>

          {/* Holograma 1: Pantalla Tecnológica (Salesforce) Mirrored (Glass/HUD mode) */}
          <div className="absolute top-[10%] lg:top-[12%] left-0 lg:-left-20 z-20 animate-float">
            <div className="scale-[0.55] sm:scale-75 lg:scale-100 origin-top-left transition-transform">
              <div
                className="w-[250px] bg-[#00a1e0]/[0.02] backdrop-blur-[2px] p-4 border-[0.5px] border-[#00a1e0]/50 shadow-[0_0_15px_rgba(0,161,224,0.15),inset_0_0_15px_rgba(0,161,224,0.1)] flex flex-col gap-3 overflow-hidden rounded-[2px]"
                style={{ transform: "perspective(1000px) rotateY(165deg) rotateX(8deg)" }}
              >
              {/* Esquinas HUD abstractas */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00a1e0]/80"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00a1e0]/80"></div>

              {/* Efecto de scanline holográfico muy sutil */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,161,224,0.1)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none opacity-30"></div>

              <div className="flex items-center justify-between relative z-10 pb-2">
                <div className="flex items-center gap-2">
                  <img src="/salesforce-logo.png" alt="Salesforce Logo" className="w-12 h-12 object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_3px_#00a1e0]" />
                  <span className="text-[11px] font-mono font-bold text-[#00a1e0] tracking-widest drop-shadow-[0_0_5px_#00a1e0] uppercase">SALESFORCE_CRM</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="w-5 h-[1px] bg-[#00a1e0]/70"></span>
                  <span className="w-3 h-[1px] bg-[#00a1e0]/70 self-end"></span>
                </div>
              </div>

              <div className="flex gap-3 relative z-10 mt-1">
                {/* Gráfica de Barras brillosa */}
                <div className="flex-1 flex items-end gap-1.5 h-16 border-b border-[#00a1e0]/40 pb-1">
                  <div className="w-full bg-[#00a1e0]/50 h-[40%] shadow-[0_0_8px_rgba(0,161,224,0.5)] border-t border-[#00a1e0]"></div>
                  <div className="w-full bg-[#00a1e0]/30 h-[75%] shadow-[0_0_8px_rgba(0,161,224,0.3)] border-t border-[#00a1e0]/70"></div>
                  <div className="w-full bg-[#00a1e0]/80 h-[100%] shadow-[0_0_12px_rgba(0,161,224,0.8)] border-t-[2px] border-white"></div>
                  <div className="w-full bg-[#00a1e0]/40 h-[50%] shadow-[0_0_8px_rgba(0,161,224,0.4)] border-t border-[#00a1e0]"></div>
                </div>
                <div className="flex flex-col justify-end text-[8px] font-mono text-[#00a1e0]/90 leading-snug drop-shadow-[0_0_3px_#00a1e0]">
                  <span>MAX:99%</span>
                  <span>MIN:84%</span>
                  <span>ACT:95%</span>
                </div>
              </div>

              <div className="relative z-10 text-[7px] font-mono text-[#00a1e0]/60 break-all mt-1 flex justify-between">
                <span>01010111 01001101</span>
                <span className="text-[#00a1e0] drop-shadow-md">STS: OK</span>
              </div>
            </div>
            </div>
          </div>

          {/* Holograma 2: Pantalla Tecnológica (SAP) Mirrored (Glass/HUD mode) */}
          <div className="absolute bottom-[10%] right-0 lg:-right-20 z-20 animate-float-delayed">
            <div className="scale-[0.55] sm:scale-75 lg:scale-100 origin-bottom-right transition-transform">
              <div
                className="w-[250px] bg-[#008fd3]/[0.02] backdrop-blur-[2px] p-4 border-[0.5px] border-[#008fd3]/50 shadow-[0_0_15px_rgba(0,143,211,0.15),inset_0_0_15px_rgba(0,143,211,0.1)] flex flex-col gap-3 overflow-hidden rounded-[2px]"
                style={{ transform: "perspective(1000px) rotateY(195deg) rotateX(5deg) rotateZ(2deg)" }}
              >
              {/* Esquinas HUD abstractas */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#008fd3]/80"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#008fd3]/80"></div>

              {/* Efecto de scanline holográfico sutil */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,143,211,0.1)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none opacity-30"></div>

              <div className="flex items-center justify-between relative z-10 pb-2">
                <div className="flex items-center gap-2">
                  <img src="/sap-logo.png" alt="SAP Logo" className="w-12 h-12 object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_3px_#008fd3]" />
                  <span className="text-[11px] font-mono font-bold text-[#008fd3] tracking-widest drop-shadow-[0_0_5px_#008fd3] uppercase">SAP_BUSINESS_ONE</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-[#008fd3] flex items-center justify-center p-1.5"><span className="w-1 h-1 bg-[#008fd3] rounded-full animate-ping"></span></span>
              </div>

              <div className="flex items-center gap-5 relative z-10 mt-1">
                {/* Gráfica de Pastel hueca y brillante */}
                <div className="w-14 h-14 rounded-full border-[2px] border-[#008fd3]/30 shadow-[0_0_15px_rgba(0,143,211,0.4)] relative flex items-center justify-center" style={{ background: "conic-gradient(rgba(0,143,211,0.9) 0% 75%, transparent 75% 100%)" }}>
                  <div className="w-10 h-10 bg-transparent backdrop-blur-md rounded-full border border-[#008fd3]/40"></div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[6px] text-[#008fd3]/70 font-mono tracking-wider">NODE ALPHA</span>
                    <div className="w-full h-[1.5px] bg-[#008fd3]/20 relative">
                      <div className="absolute top-0 left-0 h-full w-[65%] bg-[#008fd3] shadow-[0_0_6px_#008fd3]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[6px] text-[#008fd3]/70 font-mono tracking-wider">NODE BETA</span>
                    <div className="w-full h-[1.5px] bg-[#008fd3]/20 relative">
                      <div className="absolute top-0 left-0 h-full w-[40%] bg-[#008fd3]/70 shadow-[0_0_4px_#008fd3]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[6px] text-[#008fd3]/70 font-mono tracking-wider">NODE GAMMA</span>
                    <div className="w-full h-[1.5px] bg-[#008fd3]/20 relative">
                      <div className="absolute top-0 left-0 h-full w-[85%] bg-[#008fd3] shadow-[0_0_6px_#008fd3]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-[7px] font-mono text-[#008fd3]/60 break-all mt-1 text-right drop-shadow-md">
                SYS_REQ: OPTIMAL
              </div>
            </div>
            </div>
          </div>

          {/* Holograma 3: Pantalla Tecnológica (Shopify) Mirrored (Glass/HUD mode) */}
          <div className="absolute top-[2%] lg:top-[5%] right-4 lg:-right-[100px] z-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="scale-[0.55] sm:scale-75 lg:scale-100 origin-top-right transition-transform">
              <div
                className="w-[230px] bg-[#95bf47]/[0.02] backdrop-blur-[2px] p-4 border-[0.5px] border-[#95bf47]/50 shadow-[0_0_15px_rgba(149,191,71,0.15),inset_0_0_15px_rgba(149,191,71,0.1)] flex flex-col gap-2 overflow-hidden rounded-[2px]"
                style={{ transform: "perspective(1000px) rotateY(200deg) rotateX(-8deg)" }}
              >
              {/* Esquinas HUD abstractas */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#95bf47]/80"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#95bf47]/80"></div>

              {/* Efecto de scanline holográfico sutil */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(149,191,71,0.1)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none opacity-30"></div>

              <div className="flex items-center justify-between relative z-10 pb-2 border-b border-[#95bf47]/30">
                <div className="flex items-center gap-2">
                  <img src="/shopify.svg" alt="Shopify Logo" className="w-10 h-10 object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_3px_#95bf47]" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono font-bold text-[#95bf47] tracking-widest drop-shadow-[0_0_5px_#95bf47] uppercase leading-none">SHOPIFY</span>
                    <span className="text-[6px] font-mono text-[#95bf47]/70 uppercase mt-0.5">Live Transactions</span>
                  </div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#95bf47] animate-ping shadow-[0_0_8px_#95bf47]"></span>
              </div>

              <div className="flex flex-col gap-1.5 relative z-10 mt-1">
                <div className="flex justify-between items-center text-[7px] text-[#95bf47]/60 font-mono pb-0.5">
                  <span>ORDER_ID</span><span>STATUS</span><span>AMT</span>
                </div>
                <div className="flex justify-between items-center text-[7.5px] text-[#95bf47]/90 font-mono">
                  <span>#SP-9912</span><span className="drop-shadow-[0_0_3px_#95bf47]">FULLFILLED</span><span>$140.00</span>
                </div>
                <div className="flex justify-between items-center text-[7.5px] text-[#95bf47]/90 font-mono">
                  <span>#SP-9913</span><span className="drop-shadow-[0_0_3px_#95bf47]">PAID</span><span>$85.50</span>
                </div>
                <div className="flex justify-between items-center text-[7.5px] text-[#95bf47]/90 font-mono">
                  <span>#SP-9914</span><span className="drop-shadow-[0_0_3px_#95bf47]">PROCESSING</span><span>$210.00</span>
                </div>
              </div>

              <div className="mt-2 relative z-10 border-t border-[#95bf47]/20 pt-2">
                <div className="w-full h-[2px] bg-[#95bf47]/30 relative rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[88%] bg-[#95bf47] shadow-[0_0_8px_#95bf47]"></div>
                </div>
                <div className="text-[6px] font-mono text-[#95bf47]/70 text-right mt-1 drop-shadow-md">TGT VOLUME: 88%</div>
              </div>
            </div>
            </div>
          </div>

          {/* Holograma 4: Pantalla Tecnológica (Slack) Mirrored (Glass/HUD mode) */}
          <div className="absolute bottom-[2%] lg:bottom-[8%] left-2 lg:-left-[90px] z-20 animate-float-delayed" style={{ animationDelay: '2.5s' }}>
            <div className="scale-[0.55] sm:scale-75 lg:scale-100 origin-bottom-left transition-transform">
              <div
                className="w-[240px] bg-[#e01e5a]/[0.02] backdrop-blur-[2px] p-4 border-[0.5px] border-[#e01e5a]/50 shadow-[0_0_15px_rgba(224,30,90,0.15),inset_0_0_15px_rgba(224,30,90,0.1)] flex flex-col gap-2 overflow-hidden rounded-[2px]"
                style={{ transform: "perspective(1000px) rotateY(150deg) rotateX(5deg)" }}
              >
              {/* Esquinas HUD abstractas */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#e01e5a]/80"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#e01e5a]/80"></div>

              {/* Efecto de scanline holográfico sutil */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(224,30,90,0.1)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none opacity-30"></div>

              <div className="flex items-center justify-between relative z-10 pb-2 border-b border-[#e01e5a]/30">
                <div className="flex items-center gap-2">
                  <img src="/slack-logo.png" alt="Slack Logo" className="w-8 h-8 object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_3px_#e01e5a]" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono font-bold text-[#e01e5a] tracking-widest drop-shadow-[0_0_5px_#e01e5a] uppercase leading-none">SLACK</span>
                    <span className="text-[6px] font-mono text-[#e01e5a]/70 uppercase mt-0.5">Workflow Automation</span>
                  </div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e01e5a] animate-pulse shadow-[0_0_8px_#e01e5a]"></span>
              </div>

              {/* Chat Interface Flow */}
              <div className="flex flex-col gap-2 relative z-10 mt-1">
                {/* Message 1: Trigger */}
                <div className="flex flex-col gap-1 w-[95%]">
                  <span className="text-[6px] text-[#e01e5a]/60 font-mono">SYS_BOT [12:04:12]</span>
                  <div className="bg-[#e01e5a]/10 border border-[#e01e5a]/30 p-2 rounded-sm shadow-[0_0_5px_rgba(224,30,90,0.2)]">
                    <p className="text-[7.5px] font-mono text-[#e01e5a]/90 drop-shadow-[0_0_2px_#e01e5a]">🚨 ALERT: High order volume detected.</p>
                    <p className="text-[6.5px] font-mono text-[#e01e5a]/70 mt-1">Init: Shopify ➔ SAP Sync</p>
                  </div>
                </div>

                {/* Message 2: Result Workflow */}
                <div className="flex flex-col gap-1 w-[95%] self-end items-end">
                  <span className="text-[6px] text-[#e01e5a]/60 font-mono">[12:04:15] DEBUGPLOY_CORE</span>
                  <div className="bg-[#e01e5a]/20 border border-[#e01e5a]/50 p-2 rounded-sm shadow-[0_0_8px_rgba(224,30,90,0.4)] flex flex-col gap-1 w-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e01e5a] shadow-[0_0_5px_#e01e5a]"></div>
                    <p className="text-[8.5px] font-mono text-white drop-shadow-[0_0_3px_#e01e5a] pl-1 flex items-center">✓ SYNC SUCCESSFUL</p>
                    <div className="flex justify-between items-center text-[7px] font-mono pl-1 mt-0.5 text-[#e01e5a]/80">
                      <span>Records: 145</span>
                      <span>Latency: 12ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
