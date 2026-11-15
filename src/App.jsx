import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#F4F8FF] text-[#0F172A] overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      {/* Textura global de cuadrícula técnica muy sutil */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#cbd5e133_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e133_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Luces ambientales azules suaves */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-blue-400/20 blur-[120px] -z-10" />
      <div className="pointer-events-none fixed top-1/2 -right-32 w-[480px] h-[480px] rounded-full bg-sky-400/15 blur-[120px] -z-10" />

      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}

export default App;