import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    const openWhatsApp = () => {
        const msg = encodeURIComponent("Hola Renzo, quiero más información");
        window.open(`https://wa.me/51977139843?text=${msg}`, "_blank");
    };

    return (
        <section
            id="inicio"
            className="relative min-h-dvh pb-10 flex flex-col justify-end px-8 md:px-16 overflow-hidden"
        >
            {/* Grid de fondo */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    maskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
                }}
            />

            {/* Número decorativo de fondo */}
            <div
                aria-hidden="true"
                className="absolute top-36 right-8 md:right-16 z-0 font-['Syne'] font-extrabold leading-none select-none"
                style={{
                    fontSize: "clamp(120px, 20vw, 280px)",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                }}
            >
                RR
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

                {/* Izquierda — texto */}
                <div className="max-w-2xl">

                    {/* Tag */}
                    <motion.p
                        className="flex items-center gap-3 text-[0.75rem] tracking-[0.15em] uppercase text-[var(--accent)] mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block w-10 h-px bg-[var(--accent)]" />
                        Full Stack Developer — Lima, Perú
                    </motion.p>

                    {/* Nombre */}
                    <motion.h1
                        className="font-['Syne'] font-extrabold leading-[0.92] tracking-tight mb-8"
                        style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        Renzo
                        <br />
                        <em className="font-normal not-italic" style={{ color: "var(--text2)" }}>
                            Ramos
                        </em>
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        className="text-[var(--text2)] text-base md:text-lg leading-relaxed max-w-sm mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Construyo experiencias web{" "}
                        <strong className="text-[var(--text)] font-medium">
                            rápidas, funcionales y con carácter
                        </strong>
                        . Especializado en React/Next.js, NestJS y PostgreSQL con TypeScript.
                    </motion.p>

                    {/* Botones */}
                    <motion.div
                        className="flex flex-wrap gap-3 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        <a href="#portafolio"
                            className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] 
             px-8 py-3 text-[0.85rem] font-semibold tracking-[0.05em] uppercase 
             rounded-sm hover:bg-[var(--accent2)] hover:-translate-y-0.5 
             transition-all duration-200"
                        >
                            Ver proyectos →
                        </a>
                        <button
                            onClick={openWhatsApp}
                            className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] 
             px-8 py-3 text-[0.85rem] font-medium tracking-[0.05em] uppercase 
             border border-[var(--line2)] rounded-sm hover:border-[var(--text2)] 
             hover:text-[var(--accent)] transition-all duration-200"
                        >
                            Trabajemos juntos
                        </button>
                    </motion.div>

                    {/* Redes sociales */}
                    <motion.div
                        className="flex items-center gap-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <span className="text-[0.68rem] tracking-[0.15em] uppercase text-[var(--text3)]">
                            Sígueme
                        </span>
                        <div className="w-8 h-px bg-[var(--line2)]" />
                        <a
                            href="https://github.com/case1490"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/renzo-ramos-586846270/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </motion.div>
                </div>

                {/* Derecha — stats */}
                <motion.div
                    className="hidden lg:flex flex-col gap-6 text-right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    {[
                        { num: "11+", label: "Proyectos" },
                        { num: "3+", label: "Años exp." },
                        { num: "12", label: "Tecnologías" },
                    ].map(({ num, label }) => (
                        <div key={label} className="flex flex-col">
                            <span
                                className="font-['Syne'] font-extrabold leading-none"
                                style={{ fontSize: "2.5rem", color: "var(--accent)" }}
                            >
                                {num}
                            </span>
                            <span className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text3)] mt-1">
                                {label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text3)]">
                    scroll
                </span>
                <div
                    className="w-px h-14 origin-top"
                    style={{
                        background: "linear-gradient(var(--accent), transparent)",
                        animation: "scrollPulse 2s ease-in-out infinite",
                    }}
                />
            </motion.div>

            {/* Animación del scroll indicator */}
            <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.2); }
        }
      `}</style>
        </section>
    );
};

export default Hero;