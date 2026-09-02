import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Imágenes de proyectos
import imgStockFlow from '../assets/portafolio/stockflow.png'
import imgQuincena from '../assets/portafolio/quincena.jpg'
import imgStylestore from '../assets/portafolio/stylestore.png'
import imgDentalprime from '../assets/portafolio/dentalprime.png'
import imgCardenas from "../assets/portafolio/doctorCardenas.png";
import imgWebberyl from "../assets/portafolio/webberyl.jpg";
import imgProposito from "../assets/portafolio/propositocreativo.png";
import imgChambapp from "../assets/portafolio/chambapp.png";
import imgHidramap from "../assets/portafolio/hidramap.png";

const projects = [

  {
  title: "HIDRAMAP · SaaS para Talleres Automotrices",
  desc: "Plataforma multitenant para gestión de talleres automotrices (órdenes de trabajo, inventario, ventas y cursos). Diseñé la capa de autenticación con better-auth: sesiones basadas en cookies y guards de rol para 3 niveles de acceso (Técnico, Admin Empresa, Superadmin).",
  tags: ["Next.js", "NestJS", "tRPC", "Prisma", "Multitenant", "Featured"],
  img: imgHidramap,
  url: "#",
  featured: true,
},
{
  title: "StockFlow · Sistema de Inventario",
  desc: "App de gestión de inventario y ventas con roles, dashboard en tiempo real, carrito de compras y modo claro/oscuro.",
  tags: ["React", "Supabase", "PWA", "Featured"],
  img: imgStockFlow,
  url: "https://stockflow-zeta-nine.vercel.app/",
  featured: true,
},
{
  title: "Quincenas · Control de Gastos",
  desc: "App de finanzas personales para registrar ingresos y gastos por categoría, definir límites mensuales y ver el mes completo de un vistazo.",
  tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase"],
  img: imgQuincena,
  url: "https://quincena-bice.vercel.app/",
},
{
  title: "StyleStore · Tienda de Moda",
  desc: "Tienda ecommerce de ropa y accesorios con catálogo, carrito de compras y experiencia de compra fluida.",
  tags: ["React", "Tailwind", "Supabase"],
  img: imgStylestore,
  url: "https://stylestore-tienda.vercel.app/",
},
{
  title: "DentalPrime · Clínica Dental",
  desc: "Sistema de reserva de citas para clínica dental con gestión de disponibilidad y confirmación de turnos.",
  tags: ["React", "Tailwind", "Supabase"],
  img: imgDentalprime,
  url: "https://clinica-dental-tan.vercel.app/",
},
{
  title: "Dr Cárdenas · Cirujano Oncólogo",
  desc: "Sitio web informativo para cirujano oncólogo. Diseño limpio, accesible y orientado a captar pacientes.",
  tags: ["React", "Tailwind"],
  img: imgCardenas,
  url: "https://cardenasmedical.com/",
},
{
  title: "Webberyl",
  desc: "Agencia de diseño y desarrollo web con portafolio interactivo.",
  tags: ["Agencia"],
  img: imgWebberyl,
  url: "https://webberyl.netlify.app/",
},
{
  title: "Agencia Propósito Creativo",
  desc: "Página moderna para agencia de publicidad digital.",
  tags: ["Marketing"],
  img: imgProposito,
  url: "https://agenciadepublicidadpropositocreativo.com/",
},
{
  title: "ChambApp · Marketplace de Servicios",
  desc: "App tipo InDrive para contratar especialistas (electricidad, mueblería y más), con roles de Cliente, Especialista y Administrador. Desplegada para pruebas del cliente vía TestFlight y Google Play Console (pista interna), con backend en GCP (Cloud Run y Cloud SQL).",
  tags: ["React Native", "Expo", "GCP", "Cloud Run", "Privado"],
  img: imgChambapp,
  url: "#",
},

];

const Portfolio = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="portafolio" className="bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">

        {/* ── ENCABEZADO ── */}
        <div ref={addRef} className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              <span className="block w-7 h-px bg-[var(--accent)]" />
              Portafolio
            </p>
            <h2 className="font-['Syne'] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Proyectos{" "}
              <em className="font-normal not-italic text-[var(--text2)]">destacados</em>
            </h2>
          </div>
          <span className="text-[0.72rem] tracking-[0.12em] uppercase text-[var(--text3)] pb-2">
            {projects.length} proyectos
          </span>
        </div>

        {/* ── PROYECTO FEATURED ── */}
        {featured.map((p) => (
          <div ref={addRef} key={p.title} className="reveal mb-px">
            <a
              href={p.url === "#" ? undefined : p.url}
              target={p.url === "#" ? undefined : "_blank"}
              rel="noreferrer"
              className="project-card group relative block overflow-hidden bg-[var(--bg3)]
                         border border-[var(--line)] w-full"
              style={{ aspectRatio: "21/9", cursor: p.url === "#" ? "default" : "pointer" }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="project-img w-full h-full object-cover transition-all duration-700"
                style={{ filter: "grayscale(30%) brightness(0.55)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="project-content absolute inset-0 flex flex-col justify-end p-8 md:p-10 transition-transform duration-300">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[0.62rem] tracking-[0.1em] uppercase text-[var(--accent)]
                                             bg-[rgba(232,255,71,0.1)] border border-[rgba(232,255,71,0.2)]
                                             px-2.5 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-['Syne'] text-xl md:text-2xl font-bold text-[var(--text)] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60 max-w-lg mb-4 leading-relaxed">{p.desc}</p>
                {p.url !== "#" && (
                  <span className="project-link inline-flex items-center gap-2 text-[0.72rem] tracking-[0.1em]
                                   uppercase text-[var(--accent)] opacity-0 transition-opacity duration-300">
                    Ver proyecto ↗
                  </span>
                )}
                {p.url === "#" && (
                  <span className="text-[0.65rem] tracking-[0.08em] uppercase text-[var(--text3)]">
                    Privado / en desarrollo
                  </span>
                )}
              </div>
            </a>
          </div>
        ))}

        {/* ── GRID RESTO ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--line)] mt-px">
          {rest.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url === "#" ? undefined : p.url}
              target={p.url === "#" ? undefined : "_blank"}
              rel="noreferrer"
              ref={addRef}
              className="project-card reveal relative block overflow-hidden bg-[var(--bg3)]
                         border border-[var(--line)]"
              style={{
                aspectRatio: "16/10",
                transitionDelay: `${(i % 2) * 0.08}s`,
                cursor: p.url === "#" ? "default" : "pointer",
              }}
              whileHover={p.url !== "#" ? { scale: 1.005 } : {}}
              transition={{ duration: 0.4 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="project-img w-full h-full object-cover transition-all duration-700"
                style={{ filter: "grayscale(30%) brightness(0.55)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="project-content absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-300">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[0.58rem] tracking-[0.1em] uppercase text-[var(--accent)]
                                             bg-[rgba(232,255,71,0.1)] border border-[rgba(232,255,71,0.2)]
                                             px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-['Syne'] text-base font-bold text-[var(--text)] mb-1">{p.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
                {p.url !== "#" && (
                  <span className="project-link inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.1em]
                                   uppercase text-[var(--accent)] opacity-0 transition-opacity duration-300">
                    Ver proyecto ↗
                  </span>
                )}
                {p.url === "#" && (
                  <span className="text-[0.65rem] tracking-[0.08em] uppercase text-[var(--text3)]">
                    Privado / en desarrollo
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;