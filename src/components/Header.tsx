
import React, { useState, useEffect } from 'react';
import { Menu, X, Crosshair } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Missions', href: '#missions' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Crosshair className="w-6 h-6 text-cod-green mr-2" />
            <span className="font-orbitron text-xl font-bold tracking-wider text-white">
              OPER<span className="text-cod-green">ATIVE</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-rajdhani text-white/80 uppercase text-sm hover:text-cod-green transition-colors duration-200 tracking-widest"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="tactical-btn text-sm"
            >
              DEPLOY
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`
          md:hidden fixed inset-0 z-40 bg-cod-black/95 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col p-8 pt-24 space-y-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-orbitron text-white/80 text-xl hover:text-cod-green transition-colors duration-200 tracking-widest"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="tactical-btn text-base inline-block text-center"
            onClick={toggleMenu}
          >
            DEPLOY
          </a>
        </div>
      </div>
      
      {/* Scan line */}
      <div className="scan-line"></div>
    </header>
  );
};

export default Header;
