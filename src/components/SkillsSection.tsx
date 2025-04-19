
import { CheckCircle } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["Java", "JavaScript", "ReactJS", "NextJS", "HTML", "CSS", "NodeJS", "Flutter"]
    },
    {
      category: "Databases",
      skills: ["MongoDB"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "DevOps"]
    }
  ];

  const topSkills = [
    {
      name: "NodeJS",
      level: 90
    },
    {
      name: "Express.js",
      level: 85
    },
    {
      name: "DevOps",
      level: 80
    },
    {
      name: "React",
      level: 88
    },
    {
      name: "JavaScript",
      level: 92
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Top Skills</h3>
            
            <div className="space-y-6">
              {topSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-violet-600 dark:text-violet-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className="bg-violet-600 dark:bg-violet-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-violet-700 dark:bg-violet-800 text-white rounded-lg">
              <h4 className="text-lg font-bold mb-4">Why My Skills Matter</h4>
              <p className="mb-4">
                My technical skills are backed by practical experience and a solid understanding of software development principles.
              </p>
              <p>
                I continuously update my skillset to stay current with industry trends and best practices.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Skill Categories</h3>
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-4">{category.category}</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-1 bg-secondary px-3 py-2 rounded-full text-sm hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                      >
                        <CheckCircle size={14} className="text-violet-500" />
                        <span className="text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
