import React from 'react';
import { Helmet } from 'react-helmet-async'; // Using react-helmet-async for better SSR and async support

const SEO = ({ title, description, keywords, image, noindex, canonicalUrl }) => {
  const siteName = "ADIELA";
  const defaultDescription = "ADIELA - Exquisite Colombian emerald jewelry collection in 18k gold. Handcrafted pieces that blend ancient beauty with modern luxury. Discover emerald earrings, pendants, and more.";
  const defaultKeywords = "ADIELA, colombian emeralds, emerald jewelry collection, 18k gold jewelry, luxury emerald jewelry, emerald earrings, emerald pendants, colombian heritage jewelry, handcrafted emerald jewelry, ethical emeralds";
  const baseUrl = "https://adiela.vercel.app"; 
  const defaultOgImage = `${baseUrl}/assets/images/adiela-og-image.jpg`;

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