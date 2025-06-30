import AboutMeImage from "../assets/sobremi.jpg";
import Journey from "../components/Journey";

const AboutMe = () => {
  return (
    <div id="acerca">
      <div className="w-5/6 m-auto py-12 lg:py-24">
        <div className="text-center py-10 mb-6">
          <h1 className="title-page">Acerca de mí 👤</h1>
        </div>

        <div className="flex flex-col gap-y-10 lg:gap-y-0 justify-center lg:flex-row">
          <div className="relative w-[200px] lg:w-[350px] m-auto p-2 order-2 lg:order-1">
            {/* Borde izquierdo */}
            <div className="absolute top-0 left-0 w-[8px] h-full bg-[var(--OrangeMain)] z-0"></div>

            {/* Borde superior (mitad izquierda) */}
            <div className="absolute top-0 left-0 w-1/2 h-[8px] bg-[var(--OrangeMain)] z-0"></div>

            {/* Borde inferior (mitad izquierda) */}
            <div className="absolute bottom-0 left-0 w-1/2 h-[8px] bg-[var(--OrangeMain)] z-0"></div>

            {/* Imagen */}
            <img
              src={AboutMeImage}
              alt="Renzo Ramos"
              className="relative z-10 w-full object-cover"
            />
          </div>

          <div className="w-[95%] sm:w-5/6 lg:w-1/2 text-white m-auto space-y-8 order-1 lg:order-2">
            <h1 className="text-3xl font-bold uppercase">
              Hola! Soy Renzo Ramos
            </h1>
            <p className="text-sm lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquam earum voluptatibus natus eligendi similique odit aut
              repellat eveniet sit aperiam, optio expedita maiores incidunt
              tenetur facilis mollitia est consequatur!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos aliquam earum voluptatibus
              natus eligendi similique odit aut repellat eveniet sit aperiam,
              optio expedita maiores incidunt tenetur facilis mollitia est
              consequatur!
            </p>

            <div className="text-white space-y-2">
              <div className="flex">
                <span className="w-[80px] sm:w-[150px] font-bold">Nombre</span>
                <span>: Renzo Ramos</span>
              </div>
              <div className="flex">
                <span className="w-[80px] sm:w-[150px] font-bold">Edad</span>
                <span>: 22</span>
              </div>
              <div className="flex">
                <span className="w-[80px] sm:w-[150px] font-bold">
                  Dirección
                </span>
                <span>: Lima, Perú</span>
              </div>
              <div className="flex">
                <span className="w-[80px] sm:w-[150px] font-bold">
                  Teléfono
                </span>
                <span>: +51 977 139 843</span>
              </div>
              <div className="flex">
                <span className="w-[80px] sm:w-[150px] font-bold">Email</span>
                <span>: renzoramos414@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-end lg:justify-start">
              <a
                href="#"
                className="bg-[var(--OrangeMain)] inline-block py-2 px-3 rounded-full text-white uppercase font-bold"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        <Journey />
      </div>
    </div>
  );
};

export default AboutMe;
