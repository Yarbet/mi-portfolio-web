
const Education = () => {
  const education = [
    {
      title: 'ISIL - Ingeniería de Software',
      period: '2020 - 2024',
      description:  'Formación integral en el análisis, diseño y desarrollo de sistemas de software. La carrera abarca estructuras de datos, algoritmos, bases de datos, ingeniería de requisitos, programación orientada a objetos, diseño de interfaces, pruebas y mantenimiento de software. Tecnologías: C#, C++, Java, JavaScript, SQL Server, TypeScript, HTML5, CSS.'
    },
    {
      title: 'Bootcamp intensivo de desarrollo web Full Stack',
      period: '2023 - 2024',
      description: 'Bootcamp intensivo de desarrollo web Full Stack con proyectos frontend y backend reales. Tecnologías: React, Node.js, Express, TypeScript, Firebase, GitHub, CSS Flexbox, SPA, Bootstrap.'
    }
  ];

  return (
    <section id="educacion" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-white mb-6">
            <span className="text-portfolio-text-pink">Educación</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-portfolio-card/50 rounded-xl border border-gray-700 p-6 hover:border-portfolio-avatar-border transition-all duration-300">
              <h3 className="text-xl font-semibold text-portfolio-text-pink mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-400 mb-3">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
