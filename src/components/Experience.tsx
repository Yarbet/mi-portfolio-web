
const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Web – Digital Sapiens Latam',
      period: 'Nov. 2024 – Actualidad',
      description: [
       "Diseño y personalización de sitios web en WordPress: landing pages, blogs y e-commerce optimizados para conversión.",
      "Automatización de flujos con Make y n8n: generación de ebooks, envíos masivos, publicación en RRSS.",
      "Implementación de chatbots personalizados, integraciones con APIs y secuencias automatizadas de email marketing.",
      "Optimización SEO técnico (caching, minificación, metadatos, performance) y analítica con Google Analytics y Meta Pixel.",
      "Soporte post-lanzamiento, migraciones de sitios y mejora continua basada en KPIs."
      ],
      tech: ["WordPress", "Make", "n8n", "Fluent Forms", "SEO", "Firebase", "Meta Pixel", "Google Analytics", "HTML", "CSS", "JavaScript"]
    },
    {
      title: 'Desarrollador Web – Agencia Online JF',
      period: 'jun. 2024 – Oct. 2024',
      description: [
        "Maquetación y desarrollo de sitios WordPress con WooCommerce, blogs y páginas de ventas responsivas.",
      "Personalización avanzada de temas y plugins según requerimientos específicos del cliente.",
      "Migraciones, optimización de velocidad, gestión de hosting, integración con bases de datos y APIs.",
      "Implementación de SEO técnico, configuración de campañas de tráfico y mantenimiento web continuo."
      ],
      tech: ["WordPress", "PHP", "WooCommerce", "HTML5", "CSS3", "SEO", "MySQL"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 bg-portfolio-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-white mb-6">
            Ultimas <span className="text-portfolio-text-pink">Experiencias</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-portfolio-card/50 rounded-xl border border-gray-700 p-6 hover:border-portfolio-avatar-border transition-all duration-300">
              <h3 className="text-xl font-semibold text-portfolio-text-pink mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-portfolio-text-pink mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
