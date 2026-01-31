import React from 'react';
import { Play } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { APP_CONTENT } from '../config';

export const VideoTestimonials: React.FC = () => {
  const content = APP_CONTENT.testimonials;

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">{content.badge}</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">{content.title}</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">
            {content.description}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((video, index) => (
            <ScrollReveal key={video.id} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={`${index * 0.1}s`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-video shadow-lg mb-6 border border-slate-200">
                  <img 
                    src={video.image} 
                    alt={video.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-6 h-6 text-white fill-current ml-1" />
                    </div>
                  </div>
                  {/* Duration Badge Placeholder */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
                    2:30
                  </div>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{video.name}</h3>
                  <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide mb-3 block">{video.role}</span>
                  <p className="text-slate-600 italic leading-relaxed">"{video.quote}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};