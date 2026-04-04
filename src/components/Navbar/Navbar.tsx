import { useState } from 'react';
import { Link } from 'react-router-dom';

const MENU_DATA = [
  {
    title: 'Integraciones',
    options: [
      { name: 'Salesforce CRM', desc: 'Soluciones enterprise líderes integradas.', href: '/integraciones/salesforce' },
      { name: 'SAP ERP', desc: 'Conectividad empresarial sin fisuras.', href: '#' },
      { name: 'Shopify E-commerce', desc: 'Potencia tus ventas y logística online.', href: '#' }
    ]
  },
  {
    title: 'Automatizaciones',
    options: [
      { name: 'Flujos de Negocio', desc: 'Optimiza tus procesos operacionales.', href: '#' },
      { name: 'RPA Personalizado', desc: 'Automatización robótica moderna y ágil.', href: '#' },
      { name: 'Zapier & Make', desc: 'Plataformas de integración inmediata.', href: '#' }
    ]
  },
  {
    title: 'Portafolio',
    options: [
      { name: 'Casos de Éxito', desc: 'Impacto real en operaciones globales.', href: '#' },
      { name: 'Industrias', desc: 'Sectores verticales en los que operamos.', href: '#' },
      { name: 'Certificaciones', desc: 'Respaldados por nuestros partners.', href: '#' }
    ]
  },
  {
    title: 'Empresa',
    options: [
      { name: 'Sobre Nosotros', desc: 'Nuestra historia, misión y valores.', href: '#' },
      { name: 'Nuestro Equipo', desc: 'Conoce a nuestros ingenieros expertos.', href: '#' },
      { name: 'Carreras', desc: 'Forma parte de la innovación continua.', href: '#' }
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Contenedor con ancho máximo y px ajustado para que los elementos no estén tan pegados */}
      <div className="mx-auto grid h-[84px] w-full max-w-7xl grid-cols-2 lg:grid-cols-3 items-center px-8 lg:px-12">

        {/* Espacio para el Logo (Izquierda) */}
        <div className="flex items-center justify-start h-full">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2 group z-50 focus:outline-none">
            <img src="/dbp-logo.png" alt="Logo de Debugploy" className="h-[50px] w-auto object-contain" />
          </Link>
        </div>

        {/* Menú Desktop con Megamenú (Centro) */}
        <div className="hidden lg:flex h-full items-center justify-center gap-2 text-[15px] font-semibold text-slate-600">
          {MENU_DATA.map((item) => (
            <div key={item.title} className="group relative flex h-full items-center">
              {/* Botón Principal del Item */}
              <button className="px-5 py-2.5 rounded-full hover:bg-slate-100/80 hover:text-brand-teal transition-all duration-300 relative flex items-center gap-1.5 focus:outline-none">
                <span className="relative z-10">{item.title}</span>
                <svg className="relative z-10 w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Línea animada inferior (dentro del botón) */}
                <span className="absolute bottom-1.5 left-1/2 w-4/5 h-[2px] bg-brand-teal -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
              </button>

              {/* Contenido del Megamenú: top-full está garantizado exacto al borde */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                {/* Wrapper decorativo sutil en la capa superior (sin pt extra ya que empieza en el filo) */}
                <div className="w-[340px] bg-white rounded-b-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-x border-b border-slate-100/80 p-3 relative overflow-hidden text-left translate-y-[1px]">

                  {/* Foco de luz color brand-teal-light */}
                  {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal-light rounded-full blur-[40px] opacity-60 z-0 pointer-events-none"></div> */}

                  <div className="relative z-10 flex flex-col pt-2 pb-1 gap-1">
                    {item.options.map((option) => (
                      <Link
                        key={option.name}
                        to={option.href}
                        className="p-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-200 flex flex-col group/item"
                      >
                        <span className="text-slate-900 font-bold group-hover/item:text-brand-teal flex items-center gap-2">
                          {option.name}
                          <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        <span className="text-[13px] text-slate-500 mt-0.5 font-medium leading-snug">{option.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Contacto y Toggle Mobile (Derecha) */}
        <div className="flex h-full items-center justify-end gap-5">
          <div className="hidden lg:block">
            <button className="rounded-full bg-brand-black px-8 py-3 text-[15px] font-bold text-white shadow-lg shadow-brand-black/20 transition-all duration-300 hover:bg-brand-teal hover:scale-105 hover:shadow-brand-teal/30 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2">
              Contacto
            </button>
          </div>

          {/* Toggle Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-black hover:text-brand-teal transition-colors p-2 z-50 bg-slate-100 rounded-full focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full border-t border-slate-100 bg-white/95 backdrop-blur-2xl shadow-2xl px-6 py-6 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto">
            {MENU_DATA.map((item) => (
              <div key={item.title} className="border-b border-slate-50 pb-3">
                <button
                  onClick={() => setActiveMobileMenu(activeMobileMenu === item.title ? null : item.title)}
                  className="flex items-center justify-between w-full text-left text-lg font-extrabold text-slate-900 transition-colors focus:outline-none"
                >
                  <span className={activeMobileMenu === item.title ? 'text-brand-teal' : ''}>
                    {item.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === item.title ? 'rotate-180 text-brand-teal' : 'text-slate-400'}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Submenú Mobile Animado */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${activeMobileMenu === item.title ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden flex flex-col gap-1.5">
                    {item.options.map((option) => (
                      <Link
                        key={option.name}
                        to={option.href}
                        onClick={() => setIsOpen(false)}
                        className="pl-4 py-2 border-l-2 border-slate-100 hover:border-brand-teal group/link focus:outline-none focus:border-brand-teal"
                      >
                        <span className="block font-bold text-[15px] text-slate-700 group-hover/link:text-brand-teal transition-colors">{option.name}</span>
                        <span className="block text-xs font-medium text-slate-500 mt-0.5">{option.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button className="mt-4 rounded-xl bg-brand-black px-6 py-4 text-center text-[17px] font-bold text-white shadow-xl shadow-brand-black/20 transition-all hover:bg-brand-teal hover:shadow-brand-teal/30 active:scale-95 focus:outline-none">
              Ponte en Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
