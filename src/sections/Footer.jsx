import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  { label: "Sobre mí",   href: "#acerca"     },
  { label: "Skills",     href: "#habilidades" },
  { label: "Servicios",  href: "#servicios"   },
  { label: "Portafolio", href: "#portafolio"  },
  { label: "Contacto",   href: "#contacto"    },
];

const socials = [
  { icon: <FaGithub size={16} />,   href: "https://github.com/case1490",                          label: "GitHub"   },
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/renzo-ramos-586846270/",   label: "LinkedIn" },
  { icon: <FaWhatsapp size={16} />, href: "https://wa.me/51977139843",                            label: "WhatsApp" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Fila superior */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">

          {/* Logo + tagline */}
          <div>
            <a
              href="#inicio"
              className="font-['Syne'] text-lg font-extrabold tracking-tight text-[var(--text)]"
            >
              Renzo Ramos<span className="text-[var(--accent)]">.</span>
            </a>
            <p className="text-[0.75rem] text-[var(--text3)] mt-1 tracking-wide">
              Full Stack Developer — Lima, Perú
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text3)]
                             hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full
                           border border-[var(--line)] text-[var(--text3)]
                           hover:border-[var(--accent)] hover:text-[var(--accent)]
                           transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Línea divisora */}
        <div className="h-px bg-[var(--line)] mb-6" />

        {/* Fila inferior */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[0.72rem] text-[var(--text3)]">
            © {year} Renzo Ramos. Todos los derechos reservados.
          </p>
          <p className="text-[0.72rem] text-[var(--text3)]">
            Diseñado y desarrollado con{" "}
            <span className="text-[var(--accent)]">React</span> +{" "}
            <span className="text-[var(--accent)]">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;