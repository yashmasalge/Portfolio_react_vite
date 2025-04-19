
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-violet-700 dark:text-violet-400 hover:text-violet-600 transition-colors">
          Yash<span className="text-violet-500">.dev</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button className="ml-4 text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-background dark:bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="text-violet-700 dark:text-violet-300 hover:text-violet-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
