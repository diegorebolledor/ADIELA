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
      {/* Your Dither Image Background */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/hero-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
        
        {/* Minimal Overlay for Text Readability - Optimized for dither image */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/25 via-transparent to-brand-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/35 via-transparent to-transparent"></div>
      </div>

      <div className="container-luxury relative z-10 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Subtitle - Enhanced contrast for readability */}
          <motion.p 
            className="text-luxury text-brand-white/90 mb-6 md:mb-8 lg:mb-12 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ willChange: 'opacity' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Main Headline - Bold white text for dramatic contrast */}
          <motion.h1 
            className="hero-title text-brand-white mb-6 md:mb-8 lg:mb-12 max-w-5xl mx-auto px-4 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ willChange: 'opacity' }}
          >
            <span className="block">{t('hero.title')}</span>
            <span className="text-emerald-primary drop-shadow-md">{t('hero.titleAccent')}</span>
          </motion.h1>

          {/* Description - Excellent readability over image */}
          <motion.p 
            className="hero-subtitle text-brand-white/85 max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16 px-4 drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ willChange: 'opacity' }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Call-to-action buttons - High contrast for maximum impact */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ willChange: 'opacity' }}
          >
            <Link to="/products" className="btn-cta w-full sm:w-auto">
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