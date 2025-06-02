import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Projects = () => {
  const projects = [
    {
            title: 'E-commerce para negocios gastronómicos',
      description: 'Desarrollo completo de sitios web para dos marcas gastronómicas con funcionalidades e-commerce: catálogo dinámico, pagos online y diseño personalizado con enfoque en UX y mobile-first. Implementado con WordPress, Elementor y WooCommerce, asegurando escalabilidad, autogestión y alta performance..',
      image: '/mis_imágenes/makkao.png',
      tech: ['WordPress', 'Elementor', 'WooCommerce', 'HTML', 'CSS', 'SEO', 'UX/UI', 'Php']
,
      github: null, // No tiene GitHub
      links: [
        { label: 'makkao', url: 'https://makkao.proyectospitiusas.com'},
        { label: 'maniatikko', url: 'http://maniatikko.proyectospitiusas.com' }
      ]
    },
    {
       title: 'Bithalac – Suplementos y bienestar',
    description: 'Landing page responsive para una marca de suplementos, con diseño enfocado en identidad de marca, velocidad y posicionamiento SEO. Cuenta con secciones informativas, catálogo de productos, e integración de chatbot automatizado para asesoría vía WhatsApp.',
    image: '/mis_imágenes/bithalac.png',
    tech: ['WordPress', 'Elementor', 'WooCommerce', 'HTML', 'CSS', 'SEO', 'UX/UI', "chatbot"],
      github: null, // No tiene GitHub
      links: [
        { label: 'View', url: 'https://bithalac.proyectospitiusas.com' }
      ]
    },
    {
       title: 'Proyectos Pitiusas – Arquitectura y gestión inmobiliaria',
      description: 'Landing page optimizada para una empresa de arquitectura y bienes raíces. Se implementó un diseño profesional responsive, chatbot automatizado con integración a WhatsApp, SEO on-page, y navegación enfocada en captación de leads.',
      image: 'https://proyectospitiusas.com/wp-content/uploads/2024/02/service-details-img4.jpg',
      tech: ['WordPress', 'Elementor', 'PHP', 'SEO on page', 'UX/UI Design', 'chatbot'],
      github: null, // No tiene GitHub
      links: [
        { label: 'View', url: 'https://proyectospitiusas.com' }
      ]
    }, 
    {
      title: 'CleanPass – Servicios y Reformas',
  description: 'Ecosistema digital para una marca de limpieza y reformas. Dos sitios web enfocados en conversión, SEO, formularios optimizados, galerías de servicios y diseño responsive alineado a la identidad de marca.',
  image: 'https://cleanpass.es/wp-content/uploads/2025/05/degradado.jpg',
  tech: [
    'WordPress',
    'Elementor',
    'Diseño UX/UI',
    'SEO on page',
    'Diseño responsive',
    'PHP',
    'Optimización de velocidad web',
    'Integración de formularios',
    'Email marketing'
  ],
      github: null, // No tiene GitHub
      links: [
        { label: 'clean pass', url: 'https://cleanpass.es' },
        { label: 'reformas', url: 'https://reformas.clean-pass.es' }
      ]
    },

    {
        title: 'ReformateAI – Visualización inteligente de reformas',
  description: 'Plataforma automatizada que permite a los usuarios visualizar espacios reformados en tiempo real mediante IA generativa, prompts personalizados y automatización con n8n y Make. Integra edición de imágenes con IA, formularios web y entrega por correo sin intervención humana directa.',
  image: 'https://reformateai.cleanpass.es/wp-content/uploads/2025/05/antes-y-despues.png',
  tech: [
    'n8n',
    'Make',
    'GPT-4 (OpenAI)',
    'WordPress',
    'Webhooks',
    'HTML/CSS',
    'Automatización de procesos',
    'Edición de imágenes con IA',
    'Prompt engineering',
    'API de OpenAI'
  ],
      github: null, // No tiene GitHub
      links: [
        { label: 'View', url: 'https://reformateai.cleanpass.es' }
      ]
    }, 

    {
        title: 'Directorio Artistas – Plataforma de Talento Creativo',
      description: 'Plataforma desarrollada para conectar artistas con marcas y productores mediante un portafolio digital personalizable. Permite a los artistas registrarse, publicar su contenido y formar parte del ecosistema creativo de Agencia Lima. Integra formularios de registro, filtros de búsqueda y enlaces sociales, con un diseño responsivo y adaptable. Preparada para integrar futuras funciones como contacto directo, agendamiento y automatización de campañas.',
      image: 'https://artistas.agencialima.es/wp-content/uploads/2025/04/synthesizer-keyboard-digital-recording-home-music-2021-09-03-06-01-14-utc-2-1536x1024.jpg',
      tech: ['WordPress', 'HTML5', 'CSS', 'PHP', 'Elementor', 'SEO on page', 'Diseño UX/UI', 'Responsive Web Design'],
      github: null, // No tiene GitHub
      links: [
        { label: 'View', url: 'https://artistas.agencialima.es/' }
      ]
    },

    {
      title: 'AgenciaLima.es – Plataforma de Transformación Digital con IA',
      description: 'Sitio web corporativo diseñado para Agencia Lima, empresa especializada en soluciones de inteligencia artificial y automatización. La plataforma presenta sus servicios de IA para negocios, incluyendo análisis visual y generación de contenido, con una experiencia de usuario responsive, formularios integrados y asesoría personalizada para captar leads y mejorar la comunicación con clientes.',
      image: 'https://agencialima.es/wp-content/uploads/2025/02/homepage_3-1-9.png',
      tech: ['WordPress', 'HTML5', 'CSS', 'Integración de APIs', 'Diseño UX/UI', 'SEO on page', 'Email Marketing', 'PHP', 'Elementor'],
      github: null, // No tiene GitHub
      links: [
        { label: 'View', url: 'https://agencialima.es/' }
      ]
    },

    
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-white mb-6">
            My <span className="text-portfolio-text-pink">Creations</span>
          </h2>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-portfolio-card rounded-lg border border-gray-700 overflow-hidden hover:border-portfolio-avatar-border transition-all duration-300 mx-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-portfolio-text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-portfolio-card text-portfolio-pink-light text-xs rounded border border-portfolio-text-pink/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      {/* Enlaces personalizados */}
                      <div className="flex gap-2 flex-wrap">
                        {project.links.map((link, linkIndex) => (
                          <a 
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-transparent border border-gray-600 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                      
                      {/* GitHub solo si existe */}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-transparent border border-gray-600 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors w-fit"
                        >
                          <Github className="w-3 h-3" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-portfolio-card border-gray-600 text-gray-300 hover:bg-gray-600" />
          <CarouselNext className="bg-portfolio-card border-gray-600 text-gray-300 hover:bg-gray-600" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;