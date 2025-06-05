import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <PageTransition>
      <SEO 
        title={`${t('about.title')} - ADIELA`}
        description={t('about.subtitle')}
        keywords="about us, ADIELA story, ethical emeralds, luxury jewelry, fine craftsmanship, Muisca heritage"
      />
      <div className="bg-brand-white min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-stone-50">
          <div className="container-luxury text-center">
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 md:mb-8">
              {t('about.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="mb-16 md:mb-20">
                <p className="text-base md:text-lg text-text-primary leading-relaxed mb-6">
                  {t('about.paragraph1')}
                </p>
                
                {/* Image placeholder - where the mountain image could also go */}
                <div className="aspect-video max-w-4xl mx-auto mb-8 md:mb-12 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-primary/10 to-gold-accent/10 border border-stone-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-emerald-primary/30 rounded-full mb-4 mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-emerald-primary/20 rounded-full"></div>
                      </div>
                      <p className="text-luxury text-text-tertiary text-xs">
                        {currentLanguage === 'en' ? 'Heritage Image' : 'Imagen de Herencia'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 1: Tradition and Prestige */}
              <div className="mb-16 md:mb-20">
                <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6 md:mb-8">
                  {t('about.sectionTitle1')}
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-text-primary leading-relaxed">
                    {t('about.paragraph2')}
                  </p>
                  <p className="text-base md:text-lg text-text-primary leading-relaxed">
                    {t('about.paragraph3')}
                  </p>
                </div>
              </div>

              {/* Section 2: Design Philosophy */}
              <div className="mb-16 md:mb-20">
                <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6 md:mb-8">
                  {t('about.sectionTitle2')}
                </h2>
                <p className="text-base md:text-lg text-text-primary leading-relaxed mb-8">
                  {t('about.paragraph4')}
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-emerald-primary pl-6 md:pl-8">
                    <p className="text-base md:text-lg text-text-primary leading-relaxed">
                      <span className="font-medium text-emerald-primary">
                        {currentLanguage === 'en' ? 'Simplicity and Elegance:' : 'Simplicidad y Elegancia:'}
                      </span>{' '}
                      {t('about.designPoint1').split(': ')[1]}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-primary pl-6 md:pl-8">
                    <p className="text-base md:text-lg text-text-primary leading-relaxed">
                      <span className="font-medium text-emerald-primary">
                        {currentLanguage === 'en' ? 'Storytelling through Design:' : 'Narración a través del Diseño:'}
                      </span>{' '}
                      {t('about.designPoint2').split(': ')[1]}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-primary pl-6 md:pl-8">
                    <p className="text-base md:text-lg text-text-primary leading-relaxed">
                      <span className="font-medium text-emerald-primary">
                        {currentLanguage === 'en' ? 'Lasting Quality:' : 'Calidad Duradera:'}
                      </span>{' '}
                      {t('about.designPoint3').split(': ')[1]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Commitment */}
              <div className="mb-16 md:mb-20">
                <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6 md:mb-8">
                  {t('about.sectionTitle3')}
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-text-primary leading-relaxed">
                    {t('about.paragraph5')}
                  </p>
                  <p className="text-base md:text-lg text-text-primary leading-relaxed font-medium text-emerald-primary">
                    {t('about.paragraph6')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
