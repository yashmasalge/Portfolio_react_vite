
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Strong in building software products with intuitive problem-solving skills.
              Proficient in web app development. Passionate about implementing
              and launching new projects. Ability to translate business requirements
              into technical solutions. Looking to start the career as an entry-level
              software engineer with a reputed firm driven by technology.
            </p>
            
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="font-semibold w-24">Full Name:</span>
                <span>Yash Masalge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:myash2101@gmail.com" className="text-violet-500 hover:underline">
                  myash2101@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold w-24">Phone:</span>
                <a href="tel:+919665449672" className="text-violet-500 hover:underline">
                  +91 9665449672
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold w-24">Location:</span>
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
            
            <div className="mt-8 flex gap-6">
              <a 
                href="https://linkedin.com/in/yashmasalge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/yashmasalge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-violet-500 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border-l-4 border-violet-500">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge bg-violet-600">Node.js</span>
                <span className="skill-badge bg-violet-700">Express.js</span>
                <span className="skill-badge bg-violet-800">DevOps</span>
              </div>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Current Position</h3>
              <p className="text-muted-foreground">
                System Engineer at Tata Consultancy Services
              </p>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge bg-purple-600">JavaScript</span>
                <span className="skill-badge bg-purple-700">React</span>
                <span className="skill-badge bg-purple-800">Next.js</span>
                <span className="skill-badge bg-purple-600">MongoDB</span>
                <span className="skill-badge bg-purple-700">Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
