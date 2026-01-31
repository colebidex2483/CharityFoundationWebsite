import React, { useRef, useEffect, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: string;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = '0s', 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'; 
    switch (animation) {
      case 'fade-up': return 'animate-fade-in-up';
      case 'fade-left': return 'animate-fade-in-left';
      case 'fade-right': return 'animate-fade-in-right';
      case 'fade-in': return 'animate-fade-in';
      default: return 'animate-fade-in-up';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${getAnimationClass()}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};