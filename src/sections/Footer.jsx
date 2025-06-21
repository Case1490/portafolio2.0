import Logo from "../assets/logo.png";

// IMPORT OF ICONS SOCIAL NETWORKS
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[var(--BlueSecond)]">
      <div className="py-6 w-5/6 m-auto text-white">
        <div className="flex items-center justify-between">
          <div className="w-[150px]">
            <img src={Logo} alt="Logo Renzo Portafolio" className="w-full" />
          </div>

          <ul className="flex gap-x-8">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Acerca de</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
            <li>
              <a href="">Servicios</a>
            </li>
            <li>
              <a href="">Portafolio</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>

          <div className="flex items-center gap-x-3">
            <FaFacebook size={25} />
            <FaLinkedin size={25} />
          </div>
        </div>
        <div className="text-center text-slate-500 mt-8">
          <p>Todos los derechos reservados | RenzoRamos 2025 &copy; </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
