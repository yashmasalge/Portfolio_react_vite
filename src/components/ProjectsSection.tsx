
import { Calendar, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Xpatris: Relocation Services",
      year: "2022",
      link: "https://xpatris.com/",
      technologies: ["NextJS"],
      description: [
        "Web-based application that helps you get the most out of your relocation and life in your new country by providing a quick and easy overview of the most trusted service providers.",
        "Transparent comparisons and direct access to the most relevant results help save you time and money.",
        "Transforming tech stack from React.js to Next.js To build the website SEO friendly."
      ]
    },
    {
      name: "CosmoX",
      year: "2021",
      link: "https://play.google.com/store/search?q=cosmox&c=apps",
      technologies: ["Flutter", "Dart"],
      description: [
        "Provides information about space and rockets.",
        "Renders location of International Space Station.",
        "Provides information about spaceX rocket launches."
      ]
    },
    {
      name: "Zomato Master Clone",
      year: "2021",
      link: "https://zomato-client.vercel.app/delivery",
      technologies: ["MERN Stack"],
      description: [
        "Full fledged responsive Zomato clone designed with ReactJS.",
        "Added login, add food to your cart functionality.",
        "Added payment Gateway as well."
      ]
    },
    {
      name: "Zomato Master Clone",
      year: "2021",
      link: "https://zomato-client.vercel.app/delivery",
      technologies: ["MERN Stack"],
      description: [
        "Full fledged responsive Zomato clone designed with ReactJS.",
        "Added login, add food to your cart functionality.",
        "Added payment Gateway as well."
      ]
    }
  ];

  const activities = [
    {
      name: "Participated in Amazon ML summer school 2022",
      organization: "organized by Amazon"
    },
    {
      name: "Participated in True Geek Tournament 2021",
      organization: "organized by GFG"
    },
    {
      name: "Enrolled for 7 days Bootcamp on Python and Data Analytics",
      organization: "organized by DevTown"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50 dark:bg-secondary/5 ">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Projects & Activities</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-secondary/20 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-3 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold ">{project.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside space-y-2  mb-4">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-sm">{desc}</li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <span className="mr-1">Visit Project</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Co-curricular Activities</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white dark:bg-secondary/30 p-6 rounded-lg shadow-md border-l-4 border-green-500 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-2">{activity.name}</h4>
                <p>{index + 1 + ". "}{activity.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
