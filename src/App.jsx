import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context Providers
import { LanguageProvider } from '@/contexts/LanguageContext';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/hooks/ScrollToTop'; // Custom hook to scroll to top on route change
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

// Page Components (Lazy Loaded for better performance)
const HomePage = lazy(() => import('@/pages/HomePage'));
const ProductDetailsPage = lazy(() => import('@/pages/ProductDetailsPage'));
const ProductListingPage = lazy(() => import('@/pages/ProductListingPage'));
const BlogListingPage = lazy(() => import('@/pages/BlogListingPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage')); // Placeholder for potential About Us page
const ContactPage = lazy(() => import('@/pages/ContactPage')); // Placeholder
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage')); // 404 Page

// Placeholder for a loading component
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-brand-white z-[9999]">
    <div className="w-12 h-12 border-4 border-emerald-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            {/* Example: /products/emerald-earrings - slug will be dynamic */}
            <Route path="/products/:slug" element={<ProductDetailsPage />} /> 
            <Route path="/journal" element={<BlogListingPage />} />
            {/* Example: /journal/the-story-of-colombian-emeralds - slug will be dynamic */}
            <Route path="/journal/:slug" element={<BlogPostPage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showMainApp, setShowMainApp] = useState(false);

  // Check for saved language on app load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('adiela-language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      setShowMainApp(true);
    }
  }, []);

  const handleLanguageSelect = (language) => {
    console.log('Language selected in App:', language);
    setSelectedLanguage(language);
    localStorage.setItem('adiela-language', language);
    setShowMainApp(true);
  };

  return (
    <LanguageProvider key={selectedLanguage} initialLanguage={selectedLanguage}>
      {/* Language Switcher - Shows first */}
      {!showMainApp && <LanguageSwitcher onLanguageSelect={handleLanguageSelect} />}
      
      {/* Main Application - Shows after language selection */}
      {showMainApp && <AppContent />}
    </LanguageProvider>
  );
}

export default App; 