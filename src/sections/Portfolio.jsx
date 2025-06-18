import CardPortfolio from "../components/CardPortfolio";

const Portfolio = () => {
  return (
    <div>
      <div className="w-5/6 m-auto py-24 text-white text-center">
        <div className="mb-10">
          <h1 className="title-page">
            El reflejo de mi pasión y habilidades👨‍💻
          </h1>
          <p>
            Estos son los servicios que ofrezco, enfocados en brindar soluciones
            efectivas y adaptadas a las necesidades de cada proyecto o cliente,
            con el objetivo de lograr resultados de calidad y alto impacto.
          </p>
        </div>
        <div className="grid grid-cols-4 place-items-center">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
