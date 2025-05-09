import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className=" bg-[var(--BlueMain)] py-2 px-4 w-5/6 m-auto my-2 flex items-center justify-between rounded-full">
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
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Resumen</a>
          </li>
          <li>
            <a href="">Portafolio</a>
          </li>
        </ul>

        <a
          href="#"
          className="bg-[var(--OrangeMain)] py-2 px-3 rounded-full text-white font-bold"
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Navbar;
