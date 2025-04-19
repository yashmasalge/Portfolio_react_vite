
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-violet-900 dark:bg-violet-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Yash Masalge</h2>
            <p className="text-gray-300">System Engineer @ TCS</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-violet-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Yash Masalge. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-violet-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
