
import { Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Maharashtra Institute of Technology Aurangabad",
      degree: "Bachelor's degree, Computer Science",
      period: "July 2020 - July 2023",
      location: "Aurangabad, Maharashtra, India",
      grade: "9.49 CGPA"
    },
    {
      institution: "Government Polytechnic Aurangabad",
      degree: "Diploma of Education, Information Technology",
      period: "July 2017 - July 2020",
      location: "Aurangabad, Maharashtra, India"
    },
    {
      institution: "Universal Public School",
      degree: "School Education",
      location: "India"
    }
  ];

  const certifications = [
    "Getting Started with Go on Google Cloud",
    "App Engine: 3 Ways",
    "AI Appreciate Badge - AI For All",
    "GitHub Foundations"
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50 dark:bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-1">{edu.institution}</h3>
                <h4 className="text-lg text-violet-600 dark:text-violet-400 mb-3">{edu.degree}</h4>
                
                <div className="flex flex-wrap gap-6 mt-2 text-muted-foreground">
                  {edu.period && (
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                      <Award size={16} />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6">Certifications</h3>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="bg-violet-500 text-white p-1 rounded-full flex items-center justify-center mt-1">
                      <Award size={14} />
                    </span>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-violet-500 to-violet-700 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold mb-4">Educational Journey</h3>
              <p className="mb-4">
                My educational background has equipped me with both theoretical knowledge and practical skills in computer science and information technology.
              </p>
              <p>
                From my diploma to bachelor's degree, I've consistently maintained academic excellence while developing technical expertise in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
