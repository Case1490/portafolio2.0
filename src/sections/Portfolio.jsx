import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Imágenes de proyectos
import imgStockFlow from '../assets/portafolio/stockflow.png'
import imgCardenas from "../assets/portafolio/doctorCardenas.png";
import imgWebberyl from "../assets/portafolio/webberyl.jpg";
import imgProposito from "../assets/portafolio/propositocreativo.png";
import imgTaberna from "../assets/portafolio/lataberna.png";


const projects = [
  
  {
    title: "Dr Cárdenas · Cirujano Oncólogo",
    desc: "Sitio web informativo para cirujano oncólogo. Diseño limpio, accesible y orientado a captar pacientes.",
    tags: ["React", "Tailwind"],
    img: imgCardenas,
    url: "https://cardenasmedical.com/",
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
    title: "Restobar La Taberna",
    desc: "Página para restobar con comida fusión y cocteles únicos.",
    tags: ["Restaurante"],
    img: imgTaberna,
    url: "https://latabernarestobar.netlify.app/",
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
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="project-card group relative block overflow-hidden bg-[var(--bg3)]
                         border border-[var(--line)] w-full"
              style={{ aspectRatio: "21/9" }}
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
                <span className="project-link inline-flex items-center gap-2 text-[0.72rem] tracking-[0.1em]
                                 uppercase text-[var(--accent)] opacity-0 transition-opacity duration-300">
                  Ver proyecto ↗
                </span>
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