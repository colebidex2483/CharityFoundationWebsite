import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Causes } from '../components/Causes';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { APP_CONTENT } from '../config';
import { Stat } from '../types';

// Content Components
const AboutSection = () => {
  const { about } = APP_CONTENT;
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center text-white">
      <ScrollReveal animation="fade-left">
         <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">{about.badge}</span>
         <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6 leading-tight">
           {about.title} <span className="text-brand-400">{about.titleHighlight}</span>
         </h2>
         <p className="text-slate-200 text-lg mb-6 leading-relaxed">
           {about.intro}
         </p>
         <p className="text-slate-300 text-lg mb-8 leading-relaxed">
           {about.description}
         </p>
         
         <div className="grid grid-cols-2 gap-8 mt-8">
           {about.stats.map((stat, index) => (
             <div key={index} className="pl-6 border-l-4 border-accent-500">
               <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
               <p className="text-slate-400">{stat.label}</p>
             </div>
           ))}
         </div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-right" className="relative">
         <div className="absolute -inset-4 bg-brand-600/20 rounded-3xl transform rotate-3 blur-md"></div>
         <img 
           src={about.image}
           alt="Volunteers helping" 
           className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10"
         />
      </ScrollReveal>
    </div>
  );
};

const StatCounter: React.FC<{ stat: Stat }> = ({ stat }) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref) return;

    // Determine initial display format (e.g., "0M+" instead of just "0" to match layout)
    const raw = stat.value;
    const match = raw.match(/([\d,.]+)/);
    if (match) {
        const prefix = raw.substring(0, match.index);
        const suffix = raw.substring(match.index! + match[0].length);
        setDisplayValue(`${prefix}0${suffix}`);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        
        if (match) {
          const numberPart = match[0];
          // Remove commas to parse
          const target = parseFloat(numberPart.replace(/,/g, ''));
          const prefix = raw.substring(0, match.index);
          const suffix = raw.substring(match.index! + numberPart.length);
          const isFloat = numberPart.includes('.');
          
          const duration = 2000; // 2 seconds animation
          const start = performance.now();
          
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quart: 1 - (1-t)^4
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = target * ease;
            
            let formattedNumber;
            if (isFloat) {
              formattedNumber = current.toFixed(1);
            } else {
              formattedNumber = Math.floor(current).toLocaleString();
            }
            
            setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
            
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              // Ensure we land on the exact original string to avoid formatting mismatches
              setDisplayValue(raw);
            }
          };
          
          requestAnimationFrame(tick);
        } else {
           // Fallback if no number found
           setDisplayValue(raw);
        }
        
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, stat.value]);

  return (
    <div ref={setRef} className="text-center group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
      <div className="bg-brand-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 text-brand-400">
        <stat.icon className="w-8 h-8" />
      </div>
      <h3 className="text-5xl font-bold mb-2">{displayValue}</h3>
      <p className="text-brand-100 uppercase tracking-widest text-sm font-semibold">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  const { statsSection } = APP_CONTENT;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
      {statsSection.stats.map((stat, index) => (
        <ScrollReveal key={stat.id} animation="fade-up" delay={`${index * 0.1}s`}>
          <StatCounter stat={stat} />
        </ScrollReveal>
      ))}
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      {/* Content */}
      <main className="relative z-10">
        <Hero />
        
        <section id="about" className="py-24 container mx-auto px-6 relative">
           <AboutSection />
        </section>

        <section id="impact" className="py-20 bg-slate-800/50 backdrop-blur-sm border-y border-white/5">
           <div className="container mx-auto px-6">
               <StatsSection />
           </div>
        </section>

        <Causes />

        <VideoTestimonials />

        <Footer />
      </main>
    </div>
  );
};