import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Sobre mí",   href: "#acerca"      },
  { label: "Skills",     href: "#habilidades"  },
  { label: "Servicios",  href: "#servicios"    },
  { label: "Portafolio", href: "#portafolio"   },
  { label: "Contacto",   href: "#contacto"     },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hola Renzo, quiero más información");
    window.open(`https://wa.me/51977139843?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* ── NAVBAR PRINCIPAL ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "backdrop-blur-md bg-[rgba(8,8,8,0.85)] border-b border-[var(--line)] py-3"
            : "py-5"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#inicio"
            className="font-['Syne'] text-[1.1rem] font-extrabold tracking-tight text-[var(--text)] no-underline"
          >
            RR<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Links — desktop */}
          <ul className="hidden xl:flex gap-10 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.78rem] tracking-[0.12em] uppercase text-[var(--text2)]
                             hover:text-[var(--accent)] transition-colors duration-200 no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <button
            onClick={openWhatsApp}
            className="hidden xl:block text-[0.78rem] tracking-[0.1em] uppercase font-semibold
                       bg-[var(--accent)] text-[var(--bg)] px-5 py-2 rounded-sm
                       hover:bg-[var(--accent2)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Hablemos →
          </button>

          {/* Hamburguesa — mobile */}
          <button
            className="xl:hidden text-[var(--text)] p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FiMenu size={26} />
          </button>
        </div>
      </nav>

      {/* ── MENÚ MOBILE ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-[98]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs z-[99]
                         bg-[var(--bg2)] border-l border-[var(--line)] px-8 py-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                className="absolute top-5 right-5 text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
                onClick={closeMenu}
                aria-label="Cerrar menú"
              >
                <FiX size={26} />
              </button>

              <ul className="mt-12 flex flex-col gap-7 list-none">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={closeMenu}
                      className="font-['Syne'] text-2xl font-bold text-[var(--text)]
                                 hover:text-[var(--accent)] transition-colors no-underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => { closeMenu(); openWhatsApp(); }}
                className="mt-10 bg-[var(--accent)] text-[var(--bg)] text-sm font-semibold
                           uppercase tracking-wider px-5 py-3 rounded-sm
                           hover:bg-[var(--accent2)] transition-colors"
              >
                Hablemos →
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;