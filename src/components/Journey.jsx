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
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-12 text-[var(--OrangeMain)]">
        My Academic and Professional Journey
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Educación</h2>
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c1c3c] rounded-xl p-4 mb-4 border border-[#333]"
            >
              <p className="text-sm text-purple-300 mb-1">{item.date}</p>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-gray-300">{item.place}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Experiencia Profesional
          </h2>
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c1c3c] rounded-xl p-4 mb-4 border border-[#333]"
            >
              <p className="text-sm text-purple-300 mb-1">{item.date}</p>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-gray-300">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
