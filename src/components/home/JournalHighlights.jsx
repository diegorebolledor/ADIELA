import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// Placeholder data with translations
const highlightedPosts = [
  {
    id: '1',
    slug: 'the-ancient-allure-of-emeralds',
    title: {
      en: 'The Ancient Allure of Emeralds',
      es: 'El Encanto Ancestral de las Esmeraldas'
    },
    excerpt: {
      en: 'Delve into the rich history of emeralds, revered as symbols of power, protection, and eternal spring.',
      es: 'Sumérgete en la rica historia de las esmeraldas, veneradas como símbolos de poder, protección y primavera eterna.'
    },
    date: '2024-05-28',
    category: {
      en: 'History & Lore',
      es: 'Historia y Tradición'
    },
    imageUrl: '/assets/images/blog/ancient_emeralds.jpg',
    readingTime: {
      en: '5 min read',
      es: '5 min de lectura'
    }
  },
  {
    id: '2',
    slug: 'gold-and-emeralds-timeless-pairing',
    title: {
      en: 'Gold and Emeralds: A Timeless Pairing',
      es: 'Oro y Esmeraldas: Una Pareja Atemporal'
    },
    excerpt: {
      en: 'Explore the symbiosis between 18k gold and vibrant emeralds, a combination that has signified luxury and elegance.',
      es: 'Explora la simbiosis entre el oro de 18k y las vibrantes esmeraldas, una combinación que ha significado lujo y elegancia.'
    },
    date: '2024-06-10',
    category: {
      en: 'Design',
      es: 'Diseño'
    },
    imageUrl: '/assets/images/blog/gold_emeralds.jpg',
    readingTime: {
      en: '4 min read',
      es: '4 min de lectura'
    }
  },
];

const JournalHighlights = () => {
  const { t, currentLanguage } = useLanguage();
  const postsToShow = highlightedPosts.slice(0, 2);

  return (
    <section className="bg-brand-white section-padding">
      <div className="container-luxury">
        <div className="text-center mb-12 md:mb-16">
          <motion.p 
            className="text-luxury text-text-tertiary mb-4 md:mb-6 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {t('journal.subtitle')}
          </motion.p>

          <motion.h2 
            className="text-display text-3xl md:text-4xl lg:text-5xl text-brand-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {t('journal.title')} <span className="text-emerald-primary">{t('journal.titleAccent')}</span>
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {currentLanguage === 'en' 
              ? 'Insights, stories, and inspiration from the world of ADIELA.'
              : 'Perspectivas, historias e inspiración del mundo de ADIELA.'
            }
          </motion.p>
        </div>

        {postsToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {postsToShow.map((post, index) => (
              <motion.article 
                key={post.id}
                className="card-floating p-6 md:p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + (index * 0.2), ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
              >
                <div className="aspect-luxury bg-stone-200 mb-6 relative overflow-hidden">
                  {/* Placeholder for blog image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary/10 to-gold-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-emerald-primary/30 rounded-full mb-4 mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-emerald-primary/20 rounded-full"></div>
                      </div>
                      <p className="text-luxury text-text-tertiary text-xs">
                        {currentLanguage === 'en' ? 'Article Image' : 'Imagen del Artículo'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-text-tertiary">
                    <span className="text-luxury">{post.category[currentLanguage]}</span>
                    <span>{post.readingTime[currentLanguage]}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-medium text-brand-black leading-tight">
                    {post.title[currentLanguage]}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {post.excerpt[currentLanguage]}
                  </p>
                  
                  <Link 
                    to={`/journal/${post.slug}`} 
                    className="btn-minimal inline-block"
                  >
                    {t('journal.readMore')}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary">
            {currentLanguage === 'en' 
              ? 'No journal highlights available at the moment.'
              : 'No hay destacados de la revista disponibles en este momento.'
            }
          </p>
        )}

        <div className="text-center mt-12 md:mt-16">
          <Link to="/journal" className="btn-secondary">
            {t('buttons.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JournalHighlights; 