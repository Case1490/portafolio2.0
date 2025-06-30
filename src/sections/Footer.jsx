import Logo from "../assets/logo.png";

// IMPORT OF ICONS SOCIAL NETWORKS
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[var(--BlueSecond)]">
      <div className="py-6 w-5/6 m-auto text-white">
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-between">
          <div className="w-[150px]">
            <img src={Logo} alt="Logo Renzo Portafolio" className="w-full" />
          </div>

          <ul className="flex flex-col text-center space-y-6 sm:space-y-0 sm:flex-row gap-x-8">
            <li>
              <a href="#inicio" className="nav-link">
                Inicio
              </a>
            </li>
            <li>
              <a href="#acerca" className="nav-link">
                Acerca
              </a>
            </li>
            <li>
              <a href="#habilidades" className="nav-link">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#servicios" className="nav-link">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portafolio" className="nav-link">
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contacto" className="nav-link">
                contacto
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-x-3">
            <a
              href="https://www.facebook.com/renzoramos414"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/renzo-ramos-586846270/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
        <div className="text-center text-slate-500 mt-8 mb-4">
          <p>
            &copy; {new Date().getFullYear()} Renzo Ramos. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
