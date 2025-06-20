import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// ADIELA Logo component
const FooterLogo = () => (
  <Link 
    to="/" 
    className="flex items-center hover:opacity-80 transition-opacity duration-400 ease-luxury"
  >
    <img 
      src="/assets/images/logo.png" 
      alt="ADIELA - Jewelry & Emeralds" 
      className="h-16 md:h-18 w-auto object-contain filter brightness-0 invert"
      loading="lazy"
    />
  </Link>
);

const Footer = () => {
  const { t, currentLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.collection'), path: '/products' },
    { name: t('nav.journal'), path: '/journal' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const legalLinks = [
    { name: t('footer.termsOfService'), path: '/terms' },
    { name: t('footer.privacyPolicy'), path: '/privacy' },
  ];

  const socialMedia = [
    { name: 'Facebook', icon: <Facebook size={18} strokeWidth={1.5} />, path: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={18} strokeWidth={1.5} />, path: 'https://instagram.com' },
    { name: 'YouTube', icon: <Youtube size={18} strokeWidth={1.5} />, path: 'https://youtube.com' },
    { name: 'Twitter', icon: <Twitter size={18} strokeWidth={1.5} />, path: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-brand-black text-brand-white border-t border-stone-800">
      <div className="container-luxury section-padding !pb-8">
        {/* Top section with logo, newsletter, and main links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <FooterLogo />
            <p className="text-sm text-stone-400 leading-relaxed">
              {currentLanguage === 'en' 
                ? 'Discover the timeless allure of emeralds, meticulously crafted into exquisite 18k gold jewelry. Each piece tells a story of artisanship and elegance.'
                : 'Descubre el encanto atemporal de las esmeraldas, meticulosamente elaboradas en exquisita joyería de oro de 18k. Cada pieza cuenta una historia de artesanía y elegancia.'
              }
            </p>
            <div>
              <h4 className="font-display text-lg font-medium mb-4 text-brand-white">
                {t('footer.newsletter')}
              </h4>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-grow px-4 py-3 text-sm bg-brand-charcoal text-brand-white placeholder-stone-500 border border-stone-700 focus:ring-1 focus:ring-emerald-primary focus:border-emerald-primary outline-none transition-all duration-400 ease-luxury"
                />
                <button type="submit" className="btn-primary !px-6 !py-3 text-sm">
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="font-display text-lg font-medium mb-6 text-brand-white">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-stone-400 hover:text-brand-white transition-colors duration-400 ease-luxury"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-medium mb-6 text-brand-white">
                {t('footer.followUs')}
              </h4>
              <div className="flex items-center space-x-4 mb-6">
                {socialMedia.map(social => (
                  <a 
                    key={social.name} 
                    href={social.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-stone-400 hover:text-brand-white transition-colors duration-400 ease-luxury"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <ul className="space-y-3">
                {legalLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-stone-400 hover:text-brand-white transition-colors duration-400 ease-luxury"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-xs text-stone-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 