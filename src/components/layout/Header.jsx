import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Logo component with ADIELA branding
const Logo = () => (
  <Link 
    to="/" 
    className="flex items-center hover:opacity-80 transition-opacity duration-400 ease-luxury"
  >
    <img 
      src="/assets/images/logo.png" 
      alt="ADIELA - Jewelry & Emeralds" 
      className="h-12 md:h-14 w-auto object-contain"
      loading="eager"
    />
  </Link>
);

const Header = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.collection'), path: '/products' },
    { name: t('nav.journal'), path: '/journal' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  const NavItem = ({ path, name, onClick }) => (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'active' : ''}`
      }
    >
      {name}
    </NavLink>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-luxury
                  ${isScrolled 
                    ? 'backdrop-luxury shadow-minimal h-16 md:h-18' 
                    : 'bg-transparent h-20 md:h-24'}`}
    >
      <div className="container-luxury h-full">
        <div className="flex items-center justify-between h-full">
          <Logo />

          {/* Desktop Navigation - Minimal and sophisticated */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navLinks.map((link) => (
              <NavItem key={link.name} path={link.path} name={link.name} />
            ))}
          </nav>

          {/* Action Icons - Refined and minimal */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors duration-400 ease-luxury"
              aria-label="Toggle language"
            >
              <Globe size={16} strokeWidth={1.5} />
              <span className="text-xs font-medium uppercase tracking-wider">
                {currentLanguage === 'en' ? 'ES' : 'EN'}
              </span>
            </button>

            <button 
              aria-label="Search" 
              className="hidden sm:block text-text-secondary hover:text-text-primary transition-colors duration-400 ease-luxury"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Shopping Bag" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-400 ease-luxury"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
            </button>
            <button 
              className="lg:hidden text-text-secondary hover:text-text-primary transition-colors duration-400 ease-luxury"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Elegant slide-down design */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-16 lg:hidden bg-brand-black/20 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        >
          <nav 
            className="absolute top-0 left-0 w-full bg-brand-white shadow-depth pt-8 pb-12 animate-slide-up-luxury"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container-luxury">
              <ul className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <li key={`mobile-${link.name}`}>
                    <NavItem path={link.path} name={link.name} onClick={toggleMobileMenu} />
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-stone-200 space-y-4">
                {/* Language toggle in mobile menu */}
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-400 ease-luxury w-full"
                >
                  <Globe size={18} strokeWidth={1.5} />
                  <span className="text-sm font-medium">
                    {currentLanguage === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                  </span>
                </button>
                <button className="btn-primary w-full">
                  {t('buttons.exploreCollection')}
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 