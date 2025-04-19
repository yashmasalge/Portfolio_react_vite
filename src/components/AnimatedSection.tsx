
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slideUp' | 'slideRight' | 'scale';
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  animation = 'fade' 
}: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    fade: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariants[animation]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      whileHover={{ scale: animation === 'scale' ? 1.02 : 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
