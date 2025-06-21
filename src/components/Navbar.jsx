import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/10" : ""
      }`}
    >
      <div className="py-2 px-4 w-5/6 m-auto my-2 flex items-center justify-between">
        <div className="w-[150px]">
          <img src={Logo} alt="Logo Renzo Portafolio" className="w-full" />
        </div>

        <ul className="flex gap-x-8 text-white">
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

        <a
          href="#"
          className="bg-[var(--OrangeMain)] py-2 px-3 rounded-full text-white uppercase"
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Navbar;
