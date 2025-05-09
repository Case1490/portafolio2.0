import Person from "../assets/persona.png";
import Stain from "../assets/circle.jpg";
import { FaComputer } from "react-icons/fa6";

const Presentation = () => {
  return (
    <div className="backgroundPresentation">
      <div className=" flex items-center justify-between w-5/6 m-auto pt-[90px]">
        {/* FIRST COLUMN */}
        <div className="w-[45%] space-y-4">
          <p className="flex items-center gap-x-2">
            <FaComputer /> Full stack developer
          </p>
          <h1 className="text-[var(--OrangeMain)] font-bold text-7xl">
            Hola, soy Renzo Ramos
          </h1>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            fugiat porro assumenda velit explicabo enim recusandae alias non eos
            excepturi.
          </p>

          <div className=" space-x-3 mt-8">
            <a
              href="#"
              className=" bg-[var(--OrangeMain)] text-white py-2 px-4 text-xl"
            >
              Contáctame
            </a>
            <a
              href="#"
              className=" bg-[var(--OceanBlue)] text-white py-2 px-4 text-xl"
            >
              Ver más
            </a>
          </div>
        </div>

        {/* SECOND COLUMN */}

        <div className="w-[350px]">
          <img src={Person} alt="Renzo Ramos" className="w-full shadow-image" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
