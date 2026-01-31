import React from 'react';
import { Droplets, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { APP_CONTENT } from '../config';

export const Footer: React.FC = () => {
  const { header, footer, contact } = APP_CONTENT;

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal animation="fade-up" delay="0s" className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-white/10">
                 <Droplets className="w-6 h-6 text-brand-500" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                {header.logoMain}<span className="font-sans text-sm font-normal opacity-80 ml-1">{header.logoSuffix}</span>
              </span>
            </NavLink>
            <p className="text-slate-400 leading-relaxed">
              {footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal animation="fade-up" delay="0.1s">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-400 hover:text-brand-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="fade-up" delay="0.2s">
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                <span>{contact.address.line1}, <br/> {contact.address.line2}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal animation="fade-up" delay="0.3s">
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter to get latest updates and news.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-brand-500 text-white placeholder-slate-500"
              />
              <button type="submit" className="w-full px-4 py-3 bg-brand-600 hover:bg-brand-500 rounded-lg font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>{footer.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             {footer.legalLinks.map((link) => (
                <a key={link.label} href={link.path} className="hover:text-white">{link.label}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};