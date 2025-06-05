import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-white section-padding">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p 
              className="text-luxury text-text-tertiary mb-4 md:mb-6 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {t('story.subtitle')}
            </motion.p>

            <motion.h2 
              className="text-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand-black mb-6 md:mb-8 lg:mb-12 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {t('story.title')} 
              <span className="text-emerald-primary"> {t('story.titleAccent')}</span>
            </motion.h2>

            <motion.div
              className="space-y-4 md:space-y-6 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {t('story.paragraph1')}
              </p>
              
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {t('story.paragraph2')}
              </p>

              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {t('story.paragraph3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="btn-minimal">
                {t('story.discoverStory')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Element - Minimal and sophisticated */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-luxury bg-stone-100 relative overflow-hidden">
              {/* Placeholder for first collection image */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary/10 to-gold-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 md:w-24 h-20 md:h-24 border border-emerald-primary/30 rounded-full mb-4 md:mb-6 mx-auto flex items-center justify-center">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-emerald-primary/20 rounded-full"></div>
                    </div>
                    <p className="text-luxury text-text-tertiary text-sm md:text-base">
                      {t('story.subtitle')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-24 md:w-32 h-24 md:h-32 bg-gold-accent/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection; 