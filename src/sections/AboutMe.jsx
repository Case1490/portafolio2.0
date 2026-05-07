import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AboutImg from "../assets/sobremi.jpg";

const info = [
  { label: "Ubicación",      value: "Lima, Perú" },
  { label: "Disponibilidad", value: "● Disponible", accent: true },
  { label: "Email",          value: "renzoramos414@gmail.com" },
  { label: "Teléfono",       value: "+51 977 139 843" },
];

const journey = [
  { year: "2022",     type: "Educación",  role: "Ingeniería de Sistemas",     place: "Universidad — Lima" },
  { year: "2022",     type: "Formación",  role: "Especialización en Desarrollo web",   place: "React · Node · APIs · SQL" },
  { year: "2023",     type: "Proyecto",   role: "Primer cliente real",         place: "Webberyl — Diseño y desarrollo" },
  { year: "2024–hoy", type: "Freelance",  role: "Desarrollador Full Stack",    place: "11+ proyectos entregados" },
];

const AboutMe = () => {
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

  return (
    <section id="acerca" className="bg-[var(--bg2)]">
      <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">

        {/* ── ENCABEZADO centrado ── */}
        <div ref={addRef} className="reveal text-center mb-20">
          <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            <span className="block w-7 h-px bg-[var(--accent)]" />
            Sobre mí
            <span className="block w-7 h-px bg-[var(--accent)]" />
          </p>
          <h2 className="font-['Syne'] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Dev que{" "}
            <em className="font-normal not-italic text-[var(--text2)]">también</em>{" "}
            diseña
          </h2>
        </div>

        {/* ── GRID PRINCIPAL ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Imagen */}
          <div ref={addRef} className="reveal relative max-w-sm mx-auto w-full">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={AboutImg}
                alt="Renzo Ramos"
                className="w-full block object-cover"
                style={{ filter: "grayscale(25%) contrast(1.05)" }}
              />
              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-px h-1/2 bg-[var(--accent)]" />
              <div className="absolute top-0 left-0 w-1/3 h-px bg-[var(--accent)]" />
              <div className="absolute bottom-0 right-0 w-1/3 h-px bg-[var(--accent)]" />
              <div className="absolute bottom-0 right-0 w-px h-1/2 bg-[var(--accent)]" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full
                            bg-[var(--accent)] flex flex-col items-center justify-center shadow-lg">
              <strong className="font-['Syne'] text-3xl font-extrabold text-[var(--bg)] leading-none">
                23
              </strong>
              <span className="text-[0.5rem] tracking-widest uppercase text-[var(--bg)] mt-0.5">
                años
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div ref={addRef} className="reveal flex flex-col gap-8" style={{ transitionDelay: ".15s" }}>
            <p className="text-[var(--text2)] text-base md:text-lg leading-relaxed">
              Soy{" "}
              <strong className="text-[var(--text)] font-semibold">Renzo Ramos</strong>,
              desarrollador web full stack con pasión por crear soluciones que equilibran
              diseño, lógica y rendimiento. No solo escribo código — entiendo el{" "}
              <strong className="text-[var(--text)] font-semibold">producto</strong>, el{" "}
              <strong className="text-[var(--text)] font-semibold">usuario</strong> y el
              impacto que cada decisión técnica tiene.
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--line)] pt-6">
              {info.map(({ label, value, accent }) => (
                <div key={label}>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text3)] mb-1">
                    {label}
                  </div>
                  <div
                    className="text-[0.9rem]"
                    style={{ color: accent ? "var(--accent)" : "var(--text)" }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="/CV-RENZO-RAMOS.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)]
                           px-7 py-3 text-[0.8rem] font-semibold tracking-[0.06em] uppercase
                           rounded-sm hover:bg-[var(--accent2)] hover:-translate-y-0.5
                           transition-all duration-200"
              >
                Descargar CV →
              </a>
              <a
                href="https://github.com/case1490"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-[var(--text)]
                           px-7 py-3 text-[0.8rem] font-medium tracking-[0.06em] uppercase
                           border border-[var(--line2)] rounded-sm hover:border-[var(--text2)]
                           hover:text-[var(--accent)] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── TRAYECTORIA ── */}
        <div ref={addRef} className="reveal mt-28" style={{ transitionDelay: ".2s" }}>
          <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-10">
            <span className="block w-7 h-px bg-[var(--accent)]" />
            Trayectoria
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--line)]">
            {journey.map(({ year, type, role, place }) => (
              <motion.div
                key={role}
                className="relative bg-[var(--bg2)] p-8 group
                           hover:bg-[rgba(232,255,71,0.025)] transition-colors duration-200"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <span className="absolute top-6 right-6 text-[0.65rem] tracking-[0.12em] text-[var(--text3)]">
                  {year}
                </span>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)]
                                group-hover:w-full transition-all duration-300" />
                <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
                  {type}
                </div>
                <div className="font-['Syne'] text-base font-bold mb-1 text-[var(--text)]">
                  {role}
                </div>
                <div className="text-[0.83rem] text-[var(--text2)]">{place}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;