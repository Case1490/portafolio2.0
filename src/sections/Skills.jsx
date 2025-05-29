import CardSkill from "../components/CardSkill";

const Skills = () => {
  return (
    <div>
      <div className="text-center w-5/6 m-auto">
        <h1 className="text-3xl my-10 font-bold uppercase text-[var(--OrangeMain)] border-b-4 mx-auto inline-block">
          Habilidades
        </h1>

        <div className="flex space-x-4 justify-center">
          <CardSkill />
          <CardSkill />
          <CardSkill />
          <CardSkill />
          <CardSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
