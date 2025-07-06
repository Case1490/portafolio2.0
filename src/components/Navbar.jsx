import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactNumber = () => {
    const phoneNumber = "977139843";
    const message = encodeURIComponent("Quiero más información");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/10" : ""
        }`}
      >
        <div className="py-2 px-4 w-5/6 m-auto my-2 flex items-center justify-between">
          <div className="w-[150px]">
            <img src={Logo} alt="Logo Renzo Portafolio" className="w-full" />
          </div>

          {/* Menú xl+ */}
          <ul className="hidden xl:flex gap-x-8 text-white">
            {[
              "inicio",
              "acerca",
              "habilidades",
              "servicios",
              "portafolio",
              "contacto",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="nav-link">
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <a
            onClick={() => contactNumber()}
            className=" cursor-pointer btn-contact hidden xl:block py-2 px-3 rounded-full text-white uppercase"
          >
            Contacto
          </a>

          {/* Botón hamburguesa */}
          <button
            className="xl:hidden text-white text-2xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <FiMenu size={30} />
          </button>
        </div>
      </div>

      {/* Menú lateral con Framer Motion */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Fondo opaco */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
            />

            {/* Panel lateral */}
            <motion.div
              className="fixed right-0 top-0 h-full w-[70%] max-w-xs bg-gray-900 z-50 p-6 text-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-2xl cursor-pointer"
              >
                <AiOutlineClose size={30} />
              </button>

              <ul className="mt-12 flex flex-col gap-6 text-lg">
                {[
                  "inicio",
                  "acerca",
                  "habilidades",
                  "servicios",
                  "portafolio",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setShowMenu(false)}
                      className="relative after:block after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                onClick={() => contactNumber()}
                className="mt-8 inline-block bg-[var(--OrangeMain)] py-2 px-4 rounded-full text-white uppercase"
              >
                Contacto
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
