import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  const { t, currentLanguage } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = currentLanguage === 'en' 
      ? 'Contact form submitted (placeholder). Implement actual submission logic.'
      : 'Formulario de contacto enviado (placeholder). Implementar lógica de envío real.';
    alert(message);
    e.target.reset();
  };

  return (
    <PageTransition>
      <SEO 
        title={`${t('contact.title')} - ADIELA`}
        description={t('contact.subtitle')}
        keywords="contact ADIELA, customer support, jewelry inquiry, emeralds, custom jewelry"
      />
      <div className="bg-brand-white min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-stone-50">
          <div className="container-luxury text-center">
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 md:mb-8">
              {t('contact.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Contact Form */}
              <div className="card-floating p-8 md:p-12">
                <h2 className="text-display text-2xl md:text-3xl text-brand-black mb-8">
                  {t('contact.formTitle')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-3">
                      {t('contact.fullName')}
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      className="input-luxury" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-3">
                      {t('contact.emailAddress')}
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="input-luxury" 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-3">
                      {t('contact.subject')}
                    </label>
                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      className="input-luxury" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-3">
                      {t('contact.message')}
                    </label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows="6" 
                      required 
                      className="input-luxury resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="btn-cta w-full md:w-auto">
                      {t('contact.sendMessage')}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-12 pt-8 lg:pt-12">
                <div>
                  <h3 className="text-display text-xl md:text-2xl text-brand-black mb-4 flex items-center">
                    <Mail size={24} className="mr-4 text-emerald-primary" strokeWidth={1.5} /> 
                    {t('contact.emailUs')}
                  </h3>
                  <a 
                    href="mailto:hello@adiela.com" 
                    className="text-text-primary hover:text-emerald-primary transition-colors duration-400 ease-luxury text-lg"
                  >
                    hello@adiela.com
                  </a>
                  <p className="text-sm text-text-tertiary mt-2">
                    {t('contact.emailDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-display text-xl md:text-2xl text-brand-black mb-4 flex items-center">
                    <Phone size={24} className="mr-4 text-emerald-primary" strokeWidth={1.5} /> 
                    {t('contact.callUs')}
                  </h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-text-primary hover:text-emerald-primary transition-colors duration-400 ease-luxury text-lg"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-sm text-text-tertiary mt-2">
                    {t('contact.callDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-display text-xl md:text-2xl text-brand-black mb-4 flex items-center">
                    <MapPin size={24} className="mr-4 text-emerald-primary" strokeWidth={1.5} /> 
                    {t('contact.visitUs')}
                  </h3>
                  <p className="text-text-primary text-lg mb-3">
                    {currentLanguage === 'en' 
                      ? '123 Emerald Way, Bogotá, Colombia'
                      : '123 Vía Esmeralda, Bogotá, Colombia'
                    }
                  </p>
                  <a 
                    href="#" 
                    className="text-emerald-primary hover:text-emerald-light transition-colors duration-400 ease-luxury font-medium"
                  >
                    {t('contact.requestAppointment')}
                  </a>
                </div>

                {/* FAQ Link */}
                <div className="pt-8 border-t border-stone-200">
                  <Link 
                    to="/faq" 
                    className="text-emerald-primary hover:text-emerald-light transition-colors duration-400 ease-luxury font-medium text-lg"
                  >
                    {t('contact.faq')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ContactPage; 