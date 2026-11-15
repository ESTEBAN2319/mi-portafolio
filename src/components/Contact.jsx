import { Mail, ArrowUpRight, MapPin } from 'lucide-react';

export default function Contact() {
  const channels = [
    {
      name: 'Correo',
      detail: 'e2jaimel@gmail.com',
      href: 'mailto:e2jaimel@gmail.com',
      accent: 'group-hover:border-blue-400 group-hover:bg-[#2563EB]/20',
      iconBg: 'bg-[#2563EB] text-white',
      icon: <Mail size={20} />,
    },
    {
      name: 'WhatsApp',
      detail: 'Mensaje directo',
      href: 'https://wa.me/573137707853',
      accent: 'group-hover:border-emerald-400/60',
      iconBg: 'bg-emerald-500/15 text-emerald-400',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.69-.17 1.37z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      detail: 'Perfil profesional',
      href: 'https://www.linkedin.com/in/esteban-jaime-7aa425405/',
      accent: 'group-hover:border-sky-400/60',
      iconBg: 'bg-sky-500/15 text-sky-400',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      detail: '@ESTEBAN2319',
      href: 'https://github.com/ESTEBAN2319',
      accent: 'group-hover:border-slate-500',
      iconBg: 'bg-white/10 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      detail: '@estebanjl___',
      href: 'https://www.instagram.com/estebanjl___',
      accent: 'group-hover:border-pink-400/60',
      iconBg: 'bg-pink-500/15 text-pink-400',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contacto" className="relative pt-12 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-[#0F172A] text-white rounded-[2rem] p-8 sm:p-12 shadow-2xl shadow-blue-950/20 border border-slate-800">
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#2563EB]/25 blur-3xl" />

          <div className="relative z-10 space-y-8">
            {/* Cabecera */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Ponte en <span className="text-sky-400">contacto</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-1.5">
                  Abierto a nuevos retos en desarrollo Full Stack y Ciberseguridad.
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <MapPin size={14} className="text-sky-400" />
                Jaén 🇪🇸 • Tunja 🇨🇴
              </span>
            </div>

            {/* 5 Tarjetas en fila */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {channels.map((ch) => (
                <a
                  key={ch.name}
                  href={ch.href}
                  target={ch.name === 'Correo' ? undefined : '_blank'}
                  rel="noreferrer"
                  className={`group bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 ${ch.accent} rounded-2xl p-4 transition-all flex flex-col justify-between gap-4`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${ch.iconBg}`}>
                      {ch.icon}
                    </span>
                    <ArrowUpRight size={15} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{ch.name}</p>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{ch.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Barra inferior */}
          <div className="relative z-10 mt-10 pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="font-bold text-slate-300">
              © {new Date().getFullYear()} ESTEBAN JAIME • Ingeniero de Sistemas
            </p>
            <p className="font-mono">Full Stack & Cybersecurity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}