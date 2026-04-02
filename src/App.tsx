import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="bg-white font-sans text-slate-800 antialiased selection:bg-brand-teal selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Scroll spacer temporal para debug */}
      <div className="h-[100vh] bg-slate-50 border-t border-slate-200"></div>
    </div>
  )
}
