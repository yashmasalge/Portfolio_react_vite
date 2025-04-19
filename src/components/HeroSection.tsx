
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import  profile_pic  from '../assets/profile_pic.jpeg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection className="order-2 md:order-1" delay={0.2}>
            <p className="text-violet-500 mb-2 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="block">YASH</span>
              <span className="block">MASALGE</span>
            </h1>
            <div className="h-1 w-20 bg-violet-500 mb-4"></div>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              System Engineer @ TCS
            </h2>
            <p className="text-muted-foreground mb-2 flex items-center gap-2">
              <MapPin size={16} /> Pune, Maharashtra, India
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="mailto:myash2101@gmail.com"
                className="flex items-center gap-2 bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/yashmasalge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-violet-700 text-violet-700 dark:border-violet-400 dark:text-violet-400 px-4 py-2 rounded-md hover:bg-violet-700 hover:text-white dark:hover:bg-violet-500 dark:hover:border-violet-500 transition-all"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/yashmasalge"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-foreground"
              >
                <Github size={20} />
              </a>
              <a
                href="tel:+919665449672"
                className="contact-link text-foreground"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:myash2101@gmail.com"
                className="contact-link text-foreground"
              >
                <Mail size={20} />
              </a>
            </div>
          </AnimatedSection>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <AnimatedSection className="relative" delay={0.4}>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-6xl font-bold"><img src={profile_pic} alt='profile_pic' /></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-violet-700 dark:bg-violet-600 text-white px-4 py-2 rounded-lg shadow-lg">
                Software Engineer
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-40 bg-wave-pattern bg-repeat-x bg-bottom opacity-20"></div>
    </section>
  );
};

export default HeroSection;
