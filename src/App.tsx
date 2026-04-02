import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';

export default function App() {
  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-brand-teal selection:text-white">
      <Navbar />
      <Hero />
      <Integrations />
      
      {/* Scroll spacer temporal para debug del layout final */}
      <div className="h-[50vh] bg-brand-black w-full"></div>
    </div>
  )
}
