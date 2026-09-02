import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Importa todos los logos
import reactLogo from "../assets/habilidades/react.png";
import nextjsLogo from "../assets/habilidades/nextjs.svg";
import angularLogo from "../assets/habilidades/angular.png";
import tailwindLogo from "../assets/habilidades/tailwind.png";
import nodeLogo from "../assets/habilidades/node.png";
import nestjsLogo from "../assets/habilidades/nestjs.svg";
import typescriptLogo from "../assets/habilidades/typescript.svg";
import trpcLogo from "../assets/habilidades/trpc.svg";
import mysqlLogo from "../assets/habilidades/mysql.png";
import postgreSQLLogo from '../assets/habilidades/postgresql.png'
import prismaLogo from "../assets/habilidades/prisma.svg";
import firebaseLogo from "../assets/habilidades/firebase.png";
import dockerLogo from "../assets/habilidades/docker.svg";
import gitLogo from "../assets/habilidades/git.png";
import figmaLogo from "../assets/habilidades/figma.png";
import bootstrapLogo from "../assets/habilidades/bootstrap.png";
import gcpLogo from "../assets/habilidades/gcp.svg";

const skills = [
    // Frontend
    { name: "React", cat: "Frontend", logo: reactLogo },
    { name: "Next.js", cat: "Frontend", logo: nextjsLogo },
    { name: "Angular", cat: "Frontend", logo: angularLogo },
    { name: "Tailwind CSS", cat: "Styling", logo: tailwindLogo },
    // Lenguaje
    { name: "TypeScript", cat: "Lenguaje", logo: typescriptLogo },
    // Backend
    { name: "Node.js", cat: "Backend", logo: nodeLogo },
    { name: "NestJS", cat: "Backend", logo: nestjsLogo },
    { name: "tRPC", cat: "Backend", logo: trpcLogo },
    // Bases de datos
    { name: "MySQL", cat: "Base de datos", logo: mysqlLogo },
    { name: "PostreSQL", cat: "Base de datos", logo: postgreSQLLogo },
    { name: "Prisma", cat: "ORM", logo: prismaLogo },
    // Tools
    { name: "Firebase", cat: "BaaS / Cloud", logo: firebaseLogo },
    { name: "GCP", cat: "Cloud", logo: gcpLogo },
    { name: "Docker", cat: "DevOps", logo: dockerLogo },
    { name: "Git", cat: "Control versiones", logo: gitLogo },
    { name: "Figma", cat: "Diseño UI/UX", logo: figmaLogo },
    { name: "Bootstrap", cat: "Styling", logo: bootstrapLogo },
];

const Skills = () => {
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
        <section id="habilidades" className="bg-[var(--bg)]">
            <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">

                {/* ── ENCABEZADO ── */}
                <div ref={addRef} className="reveal text-center mb-20">
                    <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
                        <span className="block w-7 h-px bg-[var(--accent)]" />
                        Tech Stack
                        <span className="block w-7 h-px bg-[var(--accent)]" />
                    </p>
                    <h2 className="font-['Syne'] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        Herramientas que{" "}
                        <em className="font-normal not-italic text-[var(--text2)]">domino</em>
                    </h2>
                </div>

                {/* ── GRID DE SKILLS ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[var(--line)]">
                    {skills.map(({ name, cat, logo }, i) => (
                        <motion.div
                            key={name}
                            ref={addRef}
                            className="reveal relative bg-[var(--bg)] p-7 flex flex-col gap-4 group skill-card
                         hover:bg-[var(--bg3)] transition-colors duration-200 overflow-hidden"
                            style={{ transitionDelay: `${i * 0.04}s` }}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        >
                            {/* Línea acento bottom */}
                            <div className="skill-line absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300" />

                            {/* Número decorativo de fondo */}
                            <span
                                className="absolute top-3 right-3 font-['Syne'] font-extrabold text-5xl
                           leading-none select-none pointer-events-none"
                                style={{ color: "rgba(255,255,255,0.03)" }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            {/* Logo */}
                            <img
                                src={logo}
                                alt={name}
                                className="w-9 h-9 object-contain skill-img"
                                style={{ filter: "grayscale(1) brightness(0.8)" }}
                                onMouseEnter={() => { }}
                                ref={el => {
                                    if (el) {
                                        el.closest('.group')?.addEventListener('mouseenter', () => {
                                            el.style.filter = 'grayscale(0) brightness(1)';
                                        });
                                        el.closest('.group')?.addEventListener('mouseleave', () => {
                                            el.style.filter = 'grayscale(1) brightness(0.8)';
                                        });
                                    }
                                }}
                            />

                            {/* Nombre y categoría */}
                            <div>
                                <div className="font-['Syne'] text-sm font-bold tracking-wide text-[var(--text)]">
                                    {name}
                                </div>
                                <div className="text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text3)] mt-0.5">
                                    {cat}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── NOTA INFERIOR ── */}
                <div ref={addRef} className="reveal mt-14 flex items-center justify-center gap-4">
                    <div className="flex-1 h-px bg-[var(--line)]" />
                    <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[var(--text3)] whitespace-nowrap">
                        Y siempre aprendiendo más
                    </p>
                    <div className="flex-1 h-px bg-[var(--line)]" />
                </div>

            </div>
        </section>
    );
};

export default Skills;