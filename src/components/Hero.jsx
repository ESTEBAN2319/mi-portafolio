import { ArrowUpRight, Download, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  const tags = [
    'Cybersecurity',
    'Frontend',
    'Backend',
    'Artificial Intelligence',
  ];

  return (
    <section className="relative pt-10 pb-8 md:pt-14 md:pb-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* COLUMNA IZQUIERDA: TU PRESENTACIÓN */}
        <div className="lg:col-span-7 space-y-6">
          {/* Etiqueta superior con Ingeniero de Sistemas */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-blue-200 shadow-xs px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#1E3A8A]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
            </span>
            <span>ESTEBAN JAIME • INGENIERO DE SISTEMAS</span>
          </div>

          {/* Título y Subtítulo con enfoque en Ciberseguridad */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.7rem] font-black tracking-tight text-[#0F172A] leading-[1.05]">
              Full Stack &{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#0284C7] bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-600 tracking-tight">
              Systems Engineering Student
            </p>
          </div>

          {/* Párrafo descriptivo en tarjeta translúcida suave */}
          <div className="bg-white/65 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-sm">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed border-l-[3px] border-[#2563EB] pl-4">
              Me apasiona diseñar y desarrollar soluciones tecnológicas que combinan funcionalidad, innovación y seguridad. Me enfoco en la creación de aplicaciones web y sistemas escalables, integrando conocimientos de{' '}
              <strong className="text-[#0F172A]">desarrollo Full Stack</strong> y{' '}
              <strong className="text-[#0F172A]">ciberseguridad</strong>. Además, exploro tecnologías como la{' '}
              <strong className="text-[#0F172A]">Inteligencia Artificial</strong> y el{' '}
              <strong className="text-[#0F172A]">análisis de datos</strong> para construir soluciones eficientes, modernas y orientadas a resolver problemas reales.
            </p>
          </div>

          {/* Tus píldoras de especialización */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-[#1E3A8A] border border-blue-200/90 shadow-2xs hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/25 hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all"
            >
              Explorar proyectos
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/CV_Esteban_Jaime.pdf"
              download
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0F172A] border border-slate-300 px-6 py-3.5 rounded-xl text-sm font-bold hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
            >
              Descargar CV
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA: ESCAPARATE 3D CON ÓRBITAS Y UBICACIÓN */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[470px]">
          {/* Resplandor azul intenso detrás de ti */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#2563EB]/30 via-sky-400/25 to-indigo-300/20 blur-2xl -z-10" />

          {/* Anillos orbitales de ingeniería */}
          <div className="pointer-events-none absolute w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] rounded-full border border-dashed border-[#2563EB]/30 animate-[spin_40s_linear_infinite]" />
          <div className="pointer-events-none absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-blue-300/50" />

          {/* Texto gigante ESTEBAN detrás de tu silueta */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-x-0 top-15 flex flex-col items-center justify-center z-0 leading-none"
          >
            <span className="text-[4.8rem] sm:text-[5.5rem] font-black tracking-tighter text-[#2563EB]/15 uppercase">
              ESTEBAN
            </span>
          </div>

          {/* Contenedor ampliado con tu foto */}
          <div className="relative z-10 w-80 h-[380px] sm:w-[400px] sm:h-[430px] flex items-end justify-center">
            <div className="absolute bottom-0 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-b from-[#2563EB] to-[#0F172A] shadow-2xl shadow-blue-900/25 border-4 border-white/80" />

            <img
              src="/foto-esteban.png"
              alt="Esteban Jaime"
              className="relative z-10 h-full w-auto object-contain object-bottom scale-105 origin-bottom rounded-b-full drop-shadow-[0_14px_24px_rgba(15,23,42,0.28)]"
            />
          </div>

          {/* Tarjeta flotante de Ubicación (Abajo Derecha, reemplazando Tech Stack) */}
          <div className="hidden sm:flex items-center gap-3 absolute -right-4 bottom-8 z-20 bg-[#0F172A]/95 backdrop-blur-md text-white border border-slate-700/80 px-4 py-3 rounded-2xl shadow-xl">
            <span className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center shrink-0">
              <MapPin size={16} />
            </span>
            <div>
              <p className="text-xs font-bold leading-snug">Tunja 🇨🇴</p>
              <p className="text-xs font-bold leading-snug">Jaén 🇪🇸</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}