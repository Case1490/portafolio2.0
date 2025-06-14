const CardService = ({ icono: Icono, titulo, descripcion }) => {
  return (
    <div className="border border-white h-[240px] flex flex-col justify-center items-center text-white rounded-2xl p-6 text-center">
      <div className="text-[var(--OrangeMain)] text-5xl mb-4 mx-auto">
        <Icono />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{titulo}</h3>
      <p className=" text-base">{descripcion}</p>
    </div>
  );
};

export default CardService;
