
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
