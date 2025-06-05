import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';

const BlogCard = ({ post, isFeatured = false }) => {
  if (!post) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.article 
      className={`bg-white rounded-lg shadow-card overflow-hidden group flex flex-col ${isFeatured ? 'lg:flex-row' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link 
        to={`/journal/${post.slug}`}
        className={`block relative overflow-hidden ${isFeatured ? 'lg:w-1/2 aspect-video lg:aspect-[4/3]' : 'aspect-video'}`}
      >
        <img 
          src={post.imageUrl || '/assets/images/blog/placeholder_blog.jpg'} // TODO: Replace with placeholder
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-apple"
        />
      </Link>

      <div className={`p-5 md:p-6 flex flex-col flex-grow ${isFeatured ? 'lg:w-1/2 lg:py-8 lg:px-8' : ''}`}>
        {post.category && (
          <Link to={`/journal?category=${post.category.toLowerCase()}`} className="text-xs text-gold-secondary hover:text-gold-secondary-dark uppercase tracking-wider mb-2 font-medium">
            {post.category}
          </Link>
        )}
        <h3 
            className={`font-serif-display font-semibold text-emerald-primary mb-3 ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
          <Link to={`/journal/${post.slug}`} className="hover:text-emerald-primary-dark transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className={`text-sm text-neutral-text-light mb-4 flex-grow ${isFeatured ? 'lg:text-base' : ''}`}>
          {post.excerpt?.substring(0, isFeatured ? 150 : 100)}{post.excerpt?.length > (isFeatured ? 150 : 100) ? '...' : ''}
        </p>
        <div className="text-xs text-neutral-text-light/80 flex items-center space-x-3 mt-auto pt-3 border-t border-neutral-border/50">
          {post.date && (
            <span className="flex items-center">
              <Calendar size={14} className="mr-1.5" /> 
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          )}
          {post.readingTime && (
            <span className="flex items-center">
              <Clock size={14} className="mr-1.5" /> 
              {post.readingTime}
            </span>
          )}
        </div>
        {isFeatured && (
            <Link to={`/journal/${post.slug}`} className="btn-outline mt-6 self-start">
                Read Full Story
            </Link>
        )}
      </div>
    </motion.article>
  );
};

export default BlogCard; 