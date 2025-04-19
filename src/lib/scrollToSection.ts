
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    // Add a nice scroll animation with easing
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
};
