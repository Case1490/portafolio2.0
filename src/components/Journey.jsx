const Journey = () => {
  const education = [
    {
      date: "November 14, 2023",
      title: "UI Design Training",
      place: "Alura",
    },
    {
      date: "April 7, 2023",
      title: "Web Accessibility Training",
      place: "Alura",
    },
    {
      date: "March 9, 2022",
      title: "Front-end Training",
      place: "Alura",
    },
    {
      date: "2019 - 2023",
      title: "Computer Science Degree",
      place: "Wyden UniFBV",
    },
  ];

  const experience = [
    {
      date: "March 2023 - April 2023",
      title: "Software Developer",
      place: "O-PitBlast",
    },
    {
      date: "September 2021 - November 2021",
      title: "Web Developer",
      place: "Lab UniFBV",
    },
    {
      date: "April 2024",
      title: "Freelancer",
      place: "Focus Digital Marketing",
    },
    {
      date: "May 2024",
      title: "Freelancer",
      place: "Afago",
    },
  ];

  return (
    <div className="min-h-screen text-white pt-20">
      <div className="text-center mt-6 mb-10 space-y-3">
        <h1 className="title-page">
          Mi trayectoria académica y profesional 🧑‍🎓
        </h1>
        <p>
          A lo largo de los años he construido un camino académico y profesional
          que refleja mi compromiso con el aprendizaje, el crecimiento personal
          y el desarrollo de habilidades que me permitan aportar valor en cada
          proyecto en el que participo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[var(--OrangeMain)]">
            Educación
          </h2>
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-4 mb-4 border  border-white"
            >
              <p className="text-sm text-[var(--OceanBlue)] mb-1">
                {item.date}
              </p>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-[var(--SkyBlue)]">{item.place}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[var(--OrangeMain)]">
            Experiencia Profesional
          </h2>
          {experience.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-4 mb-4 border border-white"
            >
              <p className="text-sm text-[var(--OceanBlue)] mb-1">
                {item.date}
              </p>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-[var(--SkyBlue)]">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
