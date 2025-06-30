import { MdTouchApp } from "react-icons/md";

const CardPortfolio = ({ image, title, description, link }) => {
  return (
    <div className="book">
      <div className=" w-[90%]">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-[var(--BlueMain)] px-3 py-2 rounded-xl inline-block mt-4 hover:bg-[var(--OceanBlue)] transition-all"
        >
          Ver Sitio Web
        </a>
      </div>
      <div className="cover">
        <div className="flex flex-col h-full w-full">
          {/* Imagen que ocupa automáticamente el espacio disponible */}
          <div className="flex-1">
            <img
              src={image}
              alt="nombre"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenedor inferior (rojo) que ocupa el espacio restante */}
          <div className="flex items-center justify-between px-3 py-4">
            <div className="text-left">
              <h1 className="text-2xl font-bold">{title}</h1>
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
