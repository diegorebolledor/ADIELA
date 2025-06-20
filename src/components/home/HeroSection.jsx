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
      {/* Background Image with Liquid Glass Effect */}
      <div className="absolute inset-0">
        {/* Background Image - Mountain with Golden Lyre */}
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
        
        {/* Liquid Glass Overlay - Frosted glass effect with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-[2px]"></div>
        
        {/* Enhanced Glass Morphism Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-gold-400/15"></div>
        
        {/* Liquid Glass Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-white/20 to-emerald-400/10 rounded-full blur-3xl backdrop-blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-tl from-gold-300/20 to-white/10 rounded-full blur-2xl backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-emerald-300/15 to-gold-200/15 rounded-full blur-3xl backdrop-blur-sm"></div>
      </div>

      {/* Liquid Glass Content Container */}
      <div className="container-luxury relative z-10 text-center py-24 md:py-32">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Liquid Glass Background for Text */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl transform -rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-gold-400/10 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl transform rotate-1"></div>
          
          <div className="relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            {/* Subtitle with Glass Effect */}
            <motion.p 
              className="text-luxury text-white/95 mb-6 md:mb-8 lg:mb-12 text-sm md:text-base tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ willChange: 'opacity', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Main Headline with Liquid Glass Typography */}
            <motion.h1 
              className="hero-title text-white mb-6 md:mb-8 lg:mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ 
                willChange: 'opacity',
                textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              <span className="block">{t('hero.title')}</span>
              <span 
                className="block mt-2"
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #34D399 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 2px 15px rgba(16, 185, 129, 0.3)'
                }}
              >
                {t('hero.titleAccent')}
              </span>
            </motion.h1>

            {/* Description with Enhanced Glass Effect */}
            <motion.p 
              className="hero-subtitle text-white/90 max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{ 
                willChange: 'opacity',
                textShadow: '0 2px 10px rgba(0,0,0,0.4)'
              }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Liquid Glass Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ willChange: 'opacity' }}
            >
              <Link 
                to="/products" 
                className="liquid-glass-btn liquid-glass-btn-primary w-full sm:w-auto"
              >
                {t('hero.exploreCollection')}
              </Link>
              <Link 
                to="/about" 
                className="liquid-glass-btn liquid-glass-btn-secondary w-full sm:w-auto"
              >
                {t('hero.ourStory')}
              </Link>
            </motion.div>
          </div>
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