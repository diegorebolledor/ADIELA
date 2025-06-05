import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll indicator opacity (disappears after 100px of scroll)
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 100);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Fallback background - elegant emerald gradient */}
        <div className="absolute inset-0 hero-background-fallback"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/hero-background.jpg')`,
          }}
        ></div>
        
        {/* Sophisticated Overlay - Multiple layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/40 via-brand-black/20 to-brand-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-brand-black/20"></div>
        
        {/* Subtle emerald accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary/5 via-transparent to-emerald-primary/10"></div>
        
        {/* Geometric accents - More subtle over the image */}
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 md:w-64 h-48 md:h-64 bg-gold-accent/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container-luxury relative z-10 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Subtitle - Enhanced contrast for readability */}
          <motion.p 
            className="text-luxury text-brand-white/90 mb-6 md:mb-8 lg:mb-12 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Main Headline - Bold white text for dramatic contrast */}
          <motion.h1 
            className="hero-title text-brand-white mb-6 md:mb-8 lg:mb-12 max-w-5xl mx-auto px-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="block">{t('hero.title')}</span>
            <span className="text-emerald-primary drop-shadow-md">{t('hero.titleAccent')}</span>
          </motion.h1>

          {/* Description - Excellent readability over image */}
          <motion.p 
            className="hero-subtitle text-brand-white/85 max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16 px-4 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Call-to-action buttons - Enhanced for visibility */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link to="/products" className="btn-primary w-full sm:w-auto shadow-lg">
              {t('hero.exploreCollection')}
            </Link>
            <Link to="/about" className="btn-outline-white w-full sm:w-auto">
              {t('hero.ourStory')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - Fades out when scrolling */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
          style={{ opacity: scrollIndicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollIndicatorOpacity }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center space-y-2 text-brand-white/70">
            <span className="text-xs text-luxury">{t('hero.scroll')}</span>
            <div className="w-px h-6 md:h-8 bg-brand-white/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 