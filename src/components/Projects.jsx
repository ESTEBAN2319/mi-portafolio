import {
    ArrowUpRight,
    ShieldAlert,
    Database,
    CreditCard,
    Layers,
    Truck,
    FolderGit2,
  } from 'lucide-react';
  
  export default function Projects() {
    const projects = [
      {
        id: '02',
        title: 'ArqueoData — Motor de Persistencia & Consultas',
        description:
          'Backend empresarial en Java y Spring para gestión de yacimientos y artefactos históricos. Implementación de consultas dinámicas multicriterio con JPA EntityManager, JPQL y pruebas unitarias JUnit.',
        stack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'SQL', 'JUnit'],
        githubUrl: 'https://github.com/DAEUJA-2026/g3-proyecto-group-5.git',
        icon: Database,
        highlight: 'Arquitectura Backend',
      },
      {
        id: '03',
        title: 'BelenInter — Plataforma de Gestión Logística',
        description:
          'Sistema full-stack de trazabilidad de paquetes con autenticación segura (bcrypt, JWT y verificación OTP por correo), control de acceso por roles (Administrador/Operador) y políticas automatizadas de retención de datos.',
        stack: ['React', 'Node.js / Express', 'Sequelize', 'JWT & OTP'],
        githubUrl: 'https://github.com/ESTEBAN2319/BelenInter.git',
        icon: Truck,
        highlight: 'Full Stack & Seguridad',
      },
      {
        id: '04',
        title: 'Northon Store — Integración Wompi & Flujo PSE',
        description:
          'Implementación completa de pasarela de pagos electrónicos con soporte PSE, generación y validación de firmas criptográficas de integridad y gestión automatizada de datos de envío.',
        stack: ['JavaScript', 'APIs REST', 'Wompi / PSE', 'Seguridad Web'],
        githubUrl: 'https://github.com/ESTEBAN2319/Northon23.git',
        icon: CreditCard,
        highlight: 'E-Commerce & Fintech',
      },{
        id: '01',
        title: 'Operación Cuervo — Log Intrusion Analyzer',
        description:
          'Herramienta de análisis de registros y detección de intrusiones desarrollada en C++. Arquitectura modular con compilación automatizada mediante Makefile para auditoría de eventos de seguridad.',
        stack: ['C++', 'Linux', 'Makefile', 'Cybersecurity', 'Git'],
        githubUrl: 'https://github.com/ESTEBAN2319/Operacion-cuervo.git',
        icon: ShieldAlert,
        highlight: 'Seguridad & Sistemas',
      },
    ];
  
    return (
      <section id="proyectos" className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Cabecera limpia sin filtros */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] mt-1">
                Proyectos Destacados
              </h2>
            </div>
  
            <a
              href="https://github.com/ESTEBAN2319"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#0F172A] transition-colors"
            >
              <span>Ver todos en GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
  
          {/* Grid de tarjetas en cristal azul */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <article
                  key={project.id}
                  className="group relative bg-white/85 backdrop-blur-md border border-blue-200/80 rounded-3xl p-7 shadow-sm hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Fila superior: Ícono + Etiqueta + Número */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-[#2563EB] group-hover:from-[#2563EB] group-hover:to-[#1D4ED8] group-hover:text-white flex items-center justify-center transition-colors">
                          <IconComponent size={20} />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] bg-blue-50 border border-blue-200/70 px-3 py-1 rounded-full">
                          {project.highlight}
                        </span>
                      </div>
  
                      <span className="font-mono text-sm font-black text-slate-300 group-hover:text-[#2563EB] transition-colors">
                        #{project.id}
                      </span>
                    </div>
  
                    {/* Título y Descripción */}
                    <h3 className="text-xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {project.title}
                    </h3>
  
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>
  
                  {/* Pie de tarjeta: Stack + Botón GitHub */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
  
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2563EB] hover:text-[#0F172A] transition-colors shrink-0"
                    >
                      <FolderGit2 size={15} />
                      <span>Código</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }