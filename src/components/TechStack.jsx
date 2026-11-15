import { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Cpu,
  Terminal,
  GitBranch,
  Layout,
  Shield,
  BrainCircuit,
  Blocks,
  Braces,
} from 'lucide-react';

export default function TechStack() {
  const [filter, setFilter] = useState('Todas');

  const technologies = [
    { name: 'Java', category: 'Backend', icon: Code2 },
    { name: 'Spring Boot', category: 'Backend', icon: Server },
    { name: 'React', category: 'Frontend', icon: Blocks },
    { name: 'JavaScript', category: 'Frontend', icon: Braces },
    { name: 'Tailwind CSS', category: 'Frontend', icon: Layout },
    { name: 'C++', category: 'Sistemas', icon: Cpu },
    { name: 'SQL & JPA', category: 'Backend', icon: Database },
    { name: 'Node.js', category: 'Backend', icon: Server },
    { name: 'Git & GitHub', category: 'Sistemas', icon: GitBranch },
    { name: 'Linux & Bash', category: 'Sistemas', icon: Terminal },
    { name: 'Cybersecurity', category: 'Sistemas', icon: Shield },
    { name: 'AI & Data', category: 'IA & Datos', icon: BrainCircuit },
  ];

  const categories = ['Todas', 'Backend', 'Frontend', 'Sistemas', 'IA & Datos'];

  const filteredTech =
    filter === 'Todas'
      ? technologies
      : technologies.filter((t) => t.category === filter);

  return (
    <section id="stack" className="relative pt-6 pb-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#0F172A] text-white rounded-[2rem] p-7 sm:p-10 shadow-2xl shadow-blue-950/20 border border-slate-800">
        {/* Barra superior estilo IDE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-sky-400">
                ~/esteban/tech-stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Tecnologías y Herramientas
            </h2>
          </div>

          {/* Botones de filtro */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cuadrícula de chips luminosos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTech.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex items-center gap-3 bg-slate-900/90 border border-slate-800 hover:border-sky-400/60 hover:bg-slate-800/80 rounded-2xl p-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-sky-400 group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <IconComponent size={19} />
                </div>
                <span className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}