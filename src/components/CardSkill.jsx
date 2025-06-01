import ReactIcon from "../assets/habilidades/react.png";

const CardSkill = ({ image, title, percentage }) => {
  return (
    <div className=" font-bold text-white p-3 space-y-3 border-2 border-[var(--GrayMain)] rounded-2xl w-[250px] flex flex-col items-center">
      <div className="w-[120px]">
        <img src={image} alt="Icon" className="w-full" />
      </div>
      <h1 className="">{title}</h1>
      <p className="bg-[var(--OrangeMain)] w-[95%] rounded-full m-auto">
        {percentage}%
      </p>
    </div>
  );
};

export default CardSkill;
