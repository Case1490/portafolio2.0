// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="habilidades">
      <div className="text-center w-5/6 text-white m-auto py-12 lg:py-24">
        {/* Animamos solo el encabezado */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="title-page">Habilidades 🏃‍♂️‍➡️</h1>
          <p className="text-sm lg:text-lg">
            A lo largo de mi experiencia he desarrollado una serie de
            habilidades que me permiten enfrentar desafíos con eficiencia y
            creatividad. Estas capacidades son el resultado de años de
            formación, práctica y constante aprendizaje.
          </p>
        </motion.div>

        {/* El resto ya está animado, no lo tocamos */}
        <div className="containerTarget">
          <div className="target" id="angular"></div>
          <div className="target" id="bootstrap"></div>
          <div className="target" id="figma"></div>
          <div className="target" id="firebase"></div>
          <div className="target" id="git"></div>
          <div className="target" id="mongodb"></div>
          <div className="target" id="mysql"></div>
          <div className="target" id="node"></div>
          <div className="target" id="python"></div>
          <div className="target" id="react"></div>
          <div className="target" id="tailwind"></div>
          <div className="target" id="vue"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
