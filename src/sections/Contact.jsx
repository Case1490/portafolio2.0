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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes enviar los datos al backend o API
  };

  return (
    <div id="contacto">
      <div className="w-5/6 py-12 lg:py-24 m-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-around">
        <div className="w-full lg:w-1/2 text-white lg:text-left text-center">
          <h1 className="title-page">Contáctame 📲</h1>
          <p>
            <b>¿Tienes un proyecto en mente?</b> <br /> Estoy disponible para
            colaborar en nuevos desafíos. Si buscas a alguien comprometido,
            creativo y con experiencia en desarrollo web, no dudes en
            escribirme. ¡Hablemos y hagamos realidad tus ideas!
          </p>
          <div className="border rounded-xl mx-auto lg:mx-0 max-w-[400px] mt-10 px-4 py-6 space-y-6">
            <div className="flex items-center gap-x-3 text-[var(--OrangeMain)]">
              <MdEmail size={30} />
              <h1 className="text-xl text-white">renzoramos414@gmail.com</h1>
            </div>
            <div className="flex items-center gap-x-3 text-[var(--OrangeMain)]">
              <FaPhoneAlt size={28} />
              <h1 className="text-xl text-white">+51 977 139 843</h1>
            </div>
          </div>
        </div>
        <div className="text-white w-full lg:w-2/5">
          <form
            onSubmit={handleSubmit}
            className=" mx-auto p-6 rounded-xl border shadow-md space-y-4"
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
                  placeholder="contact@email.com"
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
                  placeholder="(245) 245 - 1345"
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
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please write your message..."
                rows={4}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 btn-contact text-white rounded-lg cursor-pointer"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
