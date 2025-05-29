import AboutMeImage from "../assets/sobremi.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="w-5/6 m-auto py-24">
        <div className="text-center py-10 mb-6">
          <h1 className="text-3xl font-bold uppercase text-[var(--OrangeMain)] border-b-4 mx-auto inline-block">
            Acerca de mí
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[350px] m-auto p-2">
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

          <div className="w-1/2 text-white m-auto space-y-8">
            <h1 className="text-3xl font-bold uppercase">
              Hola! Soy Renzo Ramos
            </h1>
            <p>
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
                <span className="w-[150px] font-bold">Nombre</span>
                <span>: Renzo Ramos</span>
              </div>
              <div className="flex">
                <span className="w-[150px] font-bold">Edad</span>
                <span>: 22</span>
              </div>
              <div className="flex">
                <span className="w-[150px] font-bold">Dirección</span>
                <span>: Lima, Perú</span>
              </div>
              <div className="flex">
                <span className="w-[150px] font-bold">Teléfono</span>
                <span>: +51 977 139 843</span>
              </div>
              <div className="flex">
                <span className="w-[150px] font-bold">Email</span>
                <span>: renzoramos414@gmail.com</span>
              </div>
            </div>

            <a
              href="#"
              className="bg-[var(--OrangeMain)] py-2 px-3 rounded-full text-white uppercase font-bold"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
