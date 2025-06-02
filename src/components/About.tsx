
import { User, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '50+' },
    { icon: Coffee, label: 'Tazas de Café', value: '1000+' },
    { icon: Heart, label: 'Clientes Satisfechos', value: '30+' },
    { icon: User, label: 'Años de Experiencia', value: '5+' }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-white mb-6">
            Sobre <span className="text-portfolio-text-pink">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-text-pink mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-text-white mb-4">
              ¡Hola! Soy Alex, desarrollador apasionado por la tecnología
            </h3>
            <p className="text-gray-300 leading-relaxed"> 
              Con más de 5 años de experiencia en desarrollo web, me especializo en crear 
              aplicaciones modernas y escalables. Mi pasión por el código limpio y las 
              mejores prácticas me ha llevado a trabajar con empresas de diferentes tamaños.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
              contribuir a proyectos open source y compartir conocimientos con la comunidad.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-portfolio-text-pink text-portfolio-text-white font-semibold rounded-lg hover:bg-portfolio-pink-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Descargar CV
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-portfolio-text-pink rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative w-full h-full bg-portfolio-card rounded-2xl border border-portfolio-avatar-border flex items-center justify-center">
                <User className="w-32 h-32 text-gray-400" />
              </div>
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

export default About;
