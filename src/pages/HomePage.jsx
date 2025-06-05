import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StorySection from '@/components/home/StorySection';
import VideoSection from '@/components/home/VideoSection';
import JournalHighlights from '@/components/home/JournalHighlights';

// SEO and Page Transition Helper
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';

const HomePage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Colombian Emeralds & 18k Gold Jewelry | Emerald Heritage"
        description="Experience the legacy of Colombian emeralds. Discover exquisite 18k gold jewelry, rooted in tradition and timeless elegance. Explore earrings, crosses, and more."
        keywords="colombian emeralds, 18k gold jewelry, luxury emeralds, emerald earrings, emerald cross, fine jewelry, heritage, tradition"
      />
      <HeroSection />
      <StorySection />
      <FeaturedProducts />
      <VideoSection /> 
      <JournalHighlights />
      {/* Add other homepage sections here, e.g., Testimonials, Instagram Feed */}
    </PageTransition>
  );
};

export default HomePage; 