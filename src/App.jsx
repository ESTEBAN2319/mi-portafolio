import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#EEF4FF] via-[#F8FAFC] to-[#E6F0FF] text-[#0F172A] overflow-x-hidden">
      {/* Textura global de cuadrícula sutil */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:36px_36px]" />
      
      {/* Luces ambientales azules */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[110px] -z-10" />
      <div className="pointer-events-none fixed top-1/3 -right-32 w-[450px] h-[450px] rounded-full bg-sky-400/20 blur-[110px] -z-10" />

      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
    </div>
  );
}

export default App;