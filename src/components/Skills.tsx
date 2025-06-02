
import { Code, Database, Palette, Settings, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'React', icon: Code },
    { name: 'Next.js', icon: Globe },
    { name: 'Node.js', icon: Settings },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Python', icon: Code },
    { name: 'SQL', icon: Database },
    { name: 'Git', icon: Wrench },
    { name: 'Wordpress', icon: Palette },
    { name: 'Scrum', icon: Settings },
    { name: 'PostgresSQL', icon: Database }
  ];

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-white mb-6">
            Mis <span className="text-portfolio-text-pink">Habilidades</span>
          </h2>
        </div>

        <div className="bg-portfolio-card/50 rounded-xl border border-gray-700 p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-portfolio-bg/50 rounded-lg border border-gray-700 hover:border-portfolio-avatar-border transition-colors">
                <skill.icon className="w-5 h-5 text-portfolio-text-pink" />
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
