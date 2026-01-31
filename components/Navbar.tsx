import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart, Droplets } from 'lucide-react';
import { APP_CONTENT } from '../config';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // In 3D layout, we keep navbar fixed transparent usually
  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 bg-gradient-to-b from-slate-900/80 to-transparent`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
             <Droplets className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-white">
            {APP_CONTENT.header.logoMain}<span className="font-sans text-sm font-normal opacity-80 ml-1">{APP_CONTENT.header.logoSuffix}</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {APP_CONTENT.header.links.map((link) => (
            <Link 
              key={link.label}
              to={link.path}
              className="text-sm font-medium tracking-wide hover:opacity-75 transition-opacity text-white"
            >
              {link.label}
            </Link>
          ))}
          <NavLink 
            to="/donate"
            className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <span>{APP_CONTENT.header.ctaBtn}</span>
            <Heart className="w-4 h-4 fill-current" />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden flex flex-col p-6 gap-4 animate-fade-in-up">
          {APP_CONTENT.header.links.map((link) => (
            <Link 
              key={link.label}
              to={link.path}
              className="text-slate-800 text-lg font-medium py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <NavLink 
            to="/donate"
            className="bg-brand-600 text-white w-full py-3 rounded-lg text-center font-bold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {APP_CONTENT.header.ctaBtn}
          </NavLink>
        </div>
      )}
    </nav>
  );
};