// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // éxito o error
  const [loading, setLoading] = useState(false); // indicador de envío
  const [delayedNotice, setDelayedNotice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setDelayedNotice(false); // Reset al mensaje de espera

    // Temporizador de 3 segundos para mostrar mensaje de espera
    const delayTimer = setTimeout(() => {
      if (loading) setDelayedNotice(true);
    }, 3000);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ ${data.message}`);
        setFormData({
          name: "",
          lastname: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(`❌ ${data.message || "Error al enviar el mensaje."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ No se pudo enviar el mensaje.");
    } finally {
      clearTimeout(delayTimer); // Detiene el temporizador
      setLoading(false);
      setDelayedNotice(false); // Oculta el mensaje si se mostró
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div id="contacto">
      <div className="w-5/6 py-12 lg:py-24 m-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-around">
        <motion.div
          className="w-full lg:w-1/2 text-white lg:text-left text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="title-page">Contáctame 📲</h1>
          <p>
            <span className="font-bold text-2xl">
              ¿Tienes un proyecto en mente?
            </span>{" "}
            <br /> Estoy disponible para colaborar en nuevos desafíos. Si buscas
            a alguien comprometido, creativo y con experiencia en desarrollo
            web, no dudes en escribirme. ¡Hablemos y hagamos realidad tus ideas!
          </p>
          <div className="border rounded-xl mx-auto lg:mx-0 max-w-[400px] mt-10 px-4 py-6 space-y-6">
            <div className="flex items-center gap-x-3 text-[var(--OrangeMain)]">
              <MdEmail size={30} />
              <h1 className="text-sm sm:text-xl text-white">
                renzoramos414@gmail.com
              </h1>
            </div>
            <div className="flex items-center gap-x-3 text-[var(--OrangeMain)]">
              <FaPhoneAlt size={28} />
              <h1 className="text-sm sm:text-xl text-white">+51 977 139 843</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-white w-full lg:w-2/5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            className="mx-auto p-6 rounded-xl border shadow-md space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nombres
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Renzo"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Ramos"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="977139843"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="cliente@gmail.com"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe un mensaje..."
                rows={4}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>

            {status && (
              <p className="text-sm text-center font-semibold">{status}</p>
            )}

            {delayedNotice && (
              <p className="text-sm text-center text-yellow-300 font-semibold">
                ⏳ Estamos procesando tu mensaje, por favor espera...
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2 btn-contact text-white rounded-lg cursor-pointer disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
