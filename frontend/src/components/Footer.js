import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-extrabold mb-4 text-cyan-400">
              Sagar Londhe
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m a software developer passionate about creating efficient, secure, and user-friendly software solutions.            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/experience', label: 'Experience' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Connect With Me</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sagar-londhe29', label: 'LinkedIn' },
                { icon: FaEnvelope, url: 'mailto:londhesagar2000@gmail.com', label: 'Email' },
                { icon: FaPhone, url: 'tel:+917028661897', label: 'Phone' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-xl bg-gray-700/50 hover:bg-cyan-600 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-110 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
            Copyright © {currentYear} <span className="font-bold text-white">SDL</span>. Designed By{' '}
            <span className="text-cyan-400 font-bold">
              Sagar Londhe
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

