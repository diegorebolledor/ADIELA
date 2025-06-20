import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import ProductCard from '@/components/products/ProductCard';

// Placeholder data - replace with actual data from an API or CMS
const products = [
  {
    id: '1',
    slug: 'emerald-stud-earrings-18k-gold',
    name: 'Radiant Emerald Stud Earrings',
    description: 'Classic 18k gold stud earrings featuring vibrant Colombian emeralds - ADIELA signature piece.',
    price: '1250.00',
    images: [
      '/assets/images/products/emerald-stud-earrings-main.jpg',
      '/assets/images/products/emerald-stud-earrings-detail.jpg',
    ],
    category: 'Earrings',
    material: '18k Yellow Gold, Colombian Emeralds',
    availability: 'In Stock',
    altText: 'Radiant emerald stud earrings modelo clásico - Colombian emerald earrings in 18k gold from ADIELA collection'
  },
  {
    id: '2',
    slug: 'heritage-emerald-cross-pendant-18k-gold',
    name: 'Heritage Emerald Cross Pendant',
    description: 'An exquisite 18k gold cross adorned with sixteen brilliant Colombian emeralds - ADIELA heritage piece.',
    price: '2800.00',
    images: [
      '/assets/images/products/emerald-cross-pendant-main.jpg',
      '/assets/images/products/emerald-cross-pendant-detail.jpg',
    ],
    category: 'Pendants',
    material: '18k Yellow Gold, 16 Colombian Emeralds',
    availability: 'In Stock',
    altText: 'Heritage emerald cross pendant modelo heritage - Colombian emerald pendant cross in 18k gold from ADIELA collection'
  },
  // Add more products as needed
];

const ProductListingPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="ADIELA Emerald Jewelry Collection - Handcrafted Colombian Emeralds in 18k Gold"
        description="Discover the ADIELA collection: exquisite Colombian emerald jewelry handcrafted in 18k gold. Shop emerald earrings, pendants, and luxury pieces that blend ancient beauty with modern elegance."
        keywords="ADIELA collection, colombian emerald jewelry, 18k gold emerald earrings, emerald pendants, luxury emerald jewelry, handcrafted emerald jewelry, colombian heritage jewelry"
      />
      <div className="container-max section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-primary mb-3">ADIELA Collection</h1>
          <p className="text-lg text-neutral-text-light max-w-2xl mx-auto">
            Handcrafted Colombian emerald jewelry in 18k gold. Each piece embodies the timeless beauty and heritage of our artisanal craftsmanship.
          </p>
        </div>

        {/* Filters and Sorting - Placeholder */}
        {/* <div className="mb-8 flex justify-between items-center">
          <p className="text-sm text-neutral-text-light">Showing {products.length} products</p>
          <div>
             <select className="p-2 border border-neutral-border rounded-sm text-sm">
              <option>Sort by: Featured</option>
              <option>Sort by: Price Low to High</option>
              <option>Sort by: Price High to Low</option>
            </select>
          </div>
        </div> */}

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-text-light mb-4">Our collection is currently being curated.</p>
            <p className="text-neutral-text-light mb-6">Please check back soon to discover our exquisite emerald jewelry.</p>
            <Link to="/" className="btn-primary">Return to Homepage</Link>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default ProductListingPage; 