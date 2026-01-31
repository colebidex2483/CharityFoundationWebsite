import React from 'react';

interface Section3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Section3D: React.FC<Section3DProps> = ({ children, className = '' }) => {
  return (
    <section 
      className={`w-screen h-screen flex flex-col justify-center relative overflow-hidden flex-shrink-0 ${className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};