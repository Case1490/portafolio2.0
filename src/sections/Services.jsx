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
    <div className="w-5/6 m-auto py-24 text-center">
      <h2 className="title-page">Todo lo que sé hacer 👨‍💻</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <CardService
            key={index}
            icono={servicio.icono}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default Servicios;
