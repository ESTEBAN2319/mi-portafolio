import { GraduationCap, Globe, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const education = [
    {
      id: '01',
      period: '2026 — Actualidad',
      title: 'Intercambio Académico • Ingeniería Informática',
      institution: 'Universidad de Jaén (UJA)',
      location: 'Jaén, España 🇪🇸',
      highlight: 'Experiencia Internacional',
      summary:
        'Ampliación de conocimientos en desarrollo de software, seguridad informática y trabajo en entornos académicos internacionales.',
      icon: Globe,
    },
    {
      id: '02',
      period: '2023 — Presente',
      title: 'Ingeniería de Sistemas',
      institution: 'Universidad Santo Tomás (USTA)',
      location: 'Tunja, Colombia 🇨🇴',
      highlight: 'Formación Universitaria',
      summary:
        'Formación integral en programación, arquitectura de software, gestión de datos y resolución analítica de problemas tecnológicos.',
      icon: GraduationCap,
    },
    {
      id: '03',
      period: '2026',
      title: 'Curso completo de Hacking Ético y Ciberseguridad',
      institution: 'Udemy',
      location: 'Certificación Online',
      highlight: 'Especialización Técnica',
      summary:
        'Fundamentos prácticos de seguridad ofensiva, análisis de vulnerabilidades y protección de sistemas y redes.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="experiencia" className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] mt-1">
              Educación y Certificaciones
            </h2>
          </div>

          <span className="text-sm font-bold text-slate-500">
            Colombia 🇨🇴 • España 🇪🇸
          </span>
        </div>

        {/* Grid de 3 tarjetas limpias con breve resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className="group relative bg-white/85 backdrop-blur-md border border-blue-200/80 rounded-3xl p-7 shadow-sm hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Fila superior: Ícono + Etiqueta + Número */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-[#2563EB] group-hover:from-[#2563EB] group-hover:to-[#1D4ED8] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                        <IconComponent size={19} />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    </div>

                    <span className="font-mono text-sm font-black text-slate-300 group-hover:text-[#2563EB] transition-colors">
                      #{item.id}
                    </span>
                  </div>

                  {/* Título, Institución y breve resumen */}
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-[#1E3A8A] mt-1.5">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    {item.summary}
                  </p>
                </div>

                {/* Pie de tarjeta: Periodo y Ubicación */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-slate-500">
                  <span className="inline-flex items-center gap-1.5 text-[#2563EB]">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}