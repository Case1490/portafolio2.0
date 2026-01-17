// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CardPortfolio from "../components/CardPortfolio";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// IMPORT IMAGES OF PORTFOLIO
import DrCardenas from "../assets/portafolio/doctorCardenas.png";
import PropositoCreativo from "../assets/portafolio/propositocreativo.png";
import LaTaberna from "../assets/portafolio/lataberna.png";
import Webberyl from "../assets/portafolio/webberyl.jpg";
import FutechWeb from "../assets/portafolio/futechweb.png";
import Jevic from "../assets/portafolio/jevic.png";
import Prinfer from "../assets/portafolio/prinfer.png";
import DevTree from "../assets/portafolio/devtree.png";
import ApiPais from "../assets/portafolio/api_pais.png";
import Comideli from "../assets/portafolio/comideli.png";
import Pokedex from "../assets/portafolio/pokedex.png";

const dataPortfolio = [
  {
    image: DrCardenas,
    title: "Dr Cárdenas Cirujano Oncólogo",
    description:
      "Sitio web informativo y accesible para un cirujano oncólogo, destacando experiencia, tratamientos y contacto directo",
    link: "https://cardenasmedical.com/",
  },
  {
    image: PropositoCreativo,
    title: "Agencia de Publicidad Propósito Creativo",
    description:
      "Página moderna y dinámica para agencia de marketing, enfocada en creatividad, estrategias digitales y crecimiento de marcas.",
    link: "https://agenciadepublicidadpropositocreativo.com/",
  },
  {
    image: LaTaberna,
    title: "Restobar La Taberna",
    description:
      "Página de Restobar moderno con comida fusión, cocteles únicos, música en vivo y ambiente acogedor para compartir.",
    link: "https://latabernarestobar.netlify.app/",
  },
  {
    image: Webberyl,
    title: "Webberyl | Desarrollo de páginas web",
    description:
      "Sitio profesional de servicios en diseño web y flyers, enfocado en impulsar marcas con soluciones visuales y efectivas.",
    link: "https://webberyl.netlify.app/",
  },
  {
    image: FutechWeb,
    title: "Futech | Motos eléctricas",
    description:
      "Tienda online de motos eléctricas, con catálogo moderno, detalles técnicos, opciones de financiamiento y atención personalizada.",
    link: "https://futechperu.com/",
  },
  {
    image: Jevic,
    title: "JevicTecnology",
    description:
      "Tienda virtual de productos tecnológicos, con variedad, precios competitivos, especificaciones claras y experiencia de compra intuitiva.",
    link: "https://jevictecnology.com/",
  },
  {
    image: Prinfer,
    title: "Grupo Prinfer",
    description:
      "Tienda online de productos industriales, especializada en herramientas, equipos y suministros con catálogo completo y atención personalizada.",
    link: "https://amazing-frangipane-853ae3.netlify.app/",
  },
  {
    image: DevTree,
    title: "DevTree",
    description:
      "Plataforma tipo DevTree para compartir enlaces y redes sociales en un solo perfil personalizable y fácil de usar.",
    link: "https://renzoramos-devtree.netlify.app/",
  },
  {
    image: ApiPais,
    title: "Api País",
    description:
      "Aplicación web que muestra países y sus detalles mediante consumo de API, con diseño claro e información organizada dinámicamente.",
    link: "https://case1490.github.io/API-pais/",
  },
  {
    image: Comideli,
    title: "Comideli",
    description:
      "Sección interactiva para simular pedidos de comida, con menú dinámico, selección personalizada y cálculo automático del total.",
    link: "https://comideli.netlify.app/",
  },
  {
    image: Pokedex,
    title: "Pokedex",
    description:
      "Pokedex digital con buscador interactivo, detalles de cada Pokémon, tipos, estadísticas y diseño visual atractivo.",
    link: "https://case1490.github.io/pokedex/",
  },
];

const Portfolio = () => {
  return (
    <div id="portafolio">
      <div className="w-[90%] m-auto py-12 lg:py-24 text-white text-center">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="title-page">
            El reflejo de mi pasión y habilidades👨‍💻
          </h1>
          <p className="text-sm lg:text-lg">
            Estos son los servicios que ofrezco, enfocados en brindar soluciones
            efectivas y adaptadas a las necesidades de cada proyecto o cliente,
            con el objetivo de lograr resultados de calidad y alto impacto.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 3 }, // Desktop
            768: { slidesPerView: 2 }, // Tablet
            0: { slidesPerView: 1 }, // Móvil
          }}
          className="mySwiperPortfolio"
        >
          {dataPortfolio.map((item, index) => (
            <SwiperSlide key={index}>
              <CardPortfolio
                image={item.image}
                title={item.title}
                paragraph={item.paragraph}
                description={item.description}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
