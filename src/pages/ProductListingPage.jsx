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
    description: 'Classic 18k gold stud earrings featuring vibrant Colombian emeralds.',
    price: '1250.00',
    images: [
      '/assets/images/products/earrings_main.jpg', // TODO: Replace with actual image path
      '/assets/images/products/earrings_detail1.jpg', // TODO: Replace with actual image path
    ],
    category: 'Earrings',
    material: '18k Yellow Gold, Colombian Emeralds',
    availability: 'In Stock'
  },
  {
    id: '2',
    slug: 'heritage-emerald-cross-pendant-18k-gold',
    name: 'Heritage Emerald Cross Pendant',
    description: 'An exquisite 18k gold cross adorned with sixteen brilliant Colombian emeralds.',
    price: '2800.00',
    images: [
      '/assets/images/products/cross_main.jpg', // TODO: Replace with actual image path
      '/assets/images/products/cross_detail1.jpg', // TODO: Replace with actual image path
    ],
    category: 'Pendants',
    material: '18k Yellow Gold, 16 Colombian Emeralds',
    availability: 'In Stock'
  },
  // Add more products as needed
];

const ProductListingPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Collection - Emerald Jewelry | Emerald Heritage"
        description="Explore our exclusive collection of Colombian emerald jewelry, crafted in 18k gold. Discover earrings, pendants, and more symbols of heritage and luxury."
        keywords="all products, emerald collection, 18k gold jewelry, shop emeralds, colombian emeralds"
      />
      <div className="container-max section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-primary mb-3">Our Collection</h1>
          <p className="text-lg text-neutral-text-light max-w-2xl mx-auto">
            Each piece in our collection is a testament to the enduring beauty of Colombian emeralds and the artistry of fine jewelry.
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