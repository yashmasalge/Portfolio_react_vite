
import { Calendar, MapPin } from 'lucide-react';
import { differenceInMonths, format } from 'date-fns';

const getExperiencePeriod = (startDate: string, endDate?: string) => {
  const start = new Date(`${startDate}T00:00:00`);
  const end = endDate ? new Date(`${endDate}T00:00:00`) : new Date();
  const totalMonths = differenceInMonths(end, start);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const duration = [
    years ? `${years} year${years === 1 ? '' : 's'}` : '',
    months ? `${months} month${months === 1 ? '' : 's'}` : ''
  ].filter(Boolean).join(' ') || 'Less than a month';

  return `${format(start, 'MMMM yyyy')} - ${endDate ? format(end, 'MMMM yyyy') : 'Present'} (${duration})`;
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "System Engineer",
      company: "Tata Consultancy Services",
      period: getExperiencePeriod("2023-10-01"),
      location: "Pune, Maharashtra, India",
      description: [
        "Working as a System Engineer at TCS",
        "Collaborating with cross-functional teams to deliver solutions",
        "Developing and maintaining software systems"
      ]
    },
    {
      title: "Intern",
      company: "DevTown",
      period: getExperiencePeriod("2021-08-01", "2021-11-30"),
      location: "Aurangabad, Maharashtra, India",
      description: [
        "Added skills to become Full-stack web developer",
        "Added multiple technologies used for building web Apps",
        "Added learning based on real world problems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border-l-4 border-violet-500 hover:shadow-lg transition-shadow animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <h4 className="text-lg text-violet-600 dark:text-violet-400">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-6 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
