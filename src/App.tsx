import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Clients from './components/Clients';
import Automations from './components/Automations';
import Cta from './components/Cta';

export default function App() {
  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-brand-teal selection:text-white">
      <Navbar />
      <Hero />
      <Integrations />
      <Clients />
      <Automations />
      <Cta />
    </div>
  )
}
