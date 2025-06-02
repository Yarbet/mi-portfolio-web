
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.open('https://wa.link/43vtpx', '_blank');
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Yarbet', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/yarbet/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://x.com/Yarbetow', label: 'Twitter' },
    { icon: Mail, url: 'https://wa.link/43vtpx', label: 'Email' }
  ];

  return (
    <section id="contacto" className="py-20 px-4 bg-portfolio-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-pink mb-8">
          Ponte en contacto conmigo
        </h2>
        
        <div className="bg-portfolio-card/50 rounded-xl border border-gray-700 p-12 max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            ¿Te interesa colaborar? Escríbeme a kevinyarbet@gmail.com o encuéntrame en redes sociales para conocer en qué estoy trabajando.
          </p>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Estoy siempre abierto a conversar sobre nuevos proyectos, ideas creativas u oportunidades para formar parte de algo increíble. ¡No dudes en contactarme!
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-portfolio-text-pink transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            ))}
          </div>
          
          {/* Email Button */}
          <button
            onClick={handleEmailClick}
            className="bg-portfolio-text-pink text-portfolio-text-white font-medium py-3 px-8 rounded-lg hover:bg-portfolio-pink-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Escríbeme
          </button>
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2025 Portfolio. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            By Yarbet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
