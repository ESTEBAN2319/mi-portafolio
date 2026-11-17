import { Mail } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Trayectoria', href: '#experiencia' },
    { name: 'Tecnologías', href: '#stack' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="sticky top-4 z-50 px-4 flex justify-center">
      <header className="w-full max-w-5xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-950/5 rounded-full px-5 sm:px-7 h-16 flex items-center justify-between">
        {/* Logo + Nombre en MAYÚSCULAS */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Logo Esteban Jaime"
            className="w-9 h-9 object-contain rounded-lg group-hover:scale-105 transition-transform"
          />
          <span className="font-black text-sm sm:text-base tracking-wider uppercase text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
            ESTEBAN JAIME
          </span>
        </a>

        {/* Enlaces más grandes con efecto píldora + línea inferior al pasar el cursor */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3.5 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-[#2563EB] hover:bg-blue-50/80 transition-all duration-200 group"
            >
              {link.name}
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#2563EB] rounded-full group-hover:w-1/2 transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Redes: LinkedIn, GitHub, Instagram y Gmail */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/esteban-jaime23"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white hover:-translate-y-0.5 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ESTEBAN2319"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0F172A] hover:border-[#0F172A] hover:text-white hover:-translate-y-0.5 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/estebanjl___"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:text-white hover:-translate-y-0.5 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* Gmail */}
          <a
            href="mailto:e2jaimel@gmail.com"
            title="Enviar correo (Gmail)"
            aria-label="Gmail"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white hover:-translate-y-0.5 transition-all"
          >
            <Mail size={16} />
          </a>
        </div>
      </header>
    </div>
  );
}