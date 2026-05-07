import { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const revealRefs = useRef([]);
  const [form, setForm] = useState({ name: "", lastname: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);
  const [validMsg, setValidMsg] = useState("");

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    const showValidError = (msg) => {
      setStatus("validError");
      setValidMsg(msg);
      setTimeout(() => setStatus(null), 4000); // ← desaparece en 4s
    };

    if (!form.name.trim() || !form.lastname.trim()) {
      showValidError("Por favor ingresa tu nombre y apellido.");
      return false;
    }
    if (!emailRegex.test(form.email)) {
      showValidError("El correo electrónico no es válido.");
      return false;
    }
    if (form.phone && !phoneRegex.test(form.phone.replace(/\s/g, ""))) {
      showValidError("El teléfono solo debe contener números (7 a 15 dígitos).");
      return false;
    }
    if (form.message.trim().length < 10) {
      showValidError("El mensaje debe tener al menos 10 caracteres.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_lastname: form.lastname,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const contactLinks = [
    {
      icon: <MdEmail size={18} />,
      label: "Email",
      value: "renzoramos414@gmail.com",
      href: "mailto:renzoramos414@gmail.com",
    },
    {
      icon: <FaWhatsapp size={18} />,
      label: "WhatsApp",
      value: "+51 977 139 843",
      href: "https://wa.me/51977139843?text=Hola%20Renzo%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      value: "Renzo Ramos",
      href: "https://www.linkedin.com/in/renzo-ramos-586846270/",
    },
  ];

  const inputClass = `w-full bg-[var(--bg3)] border border-[var(--line)] text-[var(--text)]
    placeholder:text-[var(--text3)] px-4 py-3 text-sm rounded-sm outline-none
    focus:border-[var(--accent)] transition-colors duration-200`;

  return (
    <section id="contacto" className="bg-[var(--bg2)]">
      <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">

        {/* ── ENCABEZADO ── */}
        <div ref={addRef} className="reveal text-center mb-20">
          <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            <span className="block w-7 h-px bg-[var(--accent)]" />
            Contacto
            <span className="block w-7 h-px bg-[var(--accent)]" />
          </p>
          <h2 className="font-['Syne'] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            ¿Tienes un{" "}
            <em className="font-normal not-italic text-[var(--text2)]">proyecto</em>{" "}
            en mente?
          </h2>
        </div>

        {/* ── LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info izquierda */}
          <div ref={addRef} className="reveal flex flex-col gap-8">
            <p className="text-[var(--text2)] text-base leading-relaxed">
              Estoy disponible para freelance, proyectos a largo plazo o incorporarme
              a un equipo. Si tienes una idea,{" "}
              <strong className="text-[var(--text)] font-medium">cuéntamela</strong>{" "}
              — construyamos algo bueno juntos.
            </p>

            {/* Links de contacto */}
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-item flex items-center gap-4 px-5 py-4
                             bg-[var(--bg3)] border border-[var(--line)]
                             hover:border-[var(--line2)] transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-full bg-[rgba(232,255,71,0.08)] flex items-center
                                  justify-center text-[var(--accent)] flex-shrink-0
                                  group-hover:bg-[rgba(232,255,71,0.15)] transition-colors duration-200">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[0.62rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                      {label}
                    </div>
                    <div className="text-sm text-[var(--text)] mt-0.5">{value}</div>
                  </div>
                  <span className="ml-auto text-[var(--text3)] group-hover:text-[var(--accent)]
                                   group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Disponibilidad */}
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[0.75rem] tracking-[0.1em] uppercase text-[var(--text2)]">
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>

          {/* Formulario derecha */}
          <form
            ref={addRef}
            onSubmit={handleSubmit}
            className="reveal flex flex-col gap-4"
            style={{ transitionDelay: ".15s" }}
          >
            {/* Fila nombre / apellido */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                  Nombres
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Renzo"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Ramos"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Fila teléfono / email */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="977139843"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="cliente@gmail.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                Mensaje
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                className={inputClass + " resize-none"}
              />
            </div>

            {/* Status */}
            {status === "validError" && (
              <div className="text-sm px-4 py-3 rounded-sm bg-[rgba(216,90,48,0.1)] border border-[rgba(216,90,48,0.3)] text-[#f09575]">
                ⚠ {validMsg}
              </div>
            )}
            {status === "success" && (
              <div className="text-sm px-4 py-3 rounded-sm bg-[rgba(29,158,117,0.1)] border border-[rgba(29,158,117,0.3)] text-[#5dcaa5]">
                ✓ Mensaje enviado. Te contactaré pronto.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm px-4 py-3 rounded-sm bg-[rgba(216,90,48,0.1)] border border-[rgba(216,90,48,0.3)] text-[#f09575]">
                ✕ No se pudo enviar. Escríbeme a renzoramos414@gmail.com
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)]
                         px-8 py-3 text-[0.82rem] font-semibold tracking-[0.06em] uppercase
                         rounded-sm hover:bg-[var(--accent2)] hover:-translate-y-0.5
                         transition-all duration-200 self-start disabled:opacity-50
                         disabled:pointer-events-none"
            >
              {loading ? "Enviando..." : "Enviar mensaje →"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;