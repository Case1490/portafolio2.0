import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Diseño web · Frontend",
    desc: "Interfaces modernas, rápidas y responsivas. React, Vue o Angular con Tailwind CSS. Pixel-perfect, accesibles y optimizadas para cualquier dispositivo.",
  },
  {
    num: "02",
    title: "Backend · APIs REST",
    desc: "Servidores seguros y eficientes con Node.js y Express. Arquitectura limpia, autenticación JWT y documentación incluida.",
  },
  {
    num: "03",
    title: "Bases de datos",
    desc: "Diseño, modelado y optimización de bases de datos relacionales (MySQL, PostgreSQL) y no relacionales (MongoDB). Queries eficientes y bien estructuradas.",
  },
  {
    num: "04",
    title: "Despliegue · Hosting",
    desc: "Configuración y deploy en Vercel, Netlify, Railway o VPS. Dominio propio, HTTPS y configuración de entornos incluidos.",
  },
  {
    num: "05",
    title: "Integración de APIs",
    desc: "Conexión con servicios externos: pasarelas de pago, mapas, redes sociales, SMS y más. Webhooks y sincronización de datos en tiempo real.",
  },
  {
    num: "06",
    title: "Mantenimiento · Optimización",
    desc: "Auditorías de rendimiento, refactoring, mejora de Core Web Vitals, seguridad y actualizaciones continuas para mantener tu producto en óptimas condiciones.",
  },
];

const Services = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hola Renzo, quiero más información sobre tus servicios");
    window.open(`https://wa.me/51977139843?text=${msg}`, "_blank");
  };

  return (
    <section id="servicios" className="bg-[var(--bg2)]">
      <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">

        {/* ── ENCABEZADO ── */}
        <div ref={addRef} className="reveal text-center mb-20">
          <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            <span className="block w-7 h-px bg-[var(--accent)]" />
            Servicios
            <span className="block w-7 h-px bg-[var(--accent)]" />
          </p>
          <h2 className="font-['Syne'] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Lo que{" "}
            <em className="font-normal not-italic text-[var(--text2)]">ofrezco</em>
          </h2>
          <p className="text-[var(--text2)] text-base max-w-md mx-auto">
            Soluciones enfocadas en rendimiento, escalabilidad y experiencia de usuario.
            Desde el concepto hasta el despliegue.
          </p>
        </div>

        {/* ── LISTA DE SERVICIOS ── */}
        <div className="flex flex-col gap-px bg-[var(--line)]">
          {services.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              ref={addRef}
              className="reveal relative bg-[var(--bg2)] flex items-start gap-6 px-8 py-7
                         group service-item hover:bg-[rgba(232,255,71,0.025)] transition-colors duration-200
                         overflow-hidden"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Línea acento izquierda al hover */}
              <div className="service-line absolute left-0 top-0 w-0.5 h-0 bg-[var(--accent)] transition-all duration-300" />

              {/* Número */}
              <span className="font-['Syne'] text-[0.7rem] text-[var(--text3)] pt-1 flex-shrink-0 w-6">
                {num}
              </span>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-['Syne'] text-base md:text-lg font-bold text-[var(--text)] service-title transition-colors duration-200">
                    {title}
                  </h3>
                  <span className="service-arrow text-[var(--text3)] flex-shrink-0 mt-0.5 transition-all duration-200">
                    →
                  </span>
                </div>
                <p className="text-[var(--text2)] text-sm leading-relaxed mt-2 max-w-xl">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA INFERIOR ── */}
        <div ref={addRef} className="reveal mt-16 flex flex-col sm:flex-row items-center
                                     justify-between gap-6 pt-10 border-t border-[var(--line)]">
          <p className="text-[var(--text2)] text-sm max-w-sm text-center sm:text-left">
            ¿No ves exactamente lo que necesitas?{" "}
            <span className="text-[var(--text)]">Cuéntame tu proyecto</span> y lo evaluamos juntos.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)]
                       px-8 py-3 text-[0.82rem] font-semibold tracking-[0.06em] uppercase
                       rounded-sm hover:bg-[var(--accent2)] hover:-translate-y-0.5
                       transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Hablemos →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;