import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VideoSection = () => {
  const { t, currentLanguage } = useLanguage();

  const openVideoPlayer = () => {
    const message = currentLanguage === 'en' 
      ? 'Video player would open here.' 
      : 'El reproductor de video se abriría aquí.';
    alert(message);
  };

  return (
    <section className="bg-brand-black text-brand-white section-padding">
      <div className="container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="text-luxury text-stone-400 mb-4 md:mb-6 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {t('video.subtitle')}
          </motion.p>

          <motion.h2 
            className="text-display text-3xl md:text-4xl lg:text-5xl text-brand-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {t('video.title')} <span className="text-emerald-primary">{t('video.titleAccent')}</span>
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {t('video.description')}
          </motion.p>
          
          {/* Video placeholder with sophisticated design */}
          <motion.div 
            className="relative aspect-video max-w-4xl mx-auto overflow-hidden cursor-pointer group"
            onClick={openVideoPlayer}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {/* Sophisticated placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary/20 to-gold-accent/20 border border-stone-700">
              <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/80 group-hover:bg-brand-charcoal/60 transition-all duration-600 ease-luxury">
                <div className="text-center">
                  <PlayCircle 
                    size={64} 
                    className="text-brand-white/70 group-hover:text-brand-white group-hover:scale-110 transition-all duration-400 ease-luxury mx-auto mb-4" 
                  />
                  <p className="text-luxury text-stone-400 text-xs md:text-sm">
                    {currentLanguage === 'en' ? 'Video Preview' : 'Vista Previa del Video'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p 
            className="mt-6 md:mt-8 text-sm text-stone-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {currentLanguage === 'en' 
              ? 'Click to witness the artistry' 
              : 'Haz clic para presenciar la artesanía'
            }
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection; 