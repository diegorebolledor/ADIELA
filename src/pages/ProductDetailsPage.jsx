import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import { ChevronLeft, ChevronRight, CheckCircle, ShieldCheck, Truck, Gift } from 'lucide-react';

// Placeholder data - replace with actual data from an API or CMS
const products = [
  {
    id: '1',
    slug: 'emerald-stud-earrings-18k-gold',
    name: 'Radiant Emerald Stud Earrings',
    description: 'Embrace timeless elegance with these classic 18k gold stud earrings, each showcasing a vibrant, hand-selected Colombian emerald known for its exceptional color and clarity. A symbol of prestige and natural beauty.',
    longDescription: "Crafted with meticulous attention to detail, these Radiant Emerald Stud Earrings are set in lustrous 18k yellow gold that beautifully complements the deep green hue of the Colombian emeralds. Each emerald is ethically sourced and chosen for its unique character, making every pair a one-of-a-kind treasure. Perfect for everyday luxury or as a meaningful gift, these earrings embody the rich heritage and protective qualities attributed to emeralds throughout history.",
    price: '1250.00',
    images: [
      '/assets/images/products/earrings_main.jpg', // TODO: Replace with actual image path
      '/assets/images/products/earrings_detail1.jpg',
      '/assets/images/products/earrings_lifestyle.jpg'
    ],
    category: 'Earrings',
    material: '18k Yellow Gold, Colombian Emeralds (Approx. 0.50 ctw each)',
    dimensions: 'Emerald: 5mm round cut',
    availability: 'In Stock',
    sku: 'EH-E001',
    relatedProducts: ['heritage-emerald-cross-pendant-18k-gold'] // slugs of related products
  },
  {
    id: '2',
    slug: 'heritage-emerald-cross-pendant-18k-gold',
    name: 'Heritage Emerald Cross Pendant',
    description: 'An exquisite 18k gold cross, gracefully adorned with sixteen brilliant Colombian emeralds, symbolizing faith, protection, and enduring heritage.',
    longDescription: "The Heritage Emerald Cross Pendant is a masterpiece of spiritual elegance and refined craftsmanship. Sixteen carefully selected Colombian emeralds, each radiating with a lush green brilliance, are pave-set into a substantial 18k yellow gold cross. This piece serves not only as a symbol of faith but also as a connection to the ancient traditions where emeralds were revered for their protective and healing powers. The pendant hangs from a delicate gold chain, making it a significant and cherished heirloom.",
    price: '2800.00',
    images: [
      '/assets/images/products/cross_main.jpg', // TODO: Replace with actual image path
      '/assets/images/products/cross_detail1.jpg',
      '/assets/images/products/cross_lifestyle.jpg'
    ],
    category: 'Pendants',
    material: '18k Yellow Gold, 16 Colombian Emeralds (Approx. 0.05 ctw each, 0.80 ctw total)',
    dimensions: 'Pendant: 25mm x 18mm; Chain: 18 inches',
    availability: 'In Stock',
    sku: 'EH-P001',
    relatedProducts: ['emerald-stud-earrings-18k-gold']
  },
];

// Helper function to fetch product by slug
const getProductBySlug = (slug) => products.find(p => p.slug === slug);

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = getProductBySlug(slug);
    setProduct(foundProduct);
    setCurrentImageIndex(0); // Reset image index when product changes
    setQuantity(1); // Reset quantity
  }, [slug]);

  if (!product) {
    return (
      <PageTransition>
        <div className="container-max section-padding text-center">
          <h1 className="text-3xl font-bold text-emerald-primary mb-4">Product Not Found</h1>
          <p className="text-neutral-text-light mb-6">We couldn't find the product you were looking for.</p>
          <Link to="/products" className="btn-primary">Back to Collection</Link>
        </div>
      </PageTransition>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };
  
  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  }

  return (
    <PageTransition>
      <SEO 
        title={`${product.name} | Emerald Heritage`}
        description={product.description}
        keywords={`${product.name}, colombian emerald, 18k gold, ${product.category}, luxury jewelry`}
        image={product.images[0]} // Use main product image for SEO
      />
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="w-full">
            <div className="relative aspect-square bg-neutral-bg-alt rounded-md overflow-hidden shadow-card">
              <img 
                src={product.images[currentImageIndex]} 
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500 ease-apple"
              />
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-neutral-text p-2 rounded-full shadow-md transition-all ease-apple focus:outline-none focus:ring-2 focus:ring-emerald-primary"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-neutral-text p-2 rounded-full shadow-md transition-all ease-apple focus:outline-none focus:ring-2 focus:ring-emerald-primary"
                    aria-label="Next Image"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ease-apple ${currentImageIndex === index ? 'bg-emerald-primary scale-125' : 'bg-neutral-border hover:bg-neutral-text-light'}`}
                        aria-label={`View Image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* Thumbnails (optional) */}
            {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-2">
                    {product.images.map((img, index) => (
                        <button 
                            key={`thumb-${index}`}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ease-apple ${currentImageIndex === index ? 'border-emerald-primary' : 'border-transparent hover:border-neutral-border'}`}
                        >
                            <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                        </button>
                    ))}
                </div>
            )}
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-sm text-emerald-primary hover:underline mb-1">{product.category}</Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-emerald-primary mb-3">{product.name}</h1>
            <p className="text-2xl font-semibold text-gold-secondary mb-4">${product.price}</p>
            
            <div className="prose prose-sm text-neutral-text-light mb-6" dangerouslySetInnerHTML={{ __html: product.longDescription || product.description }} />
            
            {/* Product Details/Specs */}
            <div className="space-y-2 text-sm text-neutral-text-light mb-6">
                {product.material && <p><strong className="font-medium text-neutral-text">Material:</strong> {product.material}</p>}
                {product.dimensions && <p><strong className="font-medium text-neutral-text">Dimensions:</strong> {product.dimensions}</p>}
                {product.sku && <p><strong className="font-medium text-neutral-text">SKU:</strong> {product.sku}</p>}
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center border border-neutral-border rounded-sm">
                <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 text-lg text-neutral-text-light hover:bg-neutral-bg-alt" aria-label="Decrease quantity">-</button>
                <span className="px-4 py-2 text-md font-medium min-w-[40px] text-center">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 text-lg text-neutral-text-light hover:bg-neutral-bg-alt" aria-label="Increase quantity">+</button>
              </div>
              <button className="btn-primary flex-grow !py-2.5 text-base">
                Add to Bag
              </button>
            </div>
            
            {/* Availability */}
             <p className={`text-sm mb-6 flex items-center ${product.availability === 'In Stock' ? 'text-emerald-primary-light' : 'text-red-600'}`}>
                <CheckCircle size={16} className="mr-2" /> {product.availability}
            </p>

            {/* Trust Badges / USPs */}
            <div className="space-y-3 text-sm border-t border-neutral-border pt-6">
              <div className="flex items-center text-neutral-text-light">
                <ShieldCheck size={20} className="mr-3 text-emerald-primary" />
                <span>Authentic Colombian Emeralds, 18k Gold Guaranteed</span>
              </div>
              <div className="flex items-center text-neutral-text-light">
                <Truck size={20} className="mr-3 text-emerald-primary" />
                <span>Complimentary Insured Worldwide Shipping</span>
              </div>
              <div className="flex items-center text-neutral-text-light">
                <Gift size={20} className="mr-3 text-emerald-primary" />
                <span>Luxury Packaging & Certificate of Authenticity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section (Placeholder) */}
        {/* <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-primary mb-6 md:mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts && product.relatedProducts.map(slug => {
                const relatedProd = getProductBySlug(slug);
                if(relatedProd) return <ProductCard key={relatedProd.id} product={relatedProd} />
                return null;
            })}
          </div>
        </div> */}
      </div>
    </PageTransition>
  );
};

export default ProductDetailsPage; 