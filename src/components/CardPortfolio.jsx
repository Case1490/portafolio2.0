import PortadaPrueba from "../assets/portafolio/comideli.png";
import { MdTouchApp } from "react-icons/md";
import { FaAngular } from "react-icons/fa";

const CardPortfolio = () => {
  return (
    <div className="book">
      <div className=" w-[90%]">
        <h1 className="text-xl font-bold mb-2">Titulo del proyecto</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          similique laborum assumenda maiores ratione totam quam commodi odio
          dolores labore.
        </p>
        <div className="flex items-center justify-center gap-x-4 my-5">
          <FaAngular size={28} />
          <FaAngular size={28} />
          <FaAngular size={28} />
          <FaAngular size={28} />
        </div>
        <a href="" className="bg-[var(--BlueMain)] px-3 py-2 rounded-xl">
          Ver Sitio Web
        </a>
      </div>
      <div className="cover">
        <div className="flex flex-col h-full w-full">
          {/* Imagen que ocupa automáticamente el espacio disponible */}
          <div className="flex-1">
            <img
              src={PortadaPrueba}
              alt="nombre"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenedor inferior (rojo) que ocupa el espacio restante */}
          <div className="flex items-center justify-between px-3 py-4">
            <div className="text-left">
              <h1 className="text-2xl font-bold">Comideli</h1>
              <p>Tienda de comida rápida</p>
            </div>

            <div className="bg-[var(--OrangeMain)] p-2 rounded-full border border-white">
              <MdTouchApp size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
