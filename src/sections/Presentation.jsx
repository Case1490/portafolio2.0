import SocialNetworks from "../components/SocialNetworks";

const Presentation = () => {
  return (
    <div className="backgroundPresentation">
      <div className=" w-1/2 m-auto text-center">
        <div className=" space-y-4 uppercase">
          <h1 className="text-[var(--OrangeMain)] font-bold text-7xl">
            Renzo Ramos
          </h1>
          <p className="text-white text-xl">
            soy un apasionado programador web
          </p>
        </div>

        <SocialNetworks />
        <div class="scroll-down"></div>
      </div>
    </div>
  );
};

export default Presentation;
