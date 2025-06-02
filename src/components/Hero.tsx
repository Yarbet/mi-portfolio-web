
import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, User, Code, Coffee, Heart } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software developer';
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

    const downloadCV = () => {
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = '/public/yarbet yanac CV - 2025.pdf'; // Ruta donde debes subir tu CV
    link.download = 'cv_Yarbet_Yanac.pdf'; // Nombre que tendrá el archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '30+' },
    { icon: Coffee, label: 'Soluciones Creativas', value: '100+' },
    { icon: Heart, label: 'Clientes Satisfechos', value: '30+' },
    { icon: User, label: 'Año de Experiencia', value: '2+' }
  ];

  return (
    <section id="inicio" className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-text-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-portfolio-pink-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Left Column - Text Content */}
          <div className="space-y-8 pt-20">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-portfolio-text-white mb-4">
                Hola, soy{' '}
                <span className="text-portfolio-text-pink">
                  Yarbet Yanac
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Soy desarrollador web con formación en Ingeniería de Software y experiencia comprobada en el diseño y desarrollo de soluciones digitales modernas. 
                He trabajado con diversas tecnologías como React, Angular, WordPress y Django, creando sitios web personalizados, e-commerce optimizados, integraciones con APIs, automatización de procesos con herramientas como Make y en n8n, y 
                funcionalidades avanzadas como chatbots, SEO técnico y formularios inteligentes.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
               Mi enfoque combina buen diseño, rendimiento y funcionalidad, implementando soluciones escalables y centradas en la experiencia del usuario. 
               Me especializo en la personalización profunda de WordPress, creación de plugins y temas, optimización para dispositivos móviles, velocidad de carga y seguridad. 
               También tengo experiencia en ventas remotas, email marketing automatizado y configuración de analítica con herramientas como Meta Pixel y Google Analytics.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Actualmente formo parte de Agencia Digital Sapiens, donde colaboro en proyectos para sectores como turismo, logística, legal y consumo masivo. 
                Estoy en constante aprendizaje y busco siempre aportar soluciones efectivas y de alto impacto para cada cliente o equipo con el que trabajo.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="px-6 py-3 bg-portfolio-text-pink text-portfolio-text-white font-semibold rounded-lg hover:bg-portfolio-pink-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                Ver Proyectos
                <ChevronDown className="w-4 h-4" />
              </button>
               <button 
                onClick={downloadCV}
                className="px-6 py-3 border-2 border-portfolio-text-pink text-portfolio-text-pink font-semibold rounded-lg hover:bg-portfolio-text-pink hover:text-portfolio-text-white transition-all duration-300 flex items-center gap-2"
              >
                  
                descargar CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/Yarbet" target="_blank" className="group">
                <div className="p-3 bg-portfolio-card/50 rounded-full border border-gray-700 group-hover:border-portfolio-avatar-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-portfolio-text-pink/25">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-portfolio-text-white transition-colors" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/yarbet/" target="_blank" className="group">
                <div className="p-3 bg-portfolio-card/50 rounded-full border border-gray-700 group-hover:border-portfolio-avatar-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-portfolio-text-pink/25">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-portfolio-text-white transition-colors" />
                </div>
              </a>
              <a href="https://wa.link/43vtpx" target="_blank" className="group">
                <div className="p-3 bg-portfolio-card/50 rounded-full border border-gray-700 group-hover:border-portfolio-avatar-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-portfolio-text-pink/25">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-portfolio-text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-90 h-90 relative">
              <div className="absolute inset-0 bg-portfolio-text-pink rounded-full opacity-20 blur-xl"></div>
               <Avatar className="relative w-full h-full border-4 border-portfolio-avatar-border">
                <AvatarImage 
                  src="/public/foto-perfil.jpg" 
                  alt="Foto de perfil"
                  className="object-contain w-full h-full"
                />
                <AvatarFallback className="bg-portfolio-card text-6xl text-gray-400">
                  <User className="w-32 h-32" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-portfolio-card/50 rounded-xl border border-gray-700 hover:border-portfolio-avatar-border transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-portfolio-text-pink rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-portfolio-text-white" />
              </div>
              <div className="text-2xl font-bold text-portfolio-text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
