import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll indicator opacity (disappears after 100px of scroll)
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 100);

  // Try to load the hero image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/assets/images/hero-background.jpg';
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Clean Overlay */}
      <div className="absolute inset-0">
        {imageLoaded ? (
          /* Your real image - Mountain with Golden Lyre */
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
        ) : (
          /* Elegant Background - Inspired by your mountain/lyre image */
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark via-emerald-primary to-gold-dark">
            {/* Mountain silhouettes effect */}
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
                <defs>
                  <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2D6B54" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#1B4F3C" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#0F2F22" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
                <polygon points="0,800 0,400 200,200 400,350 600,150 800,300 1000,100 1200,250 1200,800" fill="url(#mountainGrad)"/>
                <polygon points="0,800 0,500 150,350 350,450 550,250 750,400 950,200 1200,350 1200,800" fill="url(#mountainGrad)" opacity="0.7"/>
              </svg>
            </div>
            
            {/* Golden lyre inspiration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
              <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-gold-accent rounded-full flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-gold-light rounded-full"></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Clean Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/30 via-brand-black/10 to-brand-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-brand-black/10"></div>
        
        {/* Subtle emerald accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary/10 via-transparent to-gold-accent/10"></div>
        
        {/* Geometric accents - More subtle over the background */}
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 md:w-64 h-48 md:h-64 bg-gold-accent/20 rounded-full blur-2xl"></div>
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