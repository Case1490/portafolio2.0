import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CardPortfolio from "../components/CardPortfolio";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  return (
    <div>
      <div className="w-[90%] m-auto py-12 lg:py-24 text-white text-center">
        <div className="mb-10">
          <h1 className="title-page">
            El reflejo de mi pasión y habilidades👨‍💻
          </h1>
          <p className="text-sm">
            Estos son los servicios que ofrezco, enfocados en brindar soluciones
            efectivas y adaptadas a las necesidades de cada proyecto o cliente,
            con el objetivo de lograr resultados de calidad y alto impacto.
          </p>
        </div>

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
          <SwiperSlide>
            <CardPortfolio />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
