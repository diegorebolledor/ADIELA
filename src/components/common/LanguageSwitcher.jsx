import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = ({ onLanguageSelect }) => {
  const [showSwitcher, setShowSwitcher] = useState(true);

  // Check if language preference already exists
  useEffect(() => {
    const savedLanguage = localStorage.getItem('adiela-language');
    if (savedLanguage) {
      setShowSwitcher(false);
      onLanguageSelect(savedLanguage);
    }
  }, [onLanguageSelect]);

  const handleLanguageSelect = (language) => {
    localStorage.setItem('adiela-language', language);
    setShowSwitcher(false);
    onLanguageSelect(language);
  };

  if (!showSwitcher) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-brand-white flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="text-center px-6">
          {/* ADIELA Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12 md:mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-brand-black"
              style={{ letterSpacing: '0.1em' }}
            >
              ADIELA
            </h1>
            <p className="text-luxury text-text-tertiary mt-4 text-sm md:text-base">
              Jewelry with Emeralds
            </p>
          </motion.div>

          {/* Language Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-text-secondary mb-8 md:mb-12 text-lg md:text-xl">
              Please select your preferred language<br />
              <span className="text-text-tertiary">Por favor selecciona tu idioma preferido</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
              <motion.button
                onClick={() => handleLanguageSelect('en')}
                className="btn-primary w-full sm:w-48 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span>English</span>
                </span>
              </motion.button>

              <motion.button
                onClick={() => handleLanguageSelect('es')}
                className="btn-outline w-full sm:w-48 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🇪🇸</span>
                  <span>Español</span>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Subtle decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-emerald-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 md:w-32 h-24 md:h-32 bg-gold-accent/10 rounded-full blur-2xl"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageSwitcher; 