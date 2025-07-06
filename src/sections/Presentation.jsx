// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SocialNetworks from "../components/SocialNetworks";
import Profile from "../assets/perfil.png";

const Presentation = () => {
  return (
    <div className="backgroundPresentation" id="inicio">
      <div className="w-3/4 lg:w-1/2 m-auto text-center">
        <div className="space-y-4 uppercase">
          {/* Animación de la imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-[120px] m-auto mb-2 rounded-full overflow-hidden"
          >
            <img src={Profile} alt="Renzo Ramos" className="w-full" />
          </motion.div>

          {/* Animación del nombre */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[var(--OrangeMain)] font-bold text-3xl sm:text-5xl md:text-7xl"
          >
            Renzo Ramos
          </motion.h1>

          {/* Animación del subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white text-md sm:text-xl"
          >
            soy un apasionado programador web
          </motion.p>
        </div>

        <SocialNetworks />
        <div className="scroll-down"></div>
      </div>
    </div>
  );
};

export default Presentation;
