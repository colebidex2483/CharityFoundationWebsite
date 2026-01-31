import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, ChevronDown } from 'lucide-react';
import { APP_CONTENT } from '../config';

export const Hero: React.FC = () => {
  const content = APP_CONTENT.hero;
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 parallax-bg"
        style={{
          backgroundImage: `url("${content.image}")`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
          {content.badge}
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {content.titleLine1} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-100 to-brand-500">{content.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {content.description}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <NavLink 
            to="/donate" 
            className="w-full md:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-brand-500/25 flex items-center justify-center gap-2"
          >
            {content.primaryBtn}
            <ArrowRight className="w-5 h-5" />
          </NavLink>
          <Link 
            to="/#testimonials"
            className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
          >
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {content.secondaryBtn}
          </Link>
        </div>
      </div>

      {/* Scroll indicator - Arrow */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-10 h-10 opacity-80" />
      </div>
    </section>
  );
};