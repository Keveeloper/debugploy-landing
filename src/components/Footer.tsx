import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-8 relative overflow-hidden" id="footer">

      {/* Sutil resplandor de fondo para mantener el estilo tech corporativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Columna 1: Branding y Propuesta de Valor */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <a href="/" className="inline-block mb-6">
              <img src="/dbp-logo.png" alt="Logo de Debugploy" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Arquitectura de software de élite y ecosistemas de integración inquebrantables. Transformamos sistemas complejos y silos de datos en operaciones fluidas y altamente rentables.
            </p>

            {/* Badges de Confianza Corporativa */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-slate-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[9px] font-mono font-bold text-slate-700 tracking-widest uppercase">Enterprise SLA 99.99%</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-slate-200 shadow-sm">
                <span className="text-[9px] font-mono font-bold text-slate-700 tracking-widest uppercase flex items-center gap-1">
                  <svg className="w-3 h-3 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Datos Encriptados
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Soluciones */}
          <div className="flex flex-col">
            <h4 className="text-brand-black font-extrabold mb-6 tracking-wide">Soluciones</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#integrations" className="hover:text-brand-teal transition-colors">Integración de Sistemas (SSOT)</a></li>
              <li><a href="#automations" className="hover:text-brand-teal transition-colors">Automatización Low-Code</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Arquitectura Cloud</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Auditoría IT y Refactorización</a></li>
            </ul>
          </div>

          {/* Columna 3: Ecosistemas */}
          <div className="flex flex-col">
            <h4 className="text-brand-black font-extrabold mb-6 tracking-wide">Ecosistemas</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors flex items-center gap-2">Salesforce CRM</a></li>
              <li><a href="#" className="hover:text-[#008fd3] transition-colors flex items-center gap-2">SAP ERP / B1</a></li>
              <li><a href="#" className="hover:text-[#95bf47] transition-colors flex items-center gap-2">Shopify Plus API</a></li>
              <li><a href="#" className="hover:text-[#e01e5a] transition-colors flex items-center gap-2">Slack Workflows</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2">AWS Middleware</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="flex flex-col">
            <h4 className="text-brand-black font-extrabold mb-6 tracking-wide">Compañía</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Casos de Éxito (Portafolio)</a></li>
              <li>
                <a href="#contact" className="hover:text-brand-black transition-colors flex items-center gap-2 mt-4 text-brand-teal font-bold">
                  servicioalcliente@debugploy.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Debugploy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-brand-black transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-brand-black transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-black transition-colors">Seguridad de Datos</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
