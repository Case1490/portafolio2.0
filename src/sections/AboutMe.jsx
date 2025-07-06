// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AboutMeImage from "../assets/sobremi.jpg";
import Journey from "../components/Journey";

// IMPORT CV
import CVDocument from "/CV RENZO RAMOS.pdf";

const AboutMe = () => {
  const handleDownloadCV = () => {
    window.open(CVDocument);
  };

  return (
    <div id="acerca">
      <div className="w-5/6 m-auto py-12 lg:py-24">
        <motion.div
          className="text-center pb-4 md:py-10 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="title-page">Acerca de mí 👤</h1>
        </motion.div>

        <div className="flex flex-col gap-y-10 lg:gap-y-0 justify-center lg:flex-row">
          <motion.div
            className="relative w-[200px] lg:w-[350px] m-auto p-2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Bordes decorativos */}
            <div className="absolute top-0 left-0 w-[8px] h-full bg-[var(--OrangeMain)] z-0"></div>
            <div className="absolute top-0 left-0 w-1/2 h-[8px] bg-[var(--OrangeMain)] z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-[8px] bg-[var(--OrangeMain)] z-0"></div>

            <img
              src={AboutMeImage}
              alt="Renzo Ramos"
              className="relative z-10 w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-[95%] sm:w-5/6 lg:w-1/2 text-white m-auto space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold uppercase">
              Hola! Soy Renzo Ramos
            </h1>
            <p className="text-sm lg:text-lg">
              Soy Renzo Ramos, desarrollador web full stack con experiencia en
              React, Node.js y MySQL. Me apasiona crear soluciones útiles y
              funcionales, combinando diseño, lógica y rendimiento. Siempre
              busco mejorar, aprender y aportar valor con cada línea de código.
            </p>

            <div className="text-white space-y-2">
              {/* Datos personales */}
              {[
                ["Nombre", "Renzo Ramos"],
                ["Edad", "22"],
                ["Dirección", "Lima, Perú"],
                ["Teléfono", "+51 977 139 843"],
                ["Email", "renzoramos414@gmail.com"],
              ].map(([label, value], i) => (
                <motion.div
                  className="flex"
                  key={label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <span className="w-[80px] sm:w-[150px] font-bold">
                    {label}
                  </span>
                  <span>: {value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-end lg:justify-start"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={handleDownloadCV}
                className="bg-[var(--OrangeMain)] inline-block py-2 px-3 rounded-full text-white uppercase font-bold cursor-pointer"
              >
                Visualizar CV
              </button>
            </motion.div>
          </motion.div>
        </div>

        <Journey />
      </div>
    </div>
  );
};

export default AboutMe;
