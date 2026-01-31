import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { APP_CONTENT } from '../config';

export const Causes: React.FC = () => {
  const content = APP_CONTENT.causes;
  
  return (
    <section id="causes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">{content.badge}</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">{content.title}</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">
            {content.description}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.items.map((cause, index) => {
            const percentage = Math.min((cause.raised / cause.goal) * 100, 100);
            
            return (
              <ScrollReveal key={cause.id} animation="fade-up" delay={`${index * 0.1}s`} className="h-full">
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={cause.image} 
                      alt={cause.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                      {cause.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {cause.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                      {cause.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between text-sm font-semibold mb-2">
                        <span className="text-brand-600">${cause.raised.toLocaleString()}</span>
                        <span className="text-slate-400">Goal: ${cause.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
                        <div 
                          className="bg-brand-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      
                      <NavLink 
                        to="/donate"
                        className="block w-full text-center py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-colors"
                      >
                        Support This Cause
                      </NavLink>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};