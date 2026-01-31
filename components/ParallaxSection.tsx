import React from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  overlayColor?: string;
  height?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  backgroundImage, 
  children, 
  overlayColor = "bg-slate-900/60",
  height = "min-h-[500px]"
}) => {
  return (
    <section className={`relative flex items-center justify-center ${height} overflow-hidden`}>
      <div 
        className="absolute inset-0 z-0 parallax-bg"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};