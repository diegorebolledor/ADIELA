import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react'; // Icon for view details or quick view

const ProductCard = ({ product }) => {
  if (!product) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card overflow-hidden group flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link to={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <img 
          src={product.images && product.images[0] ? product.images[0] : '/assets/images/products/placeholder_product.jpg'} 
          alt={product.altText || `${product.name} - ${product.category || 'Emerald jewelry'} piece from ADIELA Colombian emerald collection in 18k gold`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-apple"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-apple flex items-center justify-center">
          <Eye size={36} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-apple" />
        </div>
      </Link>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {product.category && (
          <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-xs text-gold-secondary hover:text-gold-secondary-dark uppercase tracking-wider mb-1 font-medium">
            {product.category}
          </Link>
        )}
        <h3 className="font-serif-display text-xl lg:text-2xl font-semibold text-emerald-primary mb-1">
          <Link to={`/products/${product.slug}`} className="hover:text-emerald-primary-dark transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-neutral-text-light mb-3 flex-grow">
          {product.description?.substring(0,70)}{product.description?.length > 70 ? '...' : ''} 
        </p>
        <p className="text-lg font-semibold text-neutral-text mb-4">
          ${product.price}
        </p>
        <Link 
          to={`/products/${product.slug}`} 
          className="btn-outline w-full mt-auto"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard; 