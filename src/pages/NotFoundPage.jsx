import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Page Not Found (404) | Emerald Heritage"
        description="The page you are looking for does not exist or has been moved. Return to the Emerald Heritage homepage to explore our Colombian emerald jewelry."
        noindex={true} // Important for SEO to not index 404 pages
      />
      <div className="container-max section-padding flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
        {/* Subtract header/footer height estimate for vertical centering */}
        <AlertTriangle size={64} className="text-gold-secondary mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold text-emerald-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-text mb-6">Page Not Found</h2>
        <p className="text-neutral-text-light max-w-md mb-8">
          Oops! The page you were searching for seems to have taken a detour into the emerald mines. Let's guide you back.
        </p>
        <div className="flex space-x-4">
          <Link to="/" className="btn-primary">Return to Homepage</Link>
          <Link to="/products" className="btn-outline">Explore Our Collection</Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage; 