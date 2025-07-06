// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdOutlineMonitor } from "react-icons/md";
import { FaCode, FaDatabase } from "react-icons/fa";
import { IoIosCloudUpload } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import { PiPlugsConnectedFill } from "react-icons/pi";
import CardService from "../components/CardService";

const servicios = [
  {
    icono: MdOutlineMonitor,
    titulo: "Diseño web (Frontend)",
    descripcion:
      "Interfaces modernas, rápidas y responsivas con React y Tailwind CSS.",
  },
  {
    icono: FaCode,
    titulo: "Programación del servidor",
    descripcion: "APIs seguras y eficientes usando Node.js, Express y más.",
  },
  {
    icono: FaDatabase,
    titulo: "Bases de datos",
    descripcion: "Organización y optimización de datos con MongoDB y MySQL.",
  },
  {
    icono: IoIosCloudUpload,
    titulo: "Despliegue y Hosting",
    descripcion: "Publicación en servidores como Vercel, Netlify o AWS.",
  },
  {
    icono: BsFillShieldLockFill,
    titulo: "Optimización y mantenimiento",
    descripcion: "Mejora continua en velocidad, seguridad y actualizaciones.",
  },
  {
    icono: PiPlugsConnectedFill,
    titulo: "Integración de APIs",
    descripcion:
      "Conecto tu web con servicios externos como pagos, mapas o redes sociales.",
  },
];

const Servicios = () => {
  return (
    <div
      className="w-5/6 m-auto py-12 lg:py-24 text-white text-center"
      id="servicios"
    >
      {/* Animación del título y párrafo */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="title-page">Todo lo que sé hacer 👨‍💻</h1>
        <p className="text-sm lg:text-lg">
          Estos son los servicios que ofrezco, enfocados en brindar soluciones
          efectivas y adaptadas a las necesidades de cada proyecto o cliente,
          con el objetivo de lograr resultados de calidad y alto impacto.
        </p>
      </motion.div>

      {/* Tarjetas animadas en cascada */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <CardService
              icono={servicio.icono}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Servicios;
