import SocialNetworks from "../components/SocialNetworks";

import Profile from "../assets/perfil.png";

const Presentation = () => {
  return (
    <div className="backgroundPresentation" id="inicio">
      <div className=" w-3/4 lg:w-1/2 m-auto text-center">
        <div className=" space-y-4 uppercase">
          <div className="w-[120px] m-auto mb-2 rounded-full overflow-hidden">
            <img src={Profile} alt="Renzo Ramos" className="w-full" />
          </div>
          <h1 className="text-[var(--OrangeMain)] font-bold text-3xl sm:text-5xl md:text-7xl">
            Renzo Ramos
          </h1>
          <p className="text-white text-md sm:text-xl">
            soy un apasionado programador web
          </p>
        </div>

        <SocialNetworks />
        <div className="scroll-down"></div>
      </div>
    </div>
  );
};

export default Presentation;
