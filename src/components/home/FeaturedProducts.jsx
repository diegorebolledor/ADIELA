import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Placeholder data - updated for ADIELA
const products = [
  {
    id: '1',
    slug: 'emerald-stud-earrings-18k-gold',
    name: {
      en: 'Radiant Emerald Stud Earrings',
      es: 'Aretes de Esmeralda Radiante'
    },
    description: {
      en: 'Classic 18k gold stud earrings featuring vibrant emeralds.',
      es: 'Aretes clásicos de oro 18k con vibrantes esmeraldas.'
    },
    price: '1250.00',
    images: ['/assets/images/products/earrings_main.jpg'],
    category: 'Earrings',
  },
  {
    id: '2',
    slug: 'adiela-emerald-cross-pendant',
    name: {
      en: 'ADIELA Emerald Cross Collection',
      es: 'Colección Cruz de Esmeralda ADIELA'
    },
    description: {
      en: 'A magnificent 18k gold cross adorned with brilliant Colombian emeralds, representing faith and elegance.',
      es: 'Una magnífica cruz de oro 18k adornada con brillantes esmeraldas colombianas, representando fe y elegancia.'
    },
    price: '3200.00',
    images: ['/assets/images/products/emerald_cross.jpg'],
    category: 'Pendants',
    featured: true,
    isSignature: true
  },
];

const FeaturedProducts = () => {
  const { t, currentLanguage } = useLanguage();
  const featured = products.slice(0, 2);

  return (
    <section className="bg-stone-50 section-padding">
      <div className="container-luxury">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury text-text-tertiary mb-4 md:mb-6 text-sm md:text-base">
            {t('featured.subtitle')}
          </p>
          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-brand-black mb-4">
            {t('featured.title')} <span className="text-emerald-primary">{t('featured.titleAccent')}</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            {currentLanguage === 'en' 
              ? 'Discover our most cherished pieces from our inaugural collection, each embodying the spirit of ADIELA.'
              : 'Descubre nuestras piezas más queridas de nuestra colección inaugural, cada una encarnando el espíritu de ADIELA.'
            }
          </p>
        </div>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {featured.map((product) => (
              <div key={product.id} className={`card-floating p-6 md:p-8 ${product.isSignature ? 'ring-2 ring-emerald-primary/20' : ''}`}>
                <div className="aspect-luxury bg-white mb-6 relative overflow-hidden rounded-sm border border-stone-200">
                  <img 
                    src={product.images[0]} 
                    alt={product.name[currentLanguage]}
                    className="w-full h-full object-contain p-8 transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary/10 to-gold-accent/10 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-16 h-16 border border-emerald-primary/30 rounded-full mb-4 mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-emerald-primary/20 rounded-full"></div>
                      </div>
                      <p className="text-luxury text-text-tertiary text-xs">
                        {currentLanguage === 'en' ? 'Product Image' : 'Imagen del Producto'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  {product.isSignature && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-primary/10 text-emerald-primary">
                        {currentLanguage === 'en' ? 'Signature Collection' : 'Colección Firma'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-display font-medium text-brand-black mb-3">
                    {product.name[currentLanguage]}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {product.description[currentLanguage]}
                  </p>
                  <p className="text-2xl font-display font-medium text-emerald-primary mb-6">
                    ${product.price}
                  </p>
                  <Link 
                    to={`/products/${product.slug}`} 
                    className="btn-outline"
                  >
                    {t('buttons.learnMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary">
            {currentLanguage === 'en' 
              ? 'Featured products are being selected. Please check back soon.'
              : 'Los productos destacados están siendo seleccionados. Por favor, vuelve pronto.'
            }
          </p>
        )}

        <div className="text-center mt-12 md:mt-16">
          <Link to="/products" className="btn-primary">
            {t('buttons.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 