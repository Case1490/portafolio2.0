const Journey = () => {
  const education = [
    {
      date: "2020",
      title: "Java avanzado",
      place: "Udemy",
    },
    {
      date: "Julio 2020",
      title: "HTML y CSS",
      place: "Udemy",
    },

    {
      date: "Septiembre 2020",
      title: "WordPress",
      place: "Udemy",
    },
    {
      date: "Noviembre 2020",
      title: "Tailwind - Bootstrap",
      place: "Udemy",
    },
    {
      date: "Febrero 2021",
      title: "Javascript avanzado",
      place: "Udemy",
    },
    {
      date: "Marzo 2021",
      title: "Python nivel básico - intermedio",
      place: "Udemy",
    },
    {
      date: "Abril 2021 - Julio 2021",
      title: "React",
      place: "Udemy",
    },
    {
      date: "Octubre 2021",
      title: "Node.js y NestJS",
      place: "Udemy",
    },
    {
      date: "Diciembre 2021",
      title: "MySQL",
      place: "Udemy",
    },
    {
      date: "Febrero 2022",
      title: "Flutter",
      place: "Udemy",
    },
    {
      date: "2022 - actualidad",
      title: "Ingeniería de software",
      place: "UTP - Universidad Tecnológica del Perú",
    },
  ];

  const experience = [
    {
      date: "Noviembre 2022 - Abril 2023",
      detail:
        "Desarrollé su página web institucional con React y Tailwind, incorporando animaciones interactivas. También participé en diversos proyectos creativos, fortaleciendo mi capacidad para adaptar soluciones tecnológicas a objetivos de marketing.",
      place: "Tengolaidea | Agencia de Publicidad",
    },
    {
      date: "Marzo 2023 - Enero 2024",
      detail:
        "Desarrollé una tienda online con React, Tailwind, Node.js y MySQL, permitiendo a los usuarios explorar productos tecnológicos, acceder a fichas detalladas y comprar de forma segura. Esta experiencia profundizó mi enfoque en UX para plataformas e-commerce.",
      place: "JevicTecnology",
    },
    {
      date: "Febrero 2024 - Agosto 2024",
      detail:
        "Desarrollé su sitio web institucional con React, Tailwind y Firebase, centrado en productos industriales y solicitudes de cotización. El proyecto se orientó al entorno B2B, priorizando la usabilidad y el acceso claro a información clave.",
      place: "Grupo Prinfer",
    },
    {
      date: "Septiembre 2024 - Noviembre 2024",
      detail:
        "Desarrollé una tienda online moderna para motos eléctricas con React, Tailwind, Node.js y MySQL. La plataforma permite explorar modelos, comparar especificaciones y realizar consultas, destacando los beneficios de la movilidad eléctrica.",
      place: "Futech",
    },
    {
      date: "Diciembre 2024",
      detail:
        "Desarrollé el sitio institucional de una empresa dedicada al desarrollo web, usando React, Tailwind y animaciones interactivas. El resultado refleja de forma dinámica sus servicios y refuerza su identidad visual.",
      place: "Webberyl",
    },
    {
      date: "Actualidad 2025",
      detail:
        "Diseñé y desarrollé el sitio web de una agencia enfocada en neuromarketing, utilizando React, Tailwind y animaciones interactivas. El diseño comunica su enfoque innovador, combinando estética publicitaria con funcionalidad estratégica.",
      place: "Agencia de publicidad | PropositoCreativo",
    },
  ];

  return (
    <div className="min-h-screen text-white pt-20">
      <div className="text-center mt-6 mb-20 space-y-3">
        <h1 className="title-page">
          Mi trayectoria académica y profesional 🧑‍🎓
        </h1>
        <p className="text-sm lg:text-lg">
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
              <p className="text-sm text-[var(--SkyBlue)]">{item.place}</p>
              <p className="text-lg font-semibold text-white">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
