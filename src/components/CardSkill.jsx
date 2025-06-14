const CardSkill = ({ image, title, percentage }) => {
  return (
    <div className="font-bold text-white p-3 space-y-3 border-2 border-[var(--GrayMain)] rounded-2xl w-[250px] flex flex-col items-center">
      <div className="w-[120px] h-[120px] flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <h1>{title}</h1>
      <p className="bg-[var(--OrangeMain)] w-[95%] rounded-full m-auto">
        {percentage}%
      </p>
    </div>
  );
};

export default CardSkill;
