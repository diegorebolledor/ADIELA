import React from 'react';
import { Helmet } from 'react-helmet-async'; // Using react-helmet-async for better SSR and async support

const SEO = ({ title, description, keywords, image, noindex, canonicalUrl }) => {
  const siteName = "Emerald Heritage";
  const defaultDescription = "Exquisite Colombian emeralds and 18k gold jewelry, inspired by tradition and timeless elegance. Explore our curated collection.";
  const defaultKeywords = "colombian emeralds, 18k gold, luxury jewelry, fine jewelry, emerald earrings, emerald pendants, heritage gems, ethical jewelry";
  // TODO: Replace with your actual domain and a default OG image
  const baseUrl = "https://www.your-emerald-heritage.com"; 
  const defaultOgImage = `${baseUrl}/assets/images/og-default.jpg`;

  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const ogImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultOgImage;
  const effectiveCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : baseUrl + (typeof window !== 'undefined' ? window.location.pathname : '');


  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Open Graph / Facebook */} 
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={effectiveCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */} 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      {/* <meta name="twitter:site" content="@YourTwitterHandle"> */}{/* TODO: Add Twitter handle */}

      {/* Canonical URL */} 
      <link rel="canonical" href={effectiveCanonicalUrl} />

      {/* Noindex for specific pages like 404 or internal search results */}
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Favicon - Assumes it's in public folder and linked in index.html, but can be specified here too */}
      {/* <link rel="icon" type="image/svg+xml" href="/assets/images/logo-icon.svg" /> */}
      {/* <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" /> */}
    </Helmet>
  );
};

export default SEO; 