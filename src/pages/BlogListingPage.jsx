import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import BlogCard from '@/components/blog/BlogCard';

// Placeholder data - replace with actual data from an API or CMS
const blogPosts = [
  {
    id: '1',
    slug: 'the-ancient-allure-of-colombian-emeralds',
    title: 'The Ancient Allure of Colombian Emeralds: A Gem of Gods and Kings',
    excerpt: 'Delve into the rich history of Colombian emeralds, treasured by indigenous cultures long before the Spanish arrival, and revered as symbols of power, protection, and eternal spring.',
    date: '2024-05-28',
    author: 'Emerald Heritage Archives',
    category: 'History & Lore',
    imageUrl: '/assets/images/blog/ancient_emeralds.jpg', // TODO: Replace with actual image path
    readingTime: '5 min read'
  },
  {
    id: '2',
    slug: 'gold-and-emeralds-a-timeless-pairing',
    title: 'Gold and Emeralds: A Timeless Pairing of Luxury and Meaning',
    excerpt: 'Explore the symbiosis between 18k gold and vibrant emeralds, a combination that has signified wealth, status, and profound meaning across civilizations.',
    date: '2024-06-10',
    author: 'Isabella Montoya',
    category: 'Design & Craftsmanship',
    imageUrl: '/assets/images/blog/gold_emeralds.jpg', // TODO: Replace with actual image path
    readingTime: '4 min read'
  },
  {
    id: '3',
    slug: 'caring-for-your-emerald-jewelry',
    title: 'Caring for Your Emerald Jewelry: Tips to Preserve its Beauty',
    excerpt: 'Learn the best practices for maintaining the luster and integrity of your precious emerald and gold jewelry for generations to come.',
    date: '2024-06-22',
    author: 'The Gemologist',
    category: 'Jewelry Care',
    imageUrl: '/assets/images/blog/emerald_care.jpg', // TODO: Replace with actual image path
    readingTime: '3 min read'
  }
];

const BlogListingPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="The Journal - Emerald Stories & Insights | Emerald Heritage"
        description="Explore the world of Colombian emeralds through our journal. Discover stories of heritage, design inspiration, and the timeless allure of these magnificent gems."
        keywords="emerald blog, jewelry journal, colombian emerald history, gemstone stories, luxury jewelry insights"
      />
      <div className="container-max section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-primary mb-3">The Emerald Journal</h1>
          <p className="text-lg text-neutral-text-light max-w-2xl mx-auto">
            Stories of heritage, craftsmanship, and the enduring allure of Colombian emeralds.
          </p>
        </div>

        {/* Featured Post - Placeholder - Could be the latest or a pinned post */}
        {blogPosts.length > 0 && (
            <div className="mb-12 md:mb-16">
                <BlogCard post={blogPosts[0]} isFeatured={true} />
            </div>
        )}

        {blogPosts.length > 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
            {blogPosts.slice(1).map((post) => ( // Display remaining posts
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : blogPosts.length === 1 ? (
          <div className="text-center py-8">
            <p className="text-neutral-text-light">More stories coming soon.</p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-text-light mb-4">Our journal is currently empty.</p>
            <p className="text-neutral-text-light mb-6">Check back soon for captivating stories and insights.</p>
            <Link to="/" className="btn-primary">Return to Homepage</Link>
          </div>
        )}
        
        {/* Pagination - Placeholder */}
        {/* <div className="mt-12 md:mt-16 text-center">
          <button className="btn-outline">Load More Articles</button>
        </div> */}
      </div>
    </PageTransition>
  );
};

export default BlogListingPage; 