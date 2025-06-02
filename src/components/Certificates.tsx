
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Certificates = () => {
  const certificates = [
    {
       title: 'Programación COBOL',
      provider: 'Udemy',
      date: 'Enero 2022',
      image: 'https://img-c.udemycdn.com/course/750x422/2316424_31ed_2.jpg', // Imagen sugerida
      duration: '20 horas'
    },
    {
      title: 'Curso de Serverless Framework en AWS',
      provider: 'Platzi',
      date: 'Agosto 2023',
      image: 'https://img-c.udemycdn.com/course/750x422/3252824_7a69.jpg',
      duration: '40 horas'
    },
    {
      title: 'Curso de Figma Avanzado',
      provider: 'Platzi',
      date: 'Maayo 2023',
      image: 'https://www.figma.com/community/resource/42e7bc43-0a38-4509-9b0e-2c93a8a79424/thumbnail',
      duration: ''
    }
  ];

  return (
    <section id="certificados" className="py-20 px-4 bg-portfolio-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-white mb-6">
            Cursos y <span className="text-portfolio-text-pink">Certificados</span>
          </h2>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-portfolio-card rounded-lg border border-gray-700 overflow-hidden hover:border-portfolio-avatar-border transition-all duration-300 mx-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-40 object-cover"
                    />
                    {cert.duration && (
                      <div className="absolute top-2 right-2 bg-portfolio-text-pink text-portfolio-text-white text-xs px-2 py-1 rounded">
                        {cert.duration}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-portfolio-text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.provider}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
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

export default Certificates;
